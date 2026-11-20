function openCustomModal(html) {
  const modal = document.getElementById("infoModal");
  const body = document.getElementById("infoModalBody");
  if (!modal || !body) return;
  body.innerHTML = html;
  modal.style.display = "block";
}

function closeCustomModal() {
  const modal = document.getElementById("infoModal");
  if (modal) modal.style.display = "none";
}

function openFaqModal() {
  const modal = document.getElementById("faqModal");
  if (modal) modal.style.display = "block";
}

function closeFaqModal() {
  const modal = document.getElementById("faqModal");
  if (modal) modal.style.display = "none";
}

function handleModalClick(e, modalId) {
  if (e.target.id === modalId) {
    document.getElementById(modalId).style.display = "none";
  }
}

// 各活動彈跳視窗呼叫
function openClanComeIn() {
  openCustomModal(`
    <div class="modal-article">
      <h2 style="color:red; text-align:center;">※※ AT團申請 ※※</h2>
      <p>1. 人數至少5人加入LINE群組，並創立好血盟，AT成員需加入血盟。</p>
      <p>2. 留言血盟名稱與標註GM、AT成員在社群的名子，查核血盟與LINE群組後，依照人數發放禮包。</p>
      <p>3. 一個LINE帳號只可領取一份AT團禮包，一個角色只能開啟一個AT禮包，角色超過七轉無法開啟禮包。</p>
      <p>4. 人數若有增加，可再次申請，核對人數後會補發差額的禮包。EX 上次申請10人、這次申請12人，補發2包禮包</p>
      <p>5. 禮包內容物: +8新手武器製作圖紙、AT新手護身符(3日綁)、金幣*5百萬、懷舊代幣(綁)*250、巧克力蛋糕(綁定)*100、名譽貨幣(綁定)*100、經驗藥水200%(綁)*100</p>
      <p>AT新手護身符(3日)效果: 血量+300、魔量+200、經驗+20%、回血+10、回魔、魔防、物減、魔減都+5、力、敏、智、近傷、近命、遠傷、遠命、魔攻都+2、防禦-2</p>
      <div style="text-align:center; margin-top:20px;">
        <button class="download-btn" onclick="closeCustomModal()">關閉視窗</button>
      </div>
    </div>
  `);
}

function openCastleWar() {
  openCustomModal(`
    <div class="modal-article">
      <h2 style="color:red; text-align:center;">※※ 奇岩攻城戰(每週六重啟收回城堡) ※※</h2>
      <p>1. 每周六晚間8點-9點為攻城戰時間，需擁有盟徽的血盟盟主，在無變身狀態，才可以對城堡宣戰。</p>
      <p>2. 破壞守護者之塔，塔底會有王冠(按右鍵挑選重疊物件)，盟主無變身且空手狀態攻擊王冠即可佔領城堡。</p>
      <p>3. 攻城期間可互相不斷佔領城堡，直至攻城時間結束，由最後佔領城堡的血盟攻下城堡。</p>
      <p>4. 攻下城堡的血盟線上成員，自動發放攻城獎勵(懷舊幣500、天幣300萬)，並獲得城堡附加能力。</p>
      <p>5. 攻城剛開始會有大量BOSS駐守城堡內，若未擊殺攻城結束後會自行離去。</p>
      <div style="text-align:center; margin-top:20px;">
        <button class="download-btn" onclick="closeCustomModal()">關閉視窗</button>
      </div>
    </div>
  `);
}

