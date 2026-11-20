const API_URL = "https://script.google.com/macros/s/AKfycbw9mAM_Br8ZlFn5CWL0E9Q3JSkHilINtl0R9-B-G_ipeGrUuoxVP0JWSwJ6X1b6oiXT/exec";

let commentInterval = null;
let currentQuestionId = null;
let currentServer = 1; // 1 = 一服, 2 = 二服
let currentTabIndex = null;
let currentTabBtn = null;

function toggleServer() {
  currentServer = currentServer === 1 ? 2 : 1;
  const isServer2 = currentServer === 2;
  document.body.classList.toggle("server-2", isServer2);

  const toggleBtn = document.getElementById("serverToggleBtn");
  if (toggleBtn) {
    toggleBtn.innerText = isServer2 ? "🔥 目前：二服" : "🔄 目前：一服";
  }

  if (currentTabIndex !== null) {
    showData(currentTabIndex, currentTabBtn);
  }
}

// 防 XSS 跳脫函式
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function showData(index, btnElem) {
  const title = List[index];
  const serverData = DATA_BY_SERVER[currentServer] || DATA_SERVER_1;
  const text = serverData[index];
  const content = document.getElementById('content');

  if (title === "疑難雜症") {
    openFaqModal();
    return;
  }

  if (title === "待更新") {
    alert(text);
    return;
  }

  currentTabIndex = index;
  currentTabBtn = btnElem || null;

  document.querySelectorAll(".header-nav button:not(.server-toggle-btn)").forEach(b => b.classList.remove("active"));
  if (btnElem) btnElem.classList.add("active");

  if (commentInterval) {
    clearInterval(commentInterval);
    commentInterval = null;
  }

  const serverLabel = currentServer === 2 ? "二服" : "一服";
  const serverBadge = `<span class="server-badge ${currentServer === 2 ? "is-server-2" : ""}">${serverLabel}</span>`;

  if (text === "__ONLINE_COMMENT__") {
    content.innerHTML = `
      <div class="content-box">
        <h2 class="h2-purple">${serverBadge} 遊戲內容Q&A 問答板 (提問 / 回覆)</h2>
        <div style="margin-top:15px;">
          <input id="visitorName" placeholder="暱稱 (玩家)" style="width:250px; max-width:100%; padding:8px; margin-bottom:8px; border:1px solid #ccc; border-radius:4px;"><br>
          <textarea id="questionInput" style="width:100%; max-width:550px; height:60px; padding:8px; border:1px solid #ccc; border-radius:4px; resize:none;" placeholder="請輸入你的問題"></textarea><br>
          <button class="download-btn" onclick="sendQuestion()">發佈問題</button>
        </div>
        
        <div style="margin-top:20px; border-top:1px dashed #ccc; padding-top:15px;">
          <input id="answerName" placeholder="暱稱 (玩家)" style="width:250px; max-width:100%; padding:8px; margin-bottom:8px; border:1px solid #ccc; border-radius:4px;"><br>
          <textarea id="answerInput" style="width:100%; max-width:550px; height:60px; padding:8px; border:1px solid #ccc; border-radius:4px; resize:none;" placeholder="請輸入你的回答"></textarea><br>
          <button class="download-btn" onclick="sendAnswer()">發佈回答</button>
        </div>

        <div id="qaList" style="margin-top:25px;">載入問答紀錄中...</div>
      </div>
    `;
    loadQA();
    commentInterval = setInterval(loadQA, 10000);
    return;
  }

  if (text === "__WEAPON_SHOWCASE_S2__") {
    renderWeaponShowcaseS2(content, serverBadge, title);
    return;
  }

  content.innerHTML = `
    <div class="content-box">
      <div class="h2-purple" style="border-bottom:2px solid #ddd; padding-bottom:8px; margin-bottom:15px;">${serverBadge} ${title}</div>
      <div style="margin-top: 1rem;">${text}</div>
    </div>
  `;
}

function getVisitorID() {
  let id = localStorage.getItem("visitor_id");
  if (!id || !id.includes("訪客")) {
    id = "訪客" + Math.random().toString(36).substring(2, 7);
    localStorage.setItem("visitor_id", id);
  }
  return id;
}

async function sendQuestion() {
  const visitor = document.getElementById("visitorName").value.trim() || getVisitorID();
  const question = document.getElementById("questionInput").value.trim();
  if (!question) return alert("請輸入問題");

  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ visitor, question })
  });
  document.getElementById("questionInput").value = "";
  loadQA();
}