function openBossSkillDesc() {
  openCustomModal(`
    <div class="modal-article">
      <h2 style="color: #d9534f; text-align: center; margin-bottom: 20px;">※※ 【BOSS多重施法說明】 ※※</h2>
      
      <p><b>1. 【蓄力與引爆特性】</b><br>
      首領施法時會進入蓄力無敵狀態，同時出現特效與文字，蓄力完成後鎖定範圍內所有目標腳下引爆。每個目標皆會向外擴散 <b>5×5 格（半徑 2 格）</b> 範圍魔法傷害，站位相近時會互相波及。</p>
      
      <p><b>2. 【團隊抱團保護（上限約 3 倍）】</b><br>
      身旁 2 格內有隊友且<span style="color: #0275d8; font-weight: bold;">保持正常站位（未與首領重疊）</span>時，視為抱團分攤狀態。不論被身旁隊友波及多少次，每人自身承受的<b>總傷害上限強制封頂約 3 倍左右</b>，可大幅降低減員風險。</p>
      
      <p><b>3. 【孤身風箏懲罰（最高約 5 倍）】</b><br>
      若身旁沒有任何隊友，視為孤軍作戰。離首領越遠傷害倍增越嚴重，最高可承受高達 <span style="color: #d9534f; font-weight: bold;">5 倍左右</span> 的毀滅性重擊，切勿嘗試單人遠程拉打！</p>
      
      <p><b>4. 【重疊BOSS連帶懲罰（謹慎評估）】</b><br>
      若有玩家<span style="color: #c9302c; font-weight: bold;">與首領座標完全重疊（0 格）</span>，將<b>解除保護上限(每一位傷害上升10~20%)</b>！<br>
      ⚠️ <b>連帶危害</b>：重疊者腳下的爆炸<b>不會被限制</b>，同時波及身旁所有隊友！重疊踩點的人數越多，加總傷害會越高，請斟酌是否重疊BOSS！</p>
      
      <p><b>5. 【戰術結論】</b><br>
      蓄力時自身防禦手段上好上滿，全體近戰應於首領身旁1~2格，越近越好<b>集中抱團</b>輸出；遠程可進圈抱團或遠離傷害範圍</p>
      
      <div style="text-align: center; margin-top: 25px;">
        <button class="download-btn" onclick="closeCustomModal()">關閉視窗</button>
      </div>
    </div>
  `);
}

function openBountySheriffDesc() {
  openCustomModal(`
    <div class="modal-article">
      <h2 style="color: #c9302c; text-align: center; margin-bottom: 20px; letter-spacing: 1px;">⚔️【江湖通緝令】懸賞捕快與殺人奪寶活動說明 ⚔️</h2>
      <p><span style="color: #c9302c; font-weight: bold;"><b>※在戰鬥區域擊殺不會觸發江湖規則※</b></span><br>
			<br>
      <p><b>1. 【擊殺奪寶與惡名通緝】</b><br>
      凡達到指定等級以上之戰鬥，擊殺對手時將發動<b>奪寶機制</b>掠奪對方身上200萬~10%的<span style="color: #c9302c; font-weight: bold;">金幣</span>。<br>
      掠奪之金幣採取分流機制：<span style="color: #0275d8; font-weight: bold;">50% 直接納入殺手背包</span>，其餘 <span style="color: #c9302c; font-weight: bold;">50% 自動存入自身懸賞池</span>，同時進行全服江湖公告！</p>

      <p><b>2. 【正義捕快・緝凶賞金規則】</b><br>
      任何人只要討伐帶有懸賞金的通緝犯，即可化身捕快領取賞金<br>
		  一樣會觸發擊殺奪寶，掠奪他身上的金幣，但同時也會變為紅人與通緝犯<br>
      - <b>懸賞金 ≤ 500 萬</b>：擊殺後<b>全額領走</b>！<br>
      - <b>懸賞金 &gt; 500 萬</b>：每次擊殺領取其<b>總懸賞金之 50%</b>（保底最少領取 500 萬）！<br>
      💰 <b>貼心防溢位機制</b>：扣除衙門5%稅金後發放。實領金額達 <b>1 億以上自動兌換為【金條(一億)】</b>。</p>

      <p><b>3. 【每週三結算・躲過一週領取賞金】</b><br>
      每逢<b>週三例行維護</b>進行全服懸賞大結算。<br>
      通緝犯若憑藉過人實力生存、未被捕快領走身上賞金，剩餘懸賞金，將全額轉入待領取池！<BR>
		  可至村莊【江湖公佈欄】點選「<b>【懸賞結算】領取剩餘懸賞金</b>」將所有未被領走之賣命錢領回背包！<br>
		  各項生涯擊殺與死亡戰績永久保存。</p>

      <p><span style="color: #c9302c; font-weight: bold;"><b>4. 【掛機受害保障】</b></span><br>
      為保障安心掛機環境，掛機選項裡新增自動復活，保障玩家的掛機可以掛好掛滿<BR>
		  並且玩家於內掛狀態遭其他玩家或其寵物/召喚物擊殺，復活後會獲取以下保護：<br>
      - <b>基礎保護</b>：自動獲得 <span style="color: #2e6da4; font-weight: bold;">2 小時掛機防護罩</span>。<br>
      - <b>雙倍延長</b>：若背包攜帶<b>專用保護延長道具</b>，將自動消耗 1 個並<b>延長為 4 小時</b>雙倍保護！<br>
      ⚠️ <b>保護效果</b>：處於保護狀態且開啟內掛時，<b>完全免疫所有玩家之普通物理攻擊與魔法技能傷害</b>離線後失效。</p>

      <p><b>5. 【懸賞公佈欄・三大風雲榜】</b><br>
      各大村莊公佈欄提供即時戰況查閱：<br>
      - <span style="color: #c9302c; font-weight: bold;">【通緝榜】</span>：展示全服殺人數最多、懸賞金最高之十大通緝惡徒。<br>
      - <span style="color: #0275d8; font-weight: bold;">【捕快榜】</span>：展示擊殺通緝犯次數最多、領取總賞金最高之十大神捕。<br>
      - <span style="color: #8a6d3b; font-weight: bold;">【受害榜】</span>：記錄受搶奪次數與被奪金幣最多之名冊，知恥而後勇！</p>
      <br>
      <div style="text-align: center; margin-top: 30px;">
        <button class="download-btn" onclick="closeCustomModal()">關閉視窗</button>
      </div>
    </div>
  `);
}

function openSurvivalEvent() {
  openCustomModal(`
    <div class="modal-article">
      <h2>※※ 九點大逃殺活動指南 ※※</h2>

      <!-- 階段一 -->
      <div class="modal-section">
        <div class="modal-sec-title">
          <span>【第一階段】秘境狩獵與打寶區</span>
          <span class="modal-tag modal-tag-blue">開戰前 5 分鐘準備</span>
        </div>
        <ul style="padding-left: 20px;">
          <li>每晚活動開啟時，全服廣播後可透過<strong>傳送師</strong>或<strong>活動 NPC</strong> 傳送進場。</li>
          <li><strong>隱藏寶藏 BOSS</strong>：打寶區內全體擊殺<strong>每滿 100 隻怪物</strong>，立即召喚隱藏寶藏王降臨，擊倒可掉落豐富稀有道具！</li>
          <li>準備時間倒數結束後，全員將自動傳送至第二階段大逃殺戰場。</li>
        </ul>
      </div>

      <!-- 階段二：分隊廝殺 -->
      <div class="modal-section pvp">
        <div class="modal-sec-title">
          <span>【第二階段模式 A】紅藍分隊廝殺戰</span>
          <span class="modal-tag modal-tag-red">陣營血戰</span>
        </div>
        <ul style="padding-left: 20px;">
          <li><strong>隨機陣營</strong>：全員隨機分配為【紅隊】與【藍隊】，敵對顯示紫名，同隊可見血條。</li>
          <li><strong>神之詛咒（天罰平衡）</strong>：每分鐘統計雙方人數，<strong>人數較多佔優勢的一方</strong>全員將受到神之詛咒（隨機賦予負面狀態並強制隨機瞬移）！</li>
          <li><strong>連殺與榮譽</strong>：戰場即時公告擊殺王頭銜與擊殺人數（同隊及同 IP 互刷不計分）。</li>
          <li><strong>勝負結算機制</strong>：
            <ul style="padding-left: 18px; list-style-type: circle; margin-top: 4px;">
              <li><strong>勝方</strong>：獲得勝場大獎 + 團隊擊殺積分（最高上限 30 分）。</li>
              <li><strong>敗方</strong>：獲得保底 3 分 + <strong>團隊擊殺分 2 倍加碼</strong>（最高上限 30 分）。</li>
              <li><strong>激烈平局</strong>：雙方同歸於盡或戰況激烈平手，全員發放「英勇奮戰大獎（大獎之一半）」。</li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- 階段二：BOSS 生存 -->
      <div class="modal-section boss">
        <div class="modal-sec-title">
          <span>【第二階段模式 B】終極 BOSS 生存戰</span>
          <span class="modal-tag modal-tag-gold">極限生存</span>
        </div>
        <ul style="padding-left: 20px;">
          <li><strong>終極王者降臨</strong>：戰場內刷新滅世生存 BOSS，傷害極高，考驗全員走位與生存能力！</li>
          <li><strong>仇恨疲乏</strong>：BOSS 追擊同一名目標<strong>超過 10 秒</strong>會失去耐心，強制重置仇恨尋找新獵物。</li>
          <li><strong>空間扭曲突襲（每30秒）</strong>：每半分鐘 BOSS 怒吼扭曲空間，全員隨機施加負面詛咒並強制瞬移。</li>
          <li><strong>絕望增援挑戰</strong>：開戰 5 分鐘後，若存活人數 ≥ 30 人且存活率高於 50%，將額外召喚第二隻甚至第三隻復仇 BOSS 增援！</li>
          <li><strong>生存結算</strong>：時間結束時<strong>只要有人存活全體即獲勝</strong>，全員發放大獎；若撐過增援 BOSS 考驗，每存活 1 人全體額外多得 +1 積分（最高加碼 30 分）。全滅則發放 10 積分安慰獎。</li>
        </ul>
      </div>

      <!-- 注意事項 -->
      <div class="modal-section notice">
        <div class="modal-sec-title">
          <span>【重要規則】生存積分與防逃機制</span>
        </div>
        <ul style="padding-left: 20px;">
          <li>活動獲取之<strong>生存積分券</strong>可至村莊「生存積分商店」購買專屬商品。</li>
        </ul>
        <div class="modal-warn-box">
          ⚠️ <strong>防逃跑懲處</strong>：必須<strong>戰鬥至最後結算</strong>或<strong>在場內合法戰死</strong>方可領取正常獎勵。<br>
          若非戰死狀態提前回村、離場或順移脫離，視為逃兵，<strong>取消大獎與擊殺加乘，僅能獲得 3 點保底積分！</strong>
        </div>
      </div>

      <div style="text-align: center; margin-top: 20px;">
        <button class="download-btn" onclick="closeCustomModal()">關閉視窗</button>
      </div>
    </div>
  `);
}