function prepareAnswer(qid) {
  currentQuestionId = qid;
  alert("你正在回答問題 ID: " + qid);
}

async function sendAnswer() {
  if (!currentQuestionId) return alert("請先點選下方【回答這個問題】按鈕選擇問題");
  const answerer = document.getElementById("answerName").value.trim() || "玩家";
  const answer = document.getElementById("answerInput").value.trim();
  if (!answer) return alert("請輸入回答");

  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ answerer, answer, questionId: currentQuestionId })
  });
  document.getElementById("answerInput").value = "";
  loadQA();
}

async function loadQA() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    const qaList = document.getElementById("qaList");
    if (!qaList) return;

    data.sort((a, b) => new Date(b.time) - new Date(a.time));

    qaList.innerHTML = data.map(item => {
      const answersHtml = (item.answers && item.answers.length > 0)
        ? item.answers.map(a => {
            let displayName = escapeHtml(a.answerer);
            let displayColor = "#333";
            if (a.answerer === "<懷舊GM>") {
              displayName = "GM";
              displayColor = "red";
            } else if (a.answerer === "GM") {
              displayName = "玩家";
            }

            return `
              <div style="margin-left:20px; margin-top:6px; padding:6px; background:#f5f5f5; border-radius:4px;">
                <b>${displayName} 回覆：</b>
                <span style="color:${displayColor};">${escapeHtml(a.answer)}</span>
                <small style="margin-left:10px; color:#888;">${new Date(a.time).toLocaleString()}</small>
              </div>
            `;
          }).join("")
        : `<div style="margin-left:20px; margin-top:5px; color:#999;"><i>尚未有人回覆</i></div>`;

      return `
        <div style="padding:12px; border-bottom:1px solid #eee; margin-bottom:8px;">
          <small style="color:#888;">${new Date(item.time).toLocaleString()}</small>
          <b style="color:#0056b3;"> ${escapeHtml(item.visitor)}</b> 問：<br>
          <div style="margin: 6px 0 6px 15px; color:#222; font-weight:500;">${escapeHtml(item.question)}</div>
          ${answersHtml}
          <div style="margin-top:8px;">
            <button class="download-btn" style="padding:4px 10px; font-size:0.85rem;" onclick="prepareAnswer('${escapeHtml(item.id)}')">回答這個問題</button>
          </div>
        </div>
      `;
    }).join("");
  } catch(err) {
    console.log("讀取Q&A失敗:", err);
  }
}

// ================= 二服武器介紹互動展示 =================
let currentWeaponTypeS2 = "ALL";

function renderWeaponShowcaseS2(content, serverBadge, title) {
  currentWeaponTypeS2 = "ALL";
  const weapons = typeof SERVER2_WEAPONS !== "undefined" ? SERVER2_WEAPONS : [];
  const types = [];
  const seen = new Set();
  weapons.forEach(w => {
    if (!seen.has(w.type)) {
      seen.add(w.type);
      types.push({ type: w.type, label: w.typeLabel });
    }
  });

  const typeButtonsHtml = [
    `<button class="weapon-filter-btn active" data-type="ALL" onclick="setWeaponTypeS2('ALL', this)">全部 (${weapons.length})</button>`,
    ...types.map(t => `<button class="weapon-filter-btn" data-type="${escapeHtml(t.type)}" onclick="setWeaponTypeS2('${escapeHtml(t.type)}', this)">${escapeHtml(t.label)}</button>`)
  ].join("");

  content.innerHTML = `
    <div class="content-box">
      <div class="h2-purple" style="border-bottom:2px solid #ddd; padding-bottom:8px; margin-bottom:15px;">${serverBadge} ${title}（資料庫樣本預覽）</div>
      <div class="weapon-toolbar">
        <input type="text" id="weaponSearchS2" class="weapon-search-input" placeholder="🔍 搜尋武器名稱..." oninput="filterWeaponsS2()">
        <select id="weaponClassS2" class="weapon-class-select" onchange="filterWeaponsS2()">
          <option value="ALL">全部職業</option>
          <option value="王族">王族</option>
          <option value="騎士">騎士</option>
          <option value="法師">法師</option>
          <option value="妖精">妖精</option>
          <option value="黑妖">黑妖</option>
          <option value="龍騎">龍騎</option>
          <option value="幻術">幻術</option>
        </select>
        <span id="weaponCountS2" class="weapon-count-label"></span>
      </div>
      <div class="weapon-filter-bar">${typeButtonsHtml}</div>
      <div id="weaponGridS2" class="weapon-grid"></div>
    </div>
  `;

  filterWeaponsS2();
}