function open9clock40event() {
  openCustomModal(`
    <div class="modal-article">
      <h2 style="color:red; text-align:center;">※※ 九點半寶藏地宮 ※※</h2>
      <p>1. 每晚九點四十分，主城廣播某處出現兩個傳送陣(不同區域)，繳納100萬進場奪寶。</p>
      <p>2. 地圖內有寶藏怪物擊殺後獲取稀有道具，地圖內不可使用內掛。</p>
      <p>3. 剩餘怪物數量會在地圖內廣播通知，總數一百隻怪物，死亡後不再復活。</p>
      <div style="text-align:center; margin-top:20px;">
        <button class="download-btn" onclick="closeCustomModal()">關閉視窗</button>
      </div>
    </div>
  `);
}

function open10clockevent() {
  openCustomModal(`
    <div class="modal-article">
      <h2 style="color:red; text-align:center;">※※ 十點無限大戰 ※※</h2>
      <p>1. 每晚10點-10點半可由傳送師進場，前十波會召喚低中高階BOSS，最後一波為最終BOSS。</p>
      <p>2. 初中高階BOSS分布在上右下方，最後一波則在中間，可依據自身能力討伐。</p>
      <p>3. 場內戰利品採平均分配制，造成傷害即可分配，餘數則依傷害排名順序分配。</p>
      <p>4. 場內可自由進出並且死亡無任何懲罰。</p>
      <div style="text-align:center; margin-top:20px;">
        <button class="download-btn" onclick="closeCustomModal()">關閉視窗</button>
      </div>
    </div>
  `);
}

function openTimeClockevent() {
  openCustomModal(`
    <div class="modal-article">
      <h2 style="color:red; text-align:center;">※※ 定時獎勵怪出沒 ※※</h2>
      <p>1. 每日早晚3、6、9、12點，會廣播50隻惡棍地痞在說話之島或海賊島出沒。</p>
      <p>2. 擊殺可獲取懷舊幣、元寶、與稀有道具，此為獎勵新手可輕易擊殺，未擊殺的惡棍地痞不會消失。</p>
      <p>3. 特別注意：內掛不會攻擊他、冰雪暴也無法傷害他。</p>
      <div style="text-align:center; margin-top:20px;">
        <button class="download-btn" onclick="closeCustomModal()">關閉視窗</button>
      </div>
    </div>
  `);
}

function openAcademyBattle() {
  openCustomModal(`
    <div class="modal-article">
      <h2 style="color: #b30000; text-align: center; border-bottom: 2px solid #b30000; padding-bottom: 12px; margin: 0 0 20px 0;">⚔️『學院戰場 2.0』活動完整指南 ⚔️</h2>

      <h3>【一、 學院陣營與模式投票】</h3>
      <ul style="padding-left: 20px;">
        <li><b>學院選擇</b>：請至主城尋找「學院管理員」選擇加入 <span style="color:#b30000; font-weight:bold;">破軍學院</span> 或 <span style="color:#0b4f8a; font-weight:bold;">禦守學院</span>。可免費退學（學院積分歸零），亦可透過元寶商人購買「轉學證明」保留積分轉學。</li>
        <li><b>活動進程</b>：每日活動開放前 5 分鐘進行全服廣播並開啟「戰場模式投票」，活動正式開啟後戰鬥時間為 20 分鐘，時間截止時地圖內所有玩家將自動傳送回主城並進行最終結算。</li>
        <li><b>分隊模式投票</b>：玩家可於管理員處投下期望的模式（1: 原學院分隊、2: 個人全隨機分隊、3: 組隊隨機分隊）。開門時系統將由<b>前兩高票依比例抽籤決定</b>，避免單一陣營惡意灌票（抽中個人隨機模式時，進場將自動退出隊伍各自為戰）。</li>
      </ul>

      <h3>【二、 進場規則、身分匿名與貢獻度達標】</h3>
      <ul style="padding-left: 20px;">
        <li><b>入場與陣營基地</b>：活動開始後由傳送師進場，地圖左側為破軍傳入與復活點，右側為禦守傳入與復活點。雙方陣營基地配置守護教官，將主動擊退入侵的敵方玩家；剛復活之玩家享有保護機制，不會立即顯示主動攻擊劍圖示。</li>
        <li><b>外觀匿名與戰術溝通</b>：進場後所有玩家角色名稱將強制匿名，魔法娃娃統一變更為經驗公主外觀（能力完全保留），並隱藏城主王冠。戰場內全面禁止順移、召喚寵物，且<b>戰場內禁止使用大喊頻道</b>，請直接使用一般頻道與同陣營戰友溝通。</li>
        <li><span style="color:#b30000; font-weight:bold;">【學院貢獻度達標與在線資格】（核心重點）</span>：
          <ul style="padding-left: 18px;">
            <li>學員在戰場中的各項行動（擊殺/助攻玩家、擊殺怪物、爭奪據點、奪劍護送、摧毀/佔領守護塔）皆會持續累積<b>「學院貢獻分」</b>。戰場內有個人記分板，可隨時查看獲取分數。</li>
            <li>活動結束結算時，<b>個人學院貢獻分達標且「保持在線」</b>的活躍學員，方享有學院總積分分紅資格並可參與「榮譽稱號王」評選（<span style="color:#b30000; font-weight:bold;">貢獻度未達標或結算時處於離線狀態者，皆無法獲得任何結算獎勵、分紅與稱號</span>）。</li>
          </ul>
        </li>
      </ul>

      <h3>【三、 戰場三大核心戰略爭奪】</h3>
      <div class="modal-obj-box">
        <p><b>🏰【中央守護者之塔】（戰略防守與積分泉源）</b></p>
        <ul style="padding-left: 20px;">
          <li>守護塔坐落於戰場中央廣場，初始為中立狀態，可由任一陣營攻打摧毀以奪取佔領權。</li>
          <li><b>防護機制</b>：守護之塔受到遠距傷害<b>減半</b>，並享有單次傷害上限防護；佔領方同陣營成員無法攻擊己方守護塔，對己方守護塔可施放治癒術，單次補血量有上限僅微量補血。</li>
          <li><b>佔領與防禦收益</b>：佔領陣營每 5 秒自動獲得 <span style="color:#b30000; font-weight:bold;">學院總積分 +7 分</span>；在守護塔周圍 8 格範圍內的玩家每 5 秒獲得 <span style="color:#b30000; font-weight:bold;">學院貢獻分 +2 分</span>（設有個人動態累積上限，積極參與擊殺與助攻可持續擴充上限）。</li>
          <li><b>摧毀與重生</b>：推倒守護塔將進行全場廣播並計入最後一擊者個人「推塔數」，守護塔於 5 秒後將重生成為擊破陣營的所屬塔！</li>
        </ul>
      </div>

      <div class="modal-obj-box">
        <p><b>⚔️【賢者之劍奪劍護送】（兵家必爭積分神器）</b></p>
        <ul style="padding-left: 20px;">
          <li>戰場<b>上方平台</b>將降臨神聖神器「賢者之劍」，全場勇士皆可拾取。拾取後持劍者將散發沉重枷鎖。</li>
          <li><b>持劍負面挑戰</b>：持劍者身負巨力，每 5 秒將承受藥水霜化術、魔法封印（並有 60% 機率觸發骷髏破壞造成暈眩）效果，極度考驗走位與團隊護駕！</li>
          <li><b>持劍與護送收益</b>：持劍者每 5 秒獲得 <span style="color:#b30000; font-weight:bold;">貢獻分 +5、學院總積分 +5</span>；在持劍者畫面範圍內的同陣營護送戰友，每 5 秒亦可獲得 <span style="color:#b30000; font-weight:bold;">貢獻分 +3</span>（護送貢獻同樣設有個人動態累積上限，參與擊殺與助攻可持續擴充上限）！</li>
          <li><b>成功護送基地</b>：將賢者之劍一路護送回己方陣營基地（復活點周邊 4 格內），賢者之劍將化為強大能量回收，所屬學院立即獲得 <span style="color:#b30000; font-weight:bold;">學院總積分 +250 分</span>，持劍者獲得 <span style="color:#b30000; font-weight:bold;">貢獻分 +50 與奪劍次數 +1</span>！賢者之劍將於 1 分鐘後再次於上方平台重現。</li>
          <li><b>斬殺與重置</b>：持劍者陣亡或離線時劍會掉落於地面，斬殺持劍者可獲得 <span style="color:#b30000; font-weight:bold;">貢獻分 +20 與學院總積分 +20</span>；掉落於地面超過 30 秒未被拾取，將自動回歸上方平台。</li>
        </ul>
      </div>

      <div class="modal-obj-box">
        <p><b>🚩【據點首領突襲】（強效Buff逆轉戰局）</b></p>
        <ul style="padding-left: 20px;">
          <li>位於戰場下方據點，由據點首領與其隨從部隊駐守，首領死亡後每隔 2 分鐘重新降臨。</li>
          <li>最後一擊擊殺首領者獲得 <span style="color:#b30000; font-weight:bold;">貢獻分 +30、據點首領擊殺數 +1</span>，參與攻擊之同陣營助攻隊友獲得 <span style="color:#b30000; font-weight:bold;">貢獻分 +10</span>；所屬學院獲得 <span style="color:#b30000; font-weight:bold;">學院總積分 +150（若最後一擊者處於神聖光環下高達 +300 分）</span>！</li>
          <li>成功擊殺據點首領之陣營全體成員，立即享有<b>【全體弱勢 BUFF 提升一階（持續 2 分鐘）】</b>的強大戰力加成！</li>
        </ul>
      </div>

      <h3>【四、 學院神聖 BUFF、弱勢逆轉與傷害上限】</h3>
      <ul style="padding-left: 20px;">
        <li><b>戰場傷害保護</b>：戰場全圖受神聖結界保護，單次攻擊傷害設有上限防護。</li>
        <li><b>神聖 BUFF 啟動</b>：戰場內 10 格範圍內集結 3 名同陣營戰友（或持有專屬學院道具增益），每 5 秒自動觸發 10 秒神聖光環（同陣營可互相施放聖結界、生命的祝福、體力回復術）：
          <ul style="padding-left: 18px;">
            <li><span style="color:#0b4f8a; font-weight:bold;">禦守學院神聖 BUFF</span>：承受普攻單次傷害上限不超過自身最大 HP 10%（最低不低於 1,000）；受到普攻時有 15% 機率完全免傷並 100% 反彈該傷害；普攻命中失敗時有 25% 強制修正為命中。</li>
            <li><span style="color:#b30000; font-weight:bold;">破軍學院神聖 BUFF</span>：普攻每下附加 150 點真實傷害（三重矢每箭附加 50 點真實傷害）；命中失敗有 25% 強制修正為命中；攻擊帶有禦守 BUFF 之目標時，有 15% 機率無視其防護打出原始傷害。</li>
            <li><b>怪物增傷效果</b>：兩種神聖 BUFF 攻擊小怪皆附加其最大 HP 10% 固定傷害，攻擊小 BOSS 附加最大 HP 5% 固定傷害。</li>
          </ul>
        </li>
        <li><b>逆轉弱勢增益（無需集結自動常駐）</b>：
          <ul style="padding-left: 18px;">
            <li>當戰局開打後，學院積分落後達 300 分時啟動「<b>弱勢一階</b>」（神聖效果翻倍為 2 倍，神聖光環下擊殺小怪學院積分額外 +1）。</li>
            <li>當積分落後達 500 分，或「弱勢一階」持續達 7 分鐘時，升級為「<b>弱勢二階</b>」（神聖效果翻倍為 3 倍，神聖光環下擊殺小怪學院積分額外 +2，且 <b>PVP 擊殺敵方玩家個人積分額外 +2</b>）。啟動後至少鎖定維持 1 分鐘以上。</li>
          </ul>
        </li>
      </ul>

      <h3>【五、 首領召喚與怪物獵殺積分】</h3>
      <ul style="padding-left: 20px;">
        <li><b>戰場小怪</b>：擊殺獲得個人貢獻分 +1（處於神聖 BUFF 時學院總積分額外 +2，若享有弱勢一/二階再額外 +1/+2，個人貢獻分額外+1）。全場累計擊殺小怪每達 50 隻將召喚小 BOSS「大大」前來復仇；累計達 1200 隻將於【中央廣場】召喚戰場霸主「暗黑刀神Jr」。</li>
        <li><b>戰場首領</b>：
          <ul style="padding-left: 18px;">
            <li>小 BOSS（大大）：每次發生 PVP 擊殺或累計殺怪時現身。擊殺個人積分 +1、貢獻分 +5、學院總積分 +5（神聖 BUFF 下為 +10）。</li>
            <li>大 BOSS（暗黑刀神Jr）：全場玩家死亡累計達 50 人（現身於上方平台）或殺怪達 1200 隻（現身於中央廣場）時降臨。擊殺個人積分 +50、貢獻分 +100、學院總積分 +150（神聖 BUFF 下高達 +300），參與攻擊之同陣營助攻隊友貢獻分 +30！</li>
            <li>怪物會掉落破軍/禦守脛甲(α、β、γ)，小怪不會掉落γ，數據可於防具介紹查看，另除小怪外皆有機率掉落道教九秘典籍與法寶，物品掉落享有 10 秒拾取優先權。</li>
          </ul>
        </li>
      </ul>

      <h3>【六、 PVP 對決、勝負掠奪分紅與九大榮譽稱號王】</h3>
      <ul style="padding-left: 20px;">
        <li><b>PVP 擊殺與助攻</b>：
          <ul style="padding-left: 18px;">
            <li>擊殺敵對玩家：個人積分 +3（若己方處於<b>弱勢二階</b>則為 <span style="color:#b30000; font-weight:bold;">+5</span>）、貢獻分 +20、學院總積分 +10（弱勢二階為 +15），並立刻召喚一隻小 BOSS「大大」加入戰局！</li>
            <li>助攻獎勵（目標陣亡前 15 秒內造成傷害）：個人積分 +1、貢獻分 +10、學院總積分 +2。</li>
          </ul>
        </li>
        <li><b>陣營勝負掠奪與結算分配機制</b>：
          <ul style="padding-left: 18px;">
            <li><span style="color:#b30000; font-weight:bold;">【勝方掠奪 20% 分紅池】</span>：結算時學院總積分較高之獲勝陣營，將直接<b>掠奪敗方陣營 20% 的總積分分紅池</b>納為己有（敗方僅剩 80% 分紅池)！</li>
            <li><b>60% 基礎分紅池</b>：由所屬學院所有在線達標學員，依個人<b>「貢獻分比例」</b>公平瓜分。</li>
            <li><b>40% 擊殺分紅池</b>：由所屬學院在線達標學員，依個人<b>「有效擊殺貢獻比（擊殺數 + 0.25 × 助攻數）」</b>進行額外戰鬥分紅。</li>
            <li>結算所得之總積分（個人戰鬥積分 + 學院基礎分紅 + 擊殺助攻分紅）將直接轉入角色之學院位階總分。</li>
          </ul>
        </li>
        <li><b>👑【各陣營九大榮譽稱號王評選】</b>：
          <p>活動結算時，雙方陣營將依下列優先順序各自獨立評選在線達標學員（每人限得一項稱號，數值需大於 0；同分時依序比較貢獻分與個人積分），榮獲稱號者將額外獲得<b>【學院硬幣 x 5】</b>，並於戰績榜顯示專屬代表符號：</p>
          <div class="modal-tag-grid">
            <span class="modal-tag-badge">★ 擊殺王</span>
            <span class="modal-tag-badge">▲ 助攻王</span>
            <span class="modal-tag-badge">※ 積分王</span>
            <span class="modal-tag-badge">☆ 貢獻王</span>
            <span class="modal-tag-badge">● 打野王</span>
            <span class="modal-tag-badge">■ 據點王</span>
            <span class="modal-tag-badge">◆ 奪劍王</span>
            <span class="modal-tag-badge">◎ 推塔王</span>
            <span class="modal-tag-badge">▼ 奉獻王(死亡數)</span>
          </div>
        </li>
      </ul>

      <div class="modal-warn-box" style="margin-top:20px; border-style:solid; border-width:1.5px;">
        <h3 style="color:#b30000; margin-top:0; border-left:none; padding-left:0;">🛡️【重要規章：戰場風紀與防弊監控機制】</h3>
        <p>戰場全面啟用<b>多維度動態行為監控系統</b>（針對同 IP 異常互殺、短時間連續餵分、多次死亡卻毫無實質作戰與貢獻等破壞競技平衡之行為進行全時段自動分析）：</p>
        <ul style="padding-left: 20px;">
          <li>系統以玩家<b>全方位戰場實質貢獻度</b>為評估依據，若判定對抗行為異常、短時間重複擊殺同一目標或缺乏實質作戰貢獻，將<b>即時自動攔截並中斷計分</b>，該次擊殺不予發放任何積分、貢獻分與戰績。</li>
          <li>系統配備<b>階梯式警示與嚴懲機制</b>：初期異常（第 1~2 次）將予以系統警報提示；若經警告仍持續違規（第 3~4 次），系統將<b>每次直接扣除個人戰場積分 30 點上繳學院，並通報全場</b>。</li>
          <li><b>嚴重累犯者（累計達 5 次警告）</b>：系統將<b>強制驅逐出場、列入當場次黑名單禁止再次進場（含組隊跟隨）、沒收全額戰場積分平分給雙方學院、全伺服器公告懲戒，並直接重罰扣除角色本體學院總積分 100 點</b>！請各位勇士遵守公平競技原則，切勿投機取巧。</li>
        </ul>
      </div>

      <div style="text-align: center; margin-top: 25px;">
        <button class="download-btn" onclick="closeCustomModal()">關閉視窗</button>
      </div>
    </div>
  `);
}

function openDisclaimer() {
  openCustomModal(`
    <div class="modal-article">
      <h2 style="color:red; text-align:center;">※※ 免責聲明 ※※</h2>
      <h3 style="color:#b8860b; text-align:center; border:none; padding:0;">【私下交易免責與電磁紀錄聲明】</h3>
      <p>本伺服器絕對不干涉、不鼓勵且不保障玩家間的任何私下交易行為（包含但不限於帳號買賣、虛寶與現實金錢之交易）。</p>
      <p>玩家進行私下交易需自行承擔受騙、詐欺等一切衍生風險。若因私下交易產生任何糾紛，一概不介入處理，並且有權拒絕提供伺服器電磁紀錄、資料庫日誌或連線IP供玩家查詢或比對。請玩家務必提高警覺，謹慎交易。</p>
      <div style="text-align:center; margin-top:20px;">
        <button class="download-btn" onclick="closeCustomModal()">關閉視窗</button>
      </div>
    </div>
  `);
}