function setWeaponTypeS2(type, btnElem) {
  currentWeaponTypeS2 = type;
  document.querySelectorAll(".weapon-filter-btn").forEach(b => b.classList.remove("active"));
  if (btnElem) btnElem.classList.add("active");
  filterWeaponsS2();
}

function filterWeaponsS2() {
  const weapons = typeof SERVER2_WEAPONS !== "undefined" ? SERVER2_WEAPONS : [];
  const keyword = (document.getElementById("weaponSearchS2")?.value || "").trim().toLowerCase();
  const cls = document.getElementById("weaponClassS2")?.value || "ALL";
  const grid = document.getElementById("weaponGridS2");
  const countEl = document.getElementById("weaponCountS2");
  if (!grid) return;

  const filtered = weapons.filter(w => {
    if (currentWeaponTypeS2 !== "ALL" && w.type !== currentWeaponTypeS2) return false;
    if (cls !== "ALL" && (!w.classes || !w.classes.includes(cls))) return false;
    if (keyword && !w.name.toLowerCase().includes(keyword)) return false;
    return true;
  });

  if (countEl) {
    countEl.textContent = `顯示 ${filtered.length} / ${weapons.length} 件`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="weapon-empty">找不到符合條件的武器</div>`;
    return;
  }

  grid.innerHTML = filtered.map(w => {
    const safeText = w.safe < 0 ? "不可強化" : `+${w.safe}`;
    const stats = [];
    if (w.hit) stats.push(`命中 ${w.hit > 0 ? "+" + w.hit : w.hit}`);
    if (w.dmg) stats.push(`額外傷害 ${w.dmg > 0 ? "+" + w.dmg : w.dmg}`);
    if (w.str) stats.push(`力量 ${w.str > 0 ? "+" + w.str : w.str}`);
    if (w.dex) stats.push(`敏捷 ${w.dex > 0 ? "+" + w.dex : w.dex}`);
    if (w.con) stats.push(`體質 ${w.con > 0 ? "+" + w.con : w.con}`);
    if (w.int) stats.push(`智力 ${w.int > 0 ? "+" + w.int : w.int}`);
    if (w.wis) stats.push(`精神 ${w.wis > 0 ? "+" + w.wis : w.wis}`);
    if (w.cha) stats.push(`魅力 ${w.cha > 0 ? "+" + w.cha : w.cha}`);
    if (w.hp) stats.push(`HP ${w.hp > 0 ? "+" + w.hp : w.hp}`);
    if (w.mp) stats.push(`MP ${w.mp > 0 ? "+" + w.mp : w.mp}`);
    if (w.hpr) stats.push(`回血 ${w.hpr > 0 ? "+" + w.hpr : w.hpr}`);
    if (w.mpr) stats.push(`回魔 ${w.mpr > 0 ? "+" + w.mpr : w.mpr}`);
    if (w.sp) stats.push(`魔攻 ${w.sp > 0 ? "+" + w.sp : w.sp}`);
    if (w.mr) stats.push(`魔防 ${w.mr > 0 ? "+" + w.mr : w.mr}`);
    if (w.crit) stats.push(`暴擊率 ${w.crit}%`);
    if (w.unbreakable) stats.push(`不會壞刀`);

    const skillsHtml = (w.skills && w.skills.length > 0)
      ? w.skills.map(sk => `<span class="weapon-stat-tag skill">✨ ${escapeHtml(sk)}</span>`).join("")
      : "";

    const statsHtml = (skillsHtml || stats.length > 0)
      ? skillsHtml + stats.map(s => `<span class="weapon-stat-tag">${escapeHtml(s)}</span>`).join("")
      : `<span class="weapon-stat-tag muted">無額外加成</span>`;

    const classesText = (w.classes && w.classes.length > 0) ? w.classes.join(" / ") : "無職業限制";

    return `
      <div class="weapon-card">
        <div class="weapon-card-header">
          <span class="weapon-name">${escapeHtml(w.name)}</span>
          <span class="weapon-type-badge">${escapeHtml(w.typeLabel)}</span>
        </div>
        <div class="weapon-core-stats">
          <span>⚔️ 攻擊：<b>${w.minDmg} / ${w.maxDmg}</b></span>
          <span>🛡️ 安定：<b>${safeText}</b></span>
        </div>
        <div class="weapon-classes">👤 職業：${escapeHtml(classesText)}</div>
        <div class="weapon-bonus-list">${statsHtml}</div>
      </div>
    `;
  }).join("");
}

// ================= 彈窗與遮罩控制函式 (防阻擋) =================
