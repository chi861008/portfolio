const projects = [
  {id:'scheduling',number:'01',title:'Pilates Scheduling',zh:'皮拉提斯排課系統',type:'0→1 PRODUCT BUILDING',summary:'從老師真實的排課困境出發，獨立定義產品規則、設計流程並開發可操作的系統。',role:'Independent Product Builder',year:'2026',visual:'schedule'},
  {id:'kiosk',number:'02',title:'KIOSK Redesign',zh:'次世代自助點餐機',type:'RESEARCH-DRIVEN DESIGN',summary:'從研究發現到產品改善：整合軟硬體付款引導，重新檢視完整點餐體驗。',role:'UX Research & Product Design',year:'2025–2026',visual:'kiosk'},
  {id:'kds',number:'03',title:'Kitchen Display System',zh:'廚房顯示系統研究與概念設計',type:'RESEARCH → INDEPENDENT UI',summary:'深入廚房現場，從批次製作與出餐協作的研究洞察，延伸出一套獨立設計的 KDS 介面。',role:'UX Research & Independent UI Concept',year:'2026',visual:'kds'}
];
const app = document.querySelector('#app');
const figmaURL='https://www.figma.com/design/S2sh6gtlIJ3JtDM7i3MEiN/portfolio?node-id=1654-18351';
const repoURL='https://github.com/chi861008/researved-system';
const visual=(name)=>name==='schedule'?'<div class="work-visual visual-schedule"><div class="arrow-circle" aria-hidden="true">↗</div><div class="schedule-mock"><div class="schedule-top"><strong>Weekly schedule</strong><span>October / 2026　↗</span></div><div class="calendar-week">'+['MON','TUE','WED','THU','FRI','SAT','SUN'].map((d,i)=>'<div class="calendar-day"><b>'+d+'</b>'+(i===0||i===2||i===4?'<span class="calendar-pill">Pilates 10:00</span>':'')+(i===1||i===3?'<span class="calendar-pill orange-pill">Private 14:00</span>':'')+'</div>').join('')+'</div></div></div>':name==='kiosk'?'<div class="work-visual visual-kiosk kiosk-image-cover"><img src="./kiosk-cover.png" alt="KIOSK 自助點餐介面與付款引導的設計畫面拼貼"><div class="arrow-circle" aria-hidden="true">↗</div></div>':'<div class="work-visual visual-kds kds-image-cover"><img src="./kds-cover.png" alt="KDS 個人概念設計封面：深色廚房訂單與分類畫面的介面拼貼"><div class="arrow-circle" aria-hidden="true">↗</div></div>';
const card=p=>'<a class="work-card" href="#/case/'+p.id+'">'+visual(p.visual)+'<div class="work-info"><div><h3>'+p.title+'</h3><p>'+p.zh+'<br>'+p.type+'</p></div><div class="project-number">'+p.number+' / 03</div></div></a>';
function home(){return '<section class="identity-hero"><div class="identity-wrap"><h1 class="visually-hidden">Yuan Chi — UX Designer &amp; Product Builder</h1><div class="identity-caption">PORTFOLIO / 2026</div><div class="identity-title"><span>Yuan</span><figure class="identity-photo"><img src="./yuan-chi-portrait.png" alt="Yuan Chi 的黑白人像"><i class="corner c1"></i><i class="corner c2"></i><i class="corner c3"></i><i class="corner c4"></i></figure><span>Chi</span></div><div class="identity-details"><p>UX Designer ×<br>Product Builder</p><p>Research / Strategy / Design<br>From insight to working product</p><p>Based in Taiwan<br><a href="mailto:chi861008@gmail.com">chi861008@gmail.com ↗</a></p></div></div></section><section class="intro-portrait wrap" id="about"><div class="intro-copy"><div class="eyebrow">ABOUT ME</div><h2>Hi<span class="orange">.</span></h2><p>我是一名具工業設計背景的 UX 設計師，正在朝產品經理發展。我喜歡從真實問題出發，透過研究梳理需求與產品邏輯，再將想法做成能被實際使用的產品。</p><p>從 B2B 餐飲系統到自己開發排課工具，我關心的不只是介面，而是找到值得解決的問題，並把解決方案實現。</p><a class="intro-link" href="#/about">More about me <span>↗</span></a></div><div class="intro-visual"><img src="./yuan-chi-about-crossleg-slim.svg" alt="Yuan Chi 個人黑白形象照"><div class="orbit-word">DESIGN · RESEARCH · PRODUCT · BUILD ·</div></div></section><section class="section-space wrap" id="work"><div class="section-head selected-head"><div><div class="eyebrow">SELECTED WORK / 2026</div><h2>Works record<span class="orange">.</span></h2></div></div><div class="work-grid identity-works">'+projects.map(card).join('')+'</div></section><section class="dark-band"><div class="wrap"><div class="eyebrow">THE WAY I THINK</div><h2>Fell in love with the problem, not the solution.</h2><p>我喜歡從證據裡找出產品機會、整理使用者與商業需求，並把抽象想法轉化為可以操作、驗證與改進的產品。</p><a href="mailto:chi861008@gmail.com">Let’s connect ↗</a></div></section>';}
function aboutSection(){return '<section class="section-space wrap" id="about"><div class="about-mini"><div><div class="eyebrow">02 / About</div><h2>Curious by nature.<br>Builder by choice.</h2></div><div><p>我的背景跨越工業設計、使用者研究與數位產品設計。現在我正朝產品經理發展，也持續用 AI 輔助開發，把身邊看見的問題轉成真正可以操作的產品。</p><p>我喜歡定義問題、串聯不同線索、提出解法，以及把複雜的邏輯整理得讓人容易理解。</p><div class="skills"><span class="chip">UX Research</span><span class="chip">Product Discovery</span><span class="chip">Product Thinking</span><span class="chip">Prototyping</span><span class="chip">AI-assisted Development</span></div></div></div></section>';}
const sec=(id,kicker,title,inner)=>'<section class="story-section" id="'+id+'"><div class="story-kicker">'+kicker+'</div><h2>'+title+'</h2>'+inner+'</section>';
const paragraph=t=>'<p>'+t+'</p>';
const fact=(n,title,desc)=>'<div class="fact-box"><span class="fact-id">'+n+'</span><h3>'+title+'</h3><p>'+desc+'</p></div>';
function kioskBody(){
return sec('overview','01 / OVERVIEW','從介面優化到完整的自助點餐體驗',
 '<h3>專案起源｜產品版本整併與升級</h3>'+
 paragraph('團隊反映既有 KIOSK 銷售表現未達預期，並懷疑產品功能與使用體驗可能存在競爭差距。公司原有點餐與付款設備分離，因此已規劃推出整合兩者的新一代機台，並把握改版機會檢視既有軟體的操作體驗。')+
 paragraph('這不只是將原本的畫面移到新機台：不同餐飲業態的菜單架構、不同角色的需求，以及畫面與實體付款設備如何配合，都需要重新理解。團隊因此希望從市場競爭差距與真實使用需求出發，為新版 KIOSK 找到有依據的軟體改善方向。')+
 '<figure class="scenario-figure"><img src="./kiosk-scenario.png" alt="顧客在餐廳操作整合螢幕與多種付款設備的自助點餐機之使用情境示意"><figcaption>新版自助點餐機的使用情境示意，用於說明螢幕與實體付款設備的相對位置；非實地觀察照片。</figcaption></figure>')+
sec('research','02 / RESEARCH FRAMEWORK','三個研究問題，對應三條證據來源',
 '<div class="research-question-grid"><div><span>RQ 01 / PRODUCT FIT</span><strong>不同餐飲業態對 KIOSK 的功能與操作流程有什麼需求？</strong><div class="rq-decision"><b>支援決策</b>判斷優先切入的店型與菜單適配方向</div><div class="rq-value"><b>預期商業價值</b>提高目標客群與產品的匹配程度，減少不適合的導入機會</div></div><div><span>RQ 02 / COMPETITIVE GAP</span><strong>我們與市場競品有哪些關鍵功能差距？</strong><div class="rq-decision"><b>支援決策</b>辨識基礎功能差距與值得評估的設計機會</div><div class="rq-value"><b>預期商業價值</b>補足競爭門檻，提升產品在店家選型時的吸引力</div></div><div><span>RQ 03 / USER EXPERIENCE</span><strong>既有店家遇到哪些操作問題與未滿足需求？</strong><div class="rq-decision"><b>支援決策</b>改善顧客操作卡點與門市支援負擔</div><div class="rq-value"><b>預期商業價值</b>降低店員協助成本與交易中斷風險，讓自助結帳更順暢</div></div></div>'+
 '<h3>研究方法｜Research Methods</h3>'+
 '<div class="research-method-grid"><div class="research-method"><span>01 / DESK RESEARCH</span><strong>市場與業態桌面研究</strong><p>整理不同餐飲店型、菜單結構與點餐情境，釐清 KIOSK 的產品適配需求。</p></div><div class="research-method"><span>02 / COMPETITIVE ANALYSIS</span><strong>競品分析</strong><p>比較競品的功能、介面與操作流程，辨識市場常見能力與現有產品的差距。</p></div><div class="research-method"><span>03 / MERCHANT INTERVIEWS</span><strong>合作店家訪談與既有訪談資料</strong><p>訪談 7 位合作店家管理者，理解其轉述的消費者操作問題及門市需求，並納入過往訪談發現的單點／套餐切換問題；本次未直接訪談終端消費者。</p></div><div class="research-method"><span>04 / PROTOTYPE TESTING</span><strong>Prototype 可用性測試</strong><p>邀請 6 位公司同事操作設計原型，蒐集付款流程與套餐選項理解上的早期回饋，作為第二輪設計的依據。</p></div></div>'+
 '')+
sec('opportunity','03 / RESEARCH FINDINGS','市場輪廓與使用情境中的關鍵線索',
 '<div class="research-track research-track--market"><div class="findings-divider"><span>01 / MARKET & COMPETITIVE RESEARCH</span><h3>市場與競品研究</h3><p>從店型盤點、競品觀察與市場適配條件，判斷產品可能切入的業態。</p></div>'+
 '<h4 class="research-question-heading">哪些餐飲業態值得優先切入？</h4>'+
 paragraph('我先從市場可服務範圍出發，再檢視不同業態的自助點餐機採用情況與菜單需求。這次的 40 間店家盤點屬於探索性樣本，目的在收斂產品適配方向，而不是估算全台市場規模。')+
 '<div class="market-evidence-group"><div class="market-evidence-heading"><span>MARKET OBSERVATION / 探索性盤點</span><h5>40 間店家的探索性盤點</h5><p>先整理樣本輪廓，再比較不同業態中 KIOSK 的採用情形。兩者來自同一輪市場探索，但計數單位不同。</p></div>'+
 '<div class="market-compare"><div><span>40</span><strong>間店家</strong><small>探索性市場盤點</small></div><div><span>10</span><strong>種業態</strong><small>依菜單與店型粗分</small></div><div><span>2</span><strong>項優先方向</strong><small>日式專門店・飲料店</small></div></div>'+
 '<div class="market-chart"><div class="market-chart-head"><h6>各業態的 KIOSK 採用觀察</h6><p>樣本中的業態分布｜橘色為圖表中觀察數較高的四個業態，並不代表產品優先順序。</p></div><div class="market-bars">'+
 [['中式小吃店',7],['日式專門店',7],['速食店',6],['飲料店',6],['西式餐館',4],['平價快餐店',3],['麵食店',2],['無人拉麵店',2],['咖啡廳',2],['其他',2]].map(function(d,i){return '<div class="market-bar-row"><span>'+d[0]+'</span><div class="market-bar-track"><div class="market-bar '+(i<4?'market-bar-lead':'')+'" style="width:'+Math.round(d[1]/7*100)+'%"></div></div><strong>'+d[1]+'</strong></div>'}).join('')+
 '</div><p class="market-chart-note">資料來源：本專案前期市場盤點圖表。縱向數值為各業態觀察到採用 KIOSK 的品牌數；與「40 間店家」的計數單位不同，不宜直接加總，也不能推算全台採用率。</p></div></div>'+
 '<div class="market-filter-conclusion"><span>SEGMENT CRITERIA / 分析後的篩選條件</span><h5>初步篩選條件：哪些店家更適合導入？</h5><p>判斷上，中式小吃的菜單特殊需求相對少；大型速食品牌常有自家客製化系統，未必是適合切入的對象。相較之下，我將日式專門店與飲料店列為優先檢視的方向，再依交易頻率、標準化程度與客單價門檻篩選實際店家。這些條件是商業篩選假設，仍需店家數據驗證；並非依柱狀圖排名直接選市場。TAM 與 SAM 目前也尚未建立可信的金額或店數估算。</p><div class="segment-filters"><div><span>01 / TRANSACTION FREQUENCY</span><strong>交易頻率高</strong><p>尖峰訂單集中、需要快速完成點餐；內用店也可觀察翻桌節奏。</p></div><div><span>02 / STANDARDIZATION</span><strong>流程標準化</strong><p>菜單與點餐步驟相對固定，較有機會透過自助操作分擔櫃台工作。</p></div><div><span>03 / AVERAGE ORDER VALUE</span><strong>客單價 NT$300 以下</strong><p>作為這次初步鎖定店型的商業篩選門檻，而非所有目標業態的既定事實。</p></div></div></div>'+
 '<div class="market-conclusion"><span>MARKET FOCUS / 分析後的市場聚焦</span><h4>從可服務市場，收斂到優先評估店型</h4><div class="market-sizing market-sizing--circles"><div class="market-sizing-tam"><span>TAM</span><strong>有自助點餐需求的餐飲市場</strong><div class="market-sizing-sam"><span>SAM</span><strong>現階段產品可服務的店型</strong><div class="market-sizing-focus"><span>初步聚焦</span><strong>日式專門店<br>飲料店</strong></div></div></div></div></div>'+
 '</div><div class="research-track research-track--interviews"><div class="findings-divider findings-divider--interviews"><span>02 / MERCHANT INTERVIEWS</span><h3>店家訪談與需求整理</h3><p>透過 7 位合作店家管理者轉述的消費者行為與門市營運需求，辨識軟硬體互動及不同菜單型態的問題。消費者需求由研究者轉譯，非直接受訪原話；本專案未另做門市現場觀察。</p></div>'+
 '<div class="research-audience"><div class="research-audience-summary"><div class="research-audience-count"><strong>07</strong><span>位合作店家管理者／4 個品牌</span></div><div class="interview-brand-logos" aria-label="部分受訪品牌標誌"><img src="./kiosk-logo-mini-mono.svg" alt="mini STEAK HOUSE"><img src="./kiosk-logo-ippudo-mono.svg" alt="一風堂"><img src="./kiosk-logo-lugu-mono.svg" alt="戰鬥雞"><img src="./kiosk-logo-kokkio-mono.svg" alt="韓春雞 KOKKIO"></div></div><p>涵蓋貴族世家、韓春雞、一風堂拉麵與戰鬥雞。由店家轉述終端消費者的常見操作行為與困難，同時討論門市導入、菜單與營運流程。因此後續「我是消費者……」的 User Story 是研究者依店家轉述整理的需求表述，並非消費者逐字引言。另參考客服掌握的問題與歷史資料；此研究不等同於直接訪談消費者。</p></div>'+
 '<h4 class="research-question-heading">訪談指出哪些操作問題？</h4>'+
 '<article class="insight-feature"><div class="insight-feature-copy"><span class="insight-feature-kicker"><em class="insight-number">01</em><span>PAYMENT FRICTION</span></span><h4>付款阻礙來自螢幕與實體硬體位置脫節</h4><p>餐廳管理者指出，相較於選餐，顧客更常在需要與實體機台互動的付款階段卡住。顧客操作時注意力集中在螢幕，容易忽略位於機台其他位置的現金、信用卡與感應支付模組。</p></div><figure><img src="./kiosk-visibility.png" alt="自助點餐機螢幕與下方付款模組示意，顯示顧客近距離使用螢幕時，實體付款設備可能不在主要視線範圍內"><figcaption>視線範圍示意｜解釋螢幕提示與下方付款模組的位置落差；非眼動量測結果。</figcaption></figure></article>'+
 '<figure class="research-voice research-voice--payment"><blockquote>有些顧客要靠店員說「藍色發光的位置」，才知道該在哪裡付款。</blockquote><figcaption>店家訪談內容的情境化摘要｜非研究者現場觀察，亦非受訪者逐字引言。</figcaption></figure>'+
 '<article class="insight-feature"><div class="insight-feature-copy"><span class="insight-feature-kicker"><em class="insight-number">02</em><span>MENU FLEXIBILITY</span></span><h4>單一菜單架構難以滿足不同業態的點餐習慣</h4><p>不同餐飲業態的菜單組合與顧客熟悉程度並不相同。速食套餐的選項較為熟悉，部分加料或調味項目可考慮預設選取；一般料理則可能需要先清楚呈現內容，再讓顧客決定。若所有店家只能沿用相同的套餐設定順序，便會限制產品對不同店型的適配程度。</p></div><figure><img src="./kiosk-menu-simple.svg" alt="兩台簡筆自助點餐機，牛排店顯示套餐必選項自動勾選，早餐店顯示先選主餐後加購套餐與飲料"><figcaption>不同菜單邏輯示意｜左：先帶入必選項；右：先選主餐，再選套餐。</figcaption></figure></article>'+
 '<div class="insight-qa research-voice-pair"><figure class="research-voice"><span>牛排店 / 需求轉譯</span><blockquote>套餐的必選項，能先幫顧客選好嗎？</blockquote><figcaption>預先帶入必選項，顧客只需調整加點與調味。</figcaption></figure><figure class="research-voice"><span>早餐店 / 需求轉譯</span><blockquote>能先選主餐，再決定是否搭套餐嗎？</blockquote><figcaption>先決定主餐，再選套餐、飲料及糖度溫度。</figcaption></figure></div><p class="research-voice-disclaimer">以上為研究者依店家轉述整理的情境提問，用以呈現不同業態的操作需求；並非消費者或店家的逐字引言。</p>'+
 '<p class="interview-prior-evidence">除了本次店家訪談，也納入先前使用者訪談發現、尚未解決的單點／套餐切換問題。以下為過往訪談資料的延續，並非本次 7 位店家訪談的新發現。</p>'+
 '<article class="insight-feature insight-feature--decision"><div class="insight-feature-copy"><span class="insight-feature-kicker"><em class="insight-number">03</em><span>既有訪談發現</span></span><h4>單點與套餐之間的切換造成重複操作</h4><p>既有系統將單點與套餐視為不同商品，使用者臨時更換選擇時必須先刪除再重新選取。本次改版將過往研究發現轉化為一鍵切換的改善方向。</p></div><figure><img src="./kiosk-decision-revision.png" alt="顧客在自助點餐機上切換單點與套餐選擇的示意圖"><figcaption>過往訪談發現的操作問題示意｜改變單點／套餐選擇需要重複操作。</figcaption></figure></article><figure class="research-voice research-voice--verbatim"><span>受訪者原句</span><blockquote>顧客很常最後才說要升級套餐啊，所以我都要先問</blockquote></figure></div>')+
sec('solutions','04 / PRODUCT RECOMMENDATIONS','以使用者需求為主軸，將研究證據轉為產品建議',
 paragraph('我以合作店家訪談轉述的使用者問題為主要評估依據，再對照競品功能普及程度及實作可行性。當某項功能同時符合已整理的需求、也已被多個競品採用時，它就獲得更強的支持；但競品常見並不代表一定值得照做。開發難度則是實務限制，只要成本與難度沒有高到不合理，我仍傾向讓產品朝使用者需求改善。')+
 paragraph('對於超過半數競品具備的功能，我將其視為市場基準的線索；但也會考量是否影響核心點餐流程。例如熱門選項並非核心流程，會員串接則可能需要較高整合成本，因此在討論報告中建議較後續再考慮。這些是研究與討論時的相對判斷，並非正式分級或已敲定的開發順序。')+
 '<div class="fact-grid">'+fact('01 / USER NEEDS','使用者需求優先','從合作店家轉述與既有研究資料辨識操作問題，作為提出改善建議的主軸。')+fact('02 / MARKET SIGNAL','競品普及程度加強證據','當常見競品功能與使用者需求吻合時，提高該方向的評估權重；不因競品普及就照單全收。')+fact('03 / FEASIBILITY CHECK','可行性作為實務檢核','評估整合成本與開發難度；若難度合理，仍以改善使用者體驗為優先，再交由 PM 決定採納與試作。')+'</div>'+
 '<h3>從研究證據到設計決策｜完整對照表</h3>'+
 '<p>整合本次店家訪談、過往使用者訪談、競品分析與營運機會，呈現設計建議、證據支持程度及採納狀態。只有能從保留的原始建議表確認的四項標為「已採納」；其餘依證據標示為未確認採納、待評估或待研究，不代表已被否決或已開發。</p>'+
 '<div class="decision-comparison" role="region" aria-label="KIOSK 研究證據與設計決策對照表" tabindex="0"><table><thead><tr><th scope="col">研究來源與問題</th><th scope="col">設計建議與預期價值</th><th scope="col">決策狀態</th></tr></thead><tbody>'+
 '<tr><td><strong>競品分析＋店家營運機會</strong><p>研究競品的促購設計，評估額外加點的商業機會；不是直接訪談證實的消費者痛點。</p></td><td><strong>加購功能</strong><p>增加附加商品選擇入口；預期提升客單價，尚無實測數據。</p></td><td><span class="decision-status decision-status--adopted">已採納 01</span></td></tr>'+
 '<tr><td><strong>店家轉述需求＋競品分析</strong><p>餐點分類不易找到，點餐時容易卡在類別切換。</p></td><td><strong>側邊欄類別選項</strong><p>提供更明顯的菜單分類入口；預期減少操作錯誤。</p></td><td><span class="decision-status decision-status--adopted">已採納 02</span></td></tr>'+
 '<tr><td><strong>店家轉述需求＋競品分析</strong><p>顧客難以辨識螢幕外的實體付款設備位置。</p></td><td><strong>付款設備位置引導</strong><p>對照機台顯示付款模組位置；預期提高任務完成率。</p></td><td><span class="decision-status decision-status--adopted">已採納 03</span></td></tr>'+
 '<tr><td><strong>過往使用者訪談</strong><p>從單點改為套餐時，必須刪除商品再重新點餐。</p></td><td><strong>套餐／單點快速切換</strong><p>在同一商品直接切換；預期縮短任務完成時間。</p></td><td><span class="decision-status decision-status--adopted">已採納 04</span></td></tr>'+
 '<tr><td><strong>店家轉述需求＋競品分析</strong><p>使用者找不到統編與載具設定，可能在結帳時錯過。</p></td><td><strong>發票／載具獨立頁面</strong><p>讓發票資訊設定更容易找到。</p></td><td><span class="decision-status">未確認採納</span></td></tr>'+
 '<tr><td><strong>店家轉述需求＋競品分析</strong><p>選擇付款方式後仍想返回修改訂單。</p></td><td><strong>付款前返回點餐</strong><p>保留返回修改餐點的操作路徑。</p></td><td><span class="decision-status">未確認採納</span></td></tr>'+
 '<tr><td><strong>店家轉述需求＋競品分析</strong><p>不熟悉中文介面的顧客希望能理解操作流程。</p></td><td><strong>多國語言切換</strong><p>至少提供英文等語言選項。</p></td><td><span class="decision-status">未確認採納</span></td></tr>'+
  '<tr><td><strong>店家轉述需求＋競品觀察（部分支持）</strong><p>按鈕回饋與初次使用引導涉及不同問題；微動畫只能提示狀態或吸引注意，不能視為完整的新手教學。</p></td><td><strong>主要按鈕微動畫／新手提示</strong><p>先釐清操作卡點與需要的提示，再決定是否採用動畫或教學。</p></td><td><span class="decision-status">待釐清需求</span></td></tr>'+ 
 '<tr><td><strong>競品分析（市場機會）</strong><p>會員、推薦標籤與熱門排名在市場上有案例，但不能據此推定本產品使用者需要。</p></td><td><strong>會員與商品推薦機制</strong><p>先評估店家營運目標、使用情境與整合成本；加購功能已列於上方採納項目，不重複計算。</p></td><td><span class="decision-status">待評估</span></td></tr>'+ 
 '<tr><td><strong>店家轉述需求（競品未直接對應）</strong><p>信用卡付款希望減少一次確認；若只有一種付款方式，希望跳過選擇。</p></td><td><strong>簡化付款流程</strong><p>確認不同付款情境下是否能減少步驟，以及錯誤操作風險。</p></td><td><span class="decision-status">待研究／驗證</span></td></tr>'+ 
 '<tr><td><strong>店家轉述需求（競品未直接對應）</strong><p>載具掃描困難、付款後缺乏領取提醒。</p></td><td><strong>掃描回饋與付款後提示</strong><p>釐清失敗原因及顧客真正需要的完成確認。</p></td><td><span class="decision-status">待研究／驗證</span></td></tr>'+ 
 '<tr><td><strong>店家轉述需求（競品未直接對應）</strong><p>取餐號碼不易找回、店員端需要逾時提醒。</p></td><td><strong>取餐資訊找回與逾時提醒</strong><p>分別驗證顧客與店員的實際使用情境。</p></td><td><span class="decision-status">待研究／驗證</span></td></tr>'+ 
'</tbody></table></div>'+
 '<div class="callout"><strong>決策與權責界線</strong><p>我負責研究、彙整功能差距與使用者問題，並提出改善建議；未獨立決定 Roadmap。目前能依原始建議表逐項確認的是以上 4 個採納方向。原 Product Backlog 清單已無法取得，因此不將先前提及的 11 項視為可核實的逐項成果。是否完成開發、何時上線及實際成效均未經確認。</p></div>')+
sec('validation','05 / DESIGN & VALIDATION','從設計方案到初步使用者驗證',
 '<div class="design-phase design-phase--proposal"><div class="phase-banner"><span>PHASE 01 / DESIGN PROPOSALS</span><strong>研究轉譯為設計方案</strong><p>三個畫面成果，分別回應加購、套餐切換與付款設備定位。</p></div><div class="solution"><span class="solution-num">01 / ADOPTED DIRECTION</span><h3>加點商品畫面</h3>'+paragraph('為了讓店家在既有點餐流程中提供額外加購選項，我們增加獨立的加點畫面，以商品圖片、價格與數量加減控制呈現選擇，並提供「不需要，謝謝」的跳過入口。此畫面對應原始建議表中的「加購功能」，目標是讓有意願的顧客更容易選購附加商品。')+
 '<figure class="design-shot design-shot--upsell"><img src="./kiosk-add-on-screen.png" alt="Kiosk 新增的加點商品介面，顯示商品卡、價格、數量增減與不需要謝謝、加入購物車按鈕"><figcaption>後續新增的加點介面設計｜保留略過加點的操作選擇。畫面是設計成果，未提供轉換率或客單價提升的實測數據。</figcaption></figure></div>'+
 '<div class="solution"><span class="solution-num">02 / HISTORICAL RESEARCH REVIEW</span><h3>套餐一鍵切換</h3>'+paragraph('回顧過往研究時，我重新辨識到既有系統把「單點」與「套餐」設成兩個獨立商品。顧客即使已經選好餐點，只要在結帳前臨時改變主意，就得先刪除原本品項、重新選擇另一個商品。團隊因此將這項尚未解決的歷史問題納入本次改版，提出在同一商品中直接「一鍵升級套餐／切回單點」的設計方向。')+
 '<figure class="design-shot design-shot--single"><img src="./kiosk-combo-upgrade.png" alt="新設計的商品詳情畫面：餐點下方直接提供套餐升級選項，可在同一畫面選擇附餐組合"><figcaption>設計成果｜商品詳情頁直接提供「套餐升級」選項；原有介面沒有此功能，因此不製作虛構的前後對比。</figcaption></figure>'+
 '<div class="state-note">貢獻：團隊共同發想；我參與方案評估與設計。圖示為新設計畫面，非實際上線成效。</div></div>'+
 '<div class="solution"><span class="solution-num">03 / MY PROPOSAL</span><h3>付款設備位置引導</h3>'+paragraph('顧客站在機台前時，注意力集中於螢幕，未必能同時看到機台周遭的付款裝置。單純顯示紙鈔或信用卡圖示，無法充分解釋設備在哪裡。')+
 paragraph('因此，我提出在付款畫面中呈現機台與付款設備的相對位置，讓使用者能直接對照畫面與實際操作環境。')+
 '<div class="payment-comparison"><figure><span>BEFORE / 既有付款提示</span><img src="./kiosk-payment-before.png" alt="舊付款介面以文字和抽象投鈔圖示提示現金支付，缺少與機台位置對應的指引"><figcaption>只提示投鈔動作，較難直接對照實體位置。</figcaption></figure><figure><span>AFTER / 新設計</span><img src="./kiosk-payment-after.png" alt="新付款畫面呈現完整自助點餐機並放大實體投鈔位置，讓顧客直接對照硬體模組"><figcaption>呈現機台全貌並局部放大付款入口，協助定位設備。</figcaption></figure></div>'+
 '<div class="state-note">貢獻：我根據店家訪談轉述的操作問題與機台畫面分析提出方案；因主流程重要性及試作可行性，獲 PM 採納並安排試作。</div></div></div>'+
 '<div class="design-phase design-phase--testing"><div class="phase-banner"><span>PHASE 02 / PROTOTYPE TESTING</span><strong>透過操作回饋找出理解斷點</strong><p>6 位內部同事參與第一輪可用性測試。</p></div><h3>Prototype 驗證：付款流程順暢，套餐選項表意仍不清楚</h3>'+
 paragraph('我以 Prototype 進行 6 人前期可用性測試，受測者皆為公司同事。這一輪主要用來檢查新流程是否容易理解，並蒐集下一輪改善線索。')+
 '<figure class="design-shot test-session-photo"><img src="./kiosk-prototype-test.png" alt="六位公司同事分別在實體自助點餐機上操作 Prototype 的測試過程照片拼貼"><figcaption>Prototype 測試紀錄｜6 位公司同事在機台上操作設計原型。</figcaption></figure>'+
 '<div class="test-finding-grid"><div><span>01 / POSITIVE SIGNAL</span><h4>付款流程是相對順暢的環節</h4><p>受測者普遍回饋，付款是整體任務中最順暢的一段。這初步支持付款引導及流程安排的可行性。</p></div><div><span>02 / USABILITY ISSUE</span><h4>統一方形按鈕難以傳達調整目的</h4><p>第一版 Prototype 的套餐選項採用方形按鈕，部分受測者不清楚進入選項後究竟要調整什麼，因此需要重新設計選項資訊的呈現方式。</p></div></div></div>'+
 '<div class="design-phase design-phase--iteration"><div class="phase-banner"><span>PHASE 03 / SECOND ITERATION</span><strong>測試結果推動第二輪版型</strong><p>從單一方形按鈕，延伸出四種資訊呈現方式。</p></div><div class="solution"><span class="solution-num">04 / SECOND DESIGN ITERATION</span><h3>由單一方形按鈕延伸四種選項版型</h3>'+paragraph('根據第一次 Prototype 測試的理解障礙，我們不再讓所有選項沿用相同的方形按鈕，而是依資訊量與操作目的延伸出文字、橫向、精簡橫列與圖像大卡等四種形式，讓不同類型的選項有更適合的資訊呈現。這是測試後的第二輪設計成果，並非前期訪談直接產生的方案。')+
 '<div class="layout-variants"><figure><img src="./kiosk-layout-compact.png" alt="純文字三欄式的飯量選項，正常、多、少"><figcaption>文字選項｜飯量、甜度等不需圖片的設定</figcaption></figure><figure><img src="./kiosk-layout-wide.png" alt="橫向商品卡片含商品圖片、價格與品項說明"><figcaption>橫向版型｜需展示說明的商品</figcaption></figure><figure><img src="./kiosk-layout-row.png" alt="精簡橫向商品列，包括圖片、名稱、價格及加減按鈕"><figcaption>精簡橫列｜快速調整加購數量</figcaption></figure><figure><img src="./kiosk-layout-tile.png" alt="大型方形套餐組合選項卡，含圖片、名稱及加價金額"><figcaption>圖像大卡｜需要辨識附餐內容的套餐</figcaption></figure></div>'+
 '<div class="state-note">迭代狀態：完成第二輪設計，但專案在此階段結束，未再次進行可用性測試；因此不能宣稱新版按鈕已經改善理解率或操作效率。</div></div>'+
 '</div>')+
sec('reflection','06 / OUTCOME & REFLECTION','好的自助體驗，必須同時理解決策、資訊與環境',
  paragraph('這次專案讓我從研究執行延伸到設計機會的辨識，進一步參與改善方向的評估與設計。加點商品、套餐切換與付款位置引導分別回應營運促購、重複操作與軟硬體理解的問題；而 Prototype 之後的四種按鈕版型，則呈現從測試回饋走向第二輪設計的迭代過程。')+
 '<ul><li><strong>從畫面走向情境：</strong>理解使用者當下看見什麼、能接觸到什麼。</li><li><strong>從研究走向決策：</strong>讓洞察連接實際可行的設計方案。</li><li><strong>從方案走向驗證：</strong>區分已採納的建議、易用性表現與真正的營運成效。</li></ul>'+
 '<div class="callout"><strong>如果後續導入門店，我會追蹤什麼？</strong><p>付款求助頻率、操作時間、完成率，以及套餐切換是否降低重複點選。這些是後續評估方向，並非目前已有的成效數據。</p></div>');
}
function schedulingBody(){return sec('overview','01 / OVERVIEW','從皮拉提斯老師的排課困境，開始建立一個真正能運作的產品',
 paragraph('一位皮拉提斯老師在安排學生課程時遇到繁瑣的協調問題。我從這個真實情境出發，自己整理需求、規劃規則、設計流程，再透過 AI 輔助開發完成可操作的排課系統。')+
 '<div class="evidence-card"><span class="overline">ROLE</span><p>獨立 Product Builder — 需求釐清、流程設計、規則決策、原型與開發整合。</p></div>')+
sec('research','02 / PROBLEM','排課不只是選日期，而是不同角色與規則的協調',
 paragraph('排課過程涉及老師可授課時間、學生的選擇、課程異動，以及「誰可以在什麼時間修改哪些資料」等產品規則。這些情境讓我需要同時從老師端、學生端以及系統狀態思考。'))+
sec('opportunity','03 / PRODUCT SCOPE','把模糊需求拆解為 MVP 規則',
 '<div class="fact-grid">'+fact('01','排課權限','釐清學生取消、老師修改與排課完成後的權限界線。')+fact('02','狀態與重排','區分測試環境清除功能與正式系統行為。')+fact('03','人員管理','明確定義老師、學生與工作室的關聯方式。')+'</div>')+
sec('solutions','04 / BUILDING','透過設計與 AI 輔助開發，把產品從零做出來',
 paragraph('我不只製作設計稿，也直接參與功能實作與反覆測試。開發過程中持續釐清邊界條件，例如重新排課的時機、教師調整權限，以及管理者邀請老師的流程。')+
 '<div class="callout"><strong>Explore the working project</strong><p>此專案持續開發與驗證中。可以從 GitHub 了解目前的實作內容與更新。<br><a href="'+repoURL+'" target="_blank" rel="noopener">View source on GitHub ↗</a></p></div>')+
sec('validation','05 / VALIDATION','從可操作原型走向真實使用驗證',
 '<div class="pending"><span class="pending-label">Evidence to verify</span><h3>正式使用數據與老師回饋待補</h3><p>目前先不宣稱已提高排課效率或取得付費用戶。後續會補入真實使用測試、排課所需時間及使用者回饋。</p></div>')+
sec('reflection','06 / NEXT STEPS','讓產品從可以運作，走向值得持續使用',
 paragraph('下一步聚焦於實際老師的持續使用、排課成功率與例外情境，並確認產品對老師是否產生足夠價值，再判斷商業化的方向。'));}
function kdsBody(){
 return sec("overview","01 / CONTEXT","第一代 KDS 已經能接單，卻不一定能支援廚房工作","\n<p>公司已有第一代 KDS，但既有使用者反映<strong>餐點名稱被截斷、跑馬燈造成閱讀不適、誤銷後找不回訂單、油污環境觸控不易</strong>。團隊因此啟動下一版規劃，優先補齊市場基本功能、改善現場操作體驗。</p>\n<figure class=\"scenario-figure kds-case-scenario\"><img loading=\"lazy\" src=\"./kds-case-hero.png\" alt=\"KDS 廚房作業情境示意\"><figcaption>廚房使用情境示意，非本次現場研究照片。</figcaption></figure>\n<p class=\"kds-lead-question\">挑戰：在有限的研究樣本下，如何結合既有反饋、競品與現場脈絡，做出有依據的下一版功能與資訊設計判斷？</p>\n<div class=\"kds-contribution\"><div><span>FORMAL PROJECT / MY ROLE</span><h3>UX 研究與視覺成果對齊</h3><p>整理歷史訪談與客戶反饋、參與競品功能比較、訪談與觀察 LA PASTA，並與 UI 設計師討論新版畫面和研究發現的落差。</p></div><div><span>INDEPENDENT EXPLORATION</span><h3>我延伸的商品批次概念</h3><p>在專案之外，獨立設計跨訂單商品聚合、10 分鐘區間、單批產能與批次完成操作。此概念尚未測試或上線。</p></div></div>\n")+
sec("research","02 / DISCOVERY","從市場功能缺口，追問現場為什麼需要這些功能","\n<p>這次研究主要依靠<strong>第一代回饋、歷史研究資料與競品分析</strong>。由於只有 LA PASTA 一家店願意接受現場觀察與訪談，該場域用來補充工作脈絡，而非代表全部餐飲業態。</p>\n<h3>研究方法｜Research Methods</h3>\n<div class=\"research-method-grid\">\n<div class=\"research-method\"><span>01 / USER FEEDBACK & UX AUDIT</span><strong>既有客戶回饋與認知走查</strong><p>整理第一代 KDS 的誤銷找回、長品名截斷、跑馬燈、油污觸控及通知問題，並走查現有操作與資訊密度。</p></div>\n<div class=\"research-method\"><span>02 / HISTORICAL RESEARCH</span><strong>歷史訪談與廚房單分析</strong><p>整合過往跨店家的訪談、廚房單與製餐行為，理解同製程批次製作、出餐排序及不同角色的資訊需求。</p></div>\n<div class=\"research-method\"><span>03 / COMPETITIVE ANALYSIS</span><strong>競品功能與操作比較</strong><p>比較專加、Eats365、微碧的視角切換、分組排序、時間管理、異動通知與找回功能，支援下一版功能取捨。</p></div>\n<div class=\"research-method\"><span>04 / CONTEXTUAL OBSERVATION</span><strong>LA PASTA 現場觀察與訪談</strong><p>在唯一能實地研究的餐廳觀察內外場如何透過多台 KDS 控制製餐節奏；此場域不代表全部餐飲業態。</p></div>\n</div>\n<figure class=\"kds-shot kds-feature-matrix\"><a href=\"./kds-function-comparison.svg\" target=\"_blank\" rel=\"noopener noreferrer\"><img loading=\"lazy\" src=\"./kds-function-comparison.svg\" alt=\"專加、Eats365、微碧 KDS 競品功能比較表\"></a><figcaption>本次實際製作的競品功能比較｜點擊圖片可開啟完整內容。</figcaption></figure>\n<div class=\"kds-research-turn\"><strong>競品分析如何影響決策？</strong>它同時協助團隊辨識專加尚缺少的市場功能、比較可行的互動方式，並討論哪些應先納入下一版。但「競品有功能」不等同於「使用者必須需要」；還要回到既有反饋與製餐任務。</div>\n<div class=\"kds-evidence-columns\"><div><h3>競品顯示的功能差異</h3><ul><li>Eats365 有商品彙整及多種分組／排序切換方式。</li><li>專加當時總單／菜單切換不同步，僅能擇一收單。</li><li>Eats365 可找回商品與整筆訂單；專加當時無此能力。</li><li>各產品在時間提示、待出餐視角及銷單方式上採不同解法。</li></ul></div><div><h3>研究補上的作業邏輯</h3><ul><li>內場偏好以同製程商品批次備料、烹煮。</li><li>實際出餐順序受等待時間、烹調時間與預約時機影響。</li><li>內場間歇掃視螢幕，需要可讀資訊與主動提示。</li><li>LA PASTA 外場用「催餐」讓內場 KDS 變色再製作，避免桌面一次上太多餐。</li></ul></div></div>\n<p class=\"kds-section-note\"><strong>研究範圍註記：</strong>上述批次、排序等行為包含過去其他店家的訪談資料；外場「催餐」是 LA PASTA 的場域觀察。兩者不應混為同一組樣本，也不能直接外推至所有餐廳。</p>\n")+
sec("opportunity","03 / PRODUCT DECISIONS","正式產品改版：把研究轉成可執行的設計方向","\n<p>在市場基本功能與既有痛點的基礎上，團隊將多項改善方向納入下一版 KDS 規劃，包括：資訊可讀性、異動提醒、歷史訂單找回、視角與收單同步，以及減少不必要的觸控操作。<strong>正式功能改善建議主要由另一位 UX 設計師提出；我的貢獻是提供研究依據並參與 UI 檢視。</strong></p>\n<div class=\"kds-research-stages\"><div><span>01 / PRIMARY CONTENT</span><h3>優先讓商品與數量被看見</h3><p>降低不必要資訊的干擾，讓廚師以快速掃視取得製餐關鍵內容。</p></div><div><span>02 / STATUS HIERARCHY</span><h3>區分等待與異動狀態</h3><p>追加、取消、等待時間等狀態要容易被注意，而不是被其他欄位淹沒。</p></div><div><span>03 / READING DENSITY</span><h3>平衡欄數、字級與完整餐名</h3><p>避免一次呈現太多訂單而犧牲文字完整性，或用跑馬燈補救閱讀問題。</p></div></div>\n<p>在比較舊版與新版 UI 時，我提出上述資訊層級的落差並參與討論；設計師隨後調整新版畫面。以下呈現的是<strong>設計修改，不是已經驗證的績效提升</strong>。</p>\n<figure class=\"kds-shot kds-ui-compare\"><a href=\"./kds-before-after.svg\" target=\"_blank\" rel=\"noopener noreferrer\"><img loading=\"lazy\" src=\"./kds-before-after.svg\" alt=\"KDS 舊版與新版 UI 畫面比較，左舊右新\"></a><figcaption>舊版在左、新版在右｜討論後調整商品資訊、狀態與畫面密度。點擊可放大檢視。</figcaption></figure>\n<div class=\"kds-product-evolution\"><div><span>RESEARCH INPUT</span><strong>反饋＋歷史資料＋競品</strong><small>產品基本面與關鍵資訊</small></div><div><span>TEAM DECISION</span><strong>下一版改善規劃</strong><small>由團隊與 UX 夥伴共同討論</small></div><div><span>MY PARTICIPATION</span><strong>研究結果 × UI 檢視</strong><small>指出資訊層級落差，協作調整</small></div></div>\n")+
sec("solutions","04 / INDEPENDENT EXPLORATION","個人延伸：讓商品視角符合真正的批次製餐節奏","\n<p>在正式專案之外，我進一步思考：<strong>外場以訂單追蹤出餐，內場卻可能以商品與製作流程安排工作。</strong>如果只是將所有相同商品無限聚合，反而會忽略不同顧客的下單時間，以及廚房一次能做的數量。</p>\n<div class=\"kds-research-stages\"><div><span>VIEW SWITCH</span><h3>同畫面切換兩種工作單位</h3><p>以訂單視角確認每桌／每單狀態；以商品視角集中可共同製作的品項，保留來源訂單資訊。</p></div><div><span>PRODUCT GROUPING</span><h3>聚合符合相同製程的商品</h3><p>跨訂單彙整相同商品與數量；若細項或口味影響烹調流程，則需分開顯示，不直接合併。</p></div><div><span>TIME & CAPACITY</span><h3>依進單間隔與產能拆批</h3><p>從最早進單時間建立 10 分鐘區間；受訪餐廳每次最多能做 3 份，因此 8 份需拆為 3＋3＋2。</p></div></div>\n<div class=\"kds-dual-shots\"><figure class=\"kds-shot\"><img loading=\"lazy\" src=\"./kds-order.png\" alt=\"KDS 訂單視角示意\"><figcaption>訂單視角：掌握顧客／單據狀態。</figcaption></figure><figure class=\"kds-shot\"><img loading=\"lazy\" src=\"./kds-category.png\" alt=\"KDS 商品彙整視角示意\"><figcaption>商品視角：彙整可共同製作的商品。</figcaption></figure></div>\n<figure class=\"kds-shot kds-independent-screen\"><a href=\"./kds-independent-pause.svg\" target=\"_blank\" rel=\"noopener noreferrer\"><img loading=\"lazy\" src=\"./kds-independent-pause.svg\" alt=\"個人獨立設計的 KDS 商品分批操作畫面\"></a><figcaption>獨立 UI 設計：商品分組、來源訂單與批次完成操作｜點擊放大。</figcaption></figure>\n<div class=\"kds-batch-example\"><strong>批次規則示例（未驗證概念）</strong><div class=\"kds-batch-line\"><span>時間</span><b>以第一筆進單起算，10 分鐘內的同製程商品可形成一組</b></div><div class=\"kds-batch-line\"><span>產能</span><b>單次最多 3 份，8 份分成 3＋3＋2</b></div><div class=\"kds-batch-line\"><span>操作</span><b>按「批次完成」而非必須逐一完成每份商品</b></div></div>\n<p class=\"kds-schematic-note\">10 分鐘與 3 份是根據此次情境發展的<strong>設計假設</strong>，並非通用設定。不同設備／商品的產能上限未來可能需分別設定；此方案尚未進入正式產品或使用者測試。</p>\n")+
sec("reflection","05 / OUTCOME & REFLECTION","從市場基本功能，到理解製餐現場的限制","\n<div class=\"kds-evidence-columns\"><div><h3>正式專案目前能說的成果</h3><ul><li>競品、歷史研究與既有反饋共同支援下一版功能取捨。</li><li>研究發現與 UI 的落差經討論後，設計師調整了資訊呈現。</li><li>辨識 LA PASTA 內外場協作與產能／時機限制，作為後續設計參考。</li></ul></div><div><h3>仍需驗證的部分</h3><ul><li>下一版功能是否真能降低誤銷或加速辨識。</li><li>不同店態是否需要相同的視角切換與控菜機制。</li><li>個人提出的 10 分鐘分批、單商品產能與批次完成是否適用。</li></ul></div></div>\n<p>這次讓我理解，競品分析能幫團隊建立市場基本面，但無法單獨解釋使用者為什麼需要某個功能。只有將它與歷史反饋及現場工作邏輯結合，設計才不會停留在功能清單。</p>\n<p>我在正式專案裡學會透過研究與設計師討論資訊層級；在個人延伸中，練習將<strong>訂單與商品視角、製餐產能、時間公平性</strong>整合成可操作的介面概念。未來若有更多店態與驗證機會，才能再確認哪些規則值得產品化。</p>\n<div class=\"kds-reflection-bottom\"><strong>NEXT QUESTION ↗</strong><p>當廚房和外場的工作節奏不同時，哪些步驟適合自動化，哪些決策仍應保留給現場人員？</p></div>\n");
}
const bodyMap={kiosk:kioskBody,scheduling:schedulingBody,kds:kdsBody};
const toc={kiosk:['Overview','Research Framework','Research Findings','Recommendations','Design & Validation','Outcome'],scheduling:['Overview','Problem','MVP Scope','Building','Validation','Next Steps'],kds:['Context','Discovery','Product Decisions','Independent Design','Reflection']};
function caseSnapshot(p){if(p.id==='kds')return '<div class="case-overview-intro case-project-meta"><span>廚房顯示系統</span></div><div class="case-snapshot"><div><span>TEAM GOAL / 專案背景與目標</span><p>針對既有第一代 KDS 的使用問題，補齊下一版市場基本功能並改善製餐操作體驗。</p></div><div><span>CHALLENGE / 關鍵研究問題</span><p>廚房不是單純依進單順序製作；不同製程、時間、設備容量及內外場協作都會改變資訊需求。</p></div><div><span>MY ROLE / 我的貢獻</span><p>整理歷史研究與既有客戶反饋、參與競品及 LA PASTA 現場研究，並協助對齊 UI 與研究結果；正式改善建議由另一位 UX 夥伴主提。</p></div><div><span>RESULT / 階段成果</span><p>研究與競品比較支持下一版功能取捨；UI 討論後調整資訊層級。跨訂單聚合、時間與產能分批為個人獨立概念，尚未驗證。</p></div></div>';if(p.id!=='kiosk')return '<div class="case-overview-intro case-project-meta"><span>'+p.zh+'</span></div><div class="meta-row case-role-summary"><div class="meta-item"><span>我的角色</span><strong>'+p.role+'</strong></div><div class="meta-item"><span>專案範圍</span><strong>'+p.type+'</strong></div></div>';return '<div class="case-overview-intro case-project-meta"><span>次世代自助點餐機</span></div><div class="case-snapshot"><div><span>TEAM GOAL / 專案背景與目標</span><p>整合原本分離的點餐與付款設備，並重新檢視完整的自助點餐與付款體驗。</p></div><div><span>CHALLENGE / 關鍵設計挑戰</span><p>軟硬體互動複雜；不同餐飲業態與菜單結構的需求差異大，且終端消費者招募受限。</p></div><div><span>MY ROLE / 我的貢獻</span><p>參與前期研究與問題定義，主要負責消費者端 KIOSK 操作流程與介面設計；另一位 UX 負責店家後端。付款設備位置引導由我獨立提出與設計，經 PM 評估後採納試作。</p></div><div><span>RESULT / 階段成果</span><p>完成 4 個品牌、7 位餐廳管理者訪談、競品分析與 6 人 Prototype 測試；目前可由原始建議表確認 4 個設計方向獲採納，實際上線成效尚未確認。</p></div></div>';}
function casePage(p){const next=projects[(projects.indexOf(p)+1)%projects.length];const anchors=p.id==='kds'?['overview','research','opportunity','solutions','reflection']:['overview','research','opportunity','solutions','validation','reflection'];const banner=p.id==='kiosk'||p.id==='kds'?'':'<div class="case-banner">'+visual(p.visual)+'</div>';return '<div class="wrap"><section class="case-top'+(p.id==='kiosk'?' kiosk-cover':p.id==='kds'?' kds-cover':'')+'"><a href="#/work" class="back-link">← BACK TO SELECTED WORK</a><div class="case-title-row"><h1>'+p.title+'<span class="orange">.</span></h1><time class="case-cover-date" datetime="'+(p.id==='kiosk'?'2025-11':p.id==='kds'?'2026-06':'2026')+'">'+(p.id==='kiosk'?'2025.11 — 2026.04':p.id==='kds'?'2026.06 — 2026.07':p.year)+'</time></div><p class="case-deck">'+(p.id==='kiosk'?'整合軟硬體付款引導，重新檢視無人自助點餐的完整流程。':p.summary)+'</p>'+caseSnapshot(p)+'</section>'+banner+'<div class="case-layout"><aside class="side-index">'+toc[p.id].map((t,i)=>'<a href="#'+anchors[i]+'"><b>0'+(i+1)+'</b>'+t+'</a>').join('')+'</aside><article class="case-article">'+bodyMap[p.id]()+'</article></div><a class="next-case" href="#/case/'+next.id+'"><div><small>NEXT CASE STUDY →</small><h2>'+next.title+'</h2></div><span>↗</span></a></div>';}
function aboutPage(){return '<div class="wrap"><section class="case-top"><a class="back-link" href="#/">← HOME</a><div class="eyebrow" style="margin-top:75px">THE PERSON BEHIND THE WORK</div><h1>Curious.<br>Thoughtful.<br><span class="orange">Hands-on.</span></h1><p class="case-deck">工業設計背景，現職 UX 設計師，正朝產品經理方向發展。我喜歡把研究中看見的需求變成有邏輯、可操作、可以反覆驗證的產品。</p></section></div>'+aboutSection()+'<section class="dark-band"><div class="wrap"><div class="eyebrow">LET’S CONNECT</div><h2>Have a product problem worth solving?</h2><p>歡迎交流產品研究、產品設計及 0→1 的實作機會。</p><a href="mailto:chi861008@gmail.com">Say hello ↗</a></div></section>';}
function render(){let route=decodeURI(location.hash.replace(/^#\/?/,'')).split('/').filter(Boolean);let view=route[0]||'';document.body.classList.toggle('home-mode',!(view==='case'||view==='about'));document.body.classList.toggle('kiosk-case',view==='case'&&route[1]==='kiosk');document.body.classList.toggle('kds-case',view==='case'&&route[1]==='kds');document.querySelectorAll('[data-nav]').forEach(a=>a.removeAttribute('aria-current'));if(view==='case'){const p=projects.find(p=>p.id===route[1]);app.innerHTML=p?casePage(p):home();document.title=(p?p.title:'Work')+' — Yuan Chi';}else if(view==='about'){app.innerHTML=aboutPage();document.title='About — Yuan Chi';}else{app.innerHTML=home();document.title='Yuan Chi — Product Portfolio';if(view==='work'){requestAnimationFrame(()=>document.querySelector('#work')?.scrollIntoView({behavior:'smooth'}));}}if(view==='case'||view==='about')window.scrollTo(0,0);if(view==='case')requestAnimationFrame(updateCaseToc);}
app.addEventListener('click',event=>{const link=event.target.closest('a[href^="#"]');if(!link)return;const href=link.getAttribute('href');if(['#overview','#research','#opportunity','#solutions','#validation','#reflection'].includes(href)){event.preventDefault();document.querySelectorAll('.side-index a').forEach(item=>{const active=item.getAttribute('href')===href;item.classList.toggle('is-active',active);if(active)item.setAttribute('aria-current','location');else item.removeAttribute('aria-current');});document.querySelector(href)?.scrollIntoView({behavior:'smooth',block:'start'});}});
function applyOrbitLettering(){
  const ring=document.querySelector('.orbit-word');
  if(!ring)return;
  ring.innerHTML='<svg viewBox="0 0 280 280" role="img" aria-label="Product · Design · YuanChi"><defs><path id="orbit-type-path" d="M 140,140 m -113,0 a 113,113 0 1,1 226,0 a 113,113 0 1,1 -226,0"/></defs><text textLength="695" lengthAdjust="spacing"><textPath href="#orbit-type-path" startOffset="1%">Product · Design · YuanChi ·</textPath></text></svg>';
}
function addScrollSignature(){
  const link=document.querySelector('.intro-copy .intro-link');
  if(!link)return;
  const signature=document.createElement('div');
  signature.className='scroll-signature';
  signature.setAttribute('role','img');
  signature.setAttribute('aria-label','Yuan Chi 手寫英文簽名');
  signature.innerHTML='<svg viewBox="0 0 390 132" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">'+
    '<path d="M72 18 C61 5 45 15 49 31 C55 51 75 50 82 29 C88 8 75 15 63 42 C52 69 41 106 26 118 C15 126 10 119 17 109 C27 96 48 96 65 98"/>'+
    '<path d="M72 66 C66 83 65 94 76 92 C87 89 92 75 101 66 C97 79 92 95 109 90"/>'+
    '<path d="M141 75 C132 62 119 69 116 82 C113 96 131 99 147 72 C142 88 142 95 157 91"/>'+
    '<path d="M164 91 C169 76 181 62 186 71 C191 80 177 94 184 94 C193 93 201 72 211 72 C222 72 210 91 223 94"/>'+
    '<path d="M294 24 C284 9 261 20 247 46 C231 75 227 102 250 101 C266 101 279 87 285 76"/>'+
    '<path d="M306 14 C304 36 287 78 281 96 C293 70 305 65 312 70 C321 78 309 95 326 92"/>'+
    '<path d="M345 70 C337 82 332 96 350 92"/>'+
    '<path d="M351 52 L352 50"/>'+
    '<path d="M66 99 C124 111 213 112 288 110 C327 108 353 107 378 108"/>'+
    '</svg>';
  const actionRow=document.createElement('div');
  actionRow.className='signature-action-row';
  link.before(actionRow);
  actionRow.append(signature,link);
  const paths=[...signature.querySelectorAll('path')];
  let total=0;
  for(const path of paths){const length=path.getTotalLength();path.dataset.length=length;path.dataset.start=total;total+=length;path.style.strokeDasharray=length;path.style.strokeDashoffset=length;}
  signature.dataset.totalLength=total;
}
function frameIntroPhoto(){
  const photo=document.querySelector('.intro-visual > img');
  if(!photo)return;
  const frame=document.createElement('div');
  frame.className='intro-photo-frame';
  photo.before(frame);
  frame.append(photo);
}
function setupIntroHold(){
  const section=document.querySelector('.home-mode .intro-portrait');
  if(!section)return;
  const hold=document.createElement('div');hold.className='intro-hold';
  section.before(hold);hold.append(section);
}
function setupSceneHolds(){
  const hero=document.querySelector('.home-mode .identity-hero');
  const work=document.querySelector('.home-mode #work');
  for(const [section,name] of [[hero,'hero'],[work,'work']]){
    if(!section)return;
    const hold=document.createElement('div');hold.className=name+'-hold';
    section.before(hold);hold.append(section);
  }
}
function updateScrollSignature(){
  const signature=document.querySelector('.scroll-signature');
  if(!signature)return;
  const paths=signature.querySelectorAll('path');
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hold=document.querySelector('.home-mode .intro-hold');
  const stage=hold?.querySelector('.intro-portrait');
  const start=hold?hold.getBoundingClientRect().top+window.scrollY:0;
  const travel=hold&&stage?Math.max(1,hold.offsetHeight-stage.offsetHeight):1;
  const progress=reduced?1:Math.min(1,Math.max(0,(window.scrollY-start)/travel));
  if(stage)stage.style.setProperty('--about-drift',`${(-progress*12).toFixed(1)}px`);
  const portraitFrame=stage?.querySelector('.intro-photo-frame');
  const eased=progress*progress*(3-2*progress);
  // The orange lettering stays anchored. Desktop image begins lower and
  // settles slightly above center; mobile image remains stationary.
  if(portraitFrame){
    portraitFrame.style.setProperty('--portrait-rise',`${(82-eased*107).toFixed(1)}px`);
  }
  const drawn=progress*Number(signature.dataset.totalLength||0);
  for(const path of paths){const length=Number(path.dataset.length);const start=Number(path.dataset.start);path.style.strokeDashoffset=Math.max(0,Math.min(length,length-(drawn-start)));}
}
function updateHomeMotion(){
  const hold=document.querySelector('.home-mode .hero-hold');
  const stage=hold?.querySelector('.identity-hero');
  const card=stage?.querySelector('.hero-flip-inner');
  if(!hold||!stage||!card)return;
  const start=hold.getBoundingClientRect().top+window.scrollY;
  const travel=Math.max(1,hold.offsetHeight-stage.offsetHeight);
  const progress=Math.max(0,Math.min(1,(window.scrollY-start)/travel));
  // First 60% of the pinned scroll flips; the remaining 40% holds the
  // completed artwork on screen before the hero is released.
  const flipProgress=Math.max(0,Math.min(1,progress/.60));
  const eased=flipProgress*flipProgress*(3-2*flipProgress);
  card.style.setProperty('--hero-flip',`${eased*180}deg`);
  card.style.setProperty('--hero-tilt','8deg');
}
function updateWorkHold(){
  const work=document.querySelector('.home-mode #work');
  if(!work)return;
  const cards=work.querySelectorAll('.identity-works .work-card');
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const viewport=window.innerHeight;
  const mobile=window.matchMedia('(max-width:650px)').matches;
  const pinnedLayout=window.matchMedia('(min-width:901px)').matches;
  // Finish every staggered entrance exactly when the Works scene reaches its
  // sticky position. Otherwise cards can remain at different Y offsets while
  // the page is pinned, leaving their image edges and captions misaligned.
  const workTop=work.getBoundingClientRect().top;
  const stickyTop=82;
  const entranceStart=viewport*.72;
  // Align all three cards *before* the scene pins, leaving a clean and
  // complete composition during the brief sticky hold.
  const entranceEnd=Math.max(stickyTop+36,viewport*.42);
  const sharedProgress=Math.min(1,Math.max(0,(entranceStart-workTop)/Math.max(1,entranceStart-entranceEnd)));
  cards.forEach((card,i)=>{
    // Track each actual card rather than the earlier-arriving section heading.
    // The stagger remains visible while the image is on screen and rewinds on scroll-up.
    const priorShift=parseFloat(card.style.getPropertyValue('--work-enter-y'))||0;
    const top=card.getBoundingClientRect().top-priorShift;
    const progress=reduced?1:pinnedLayout?sharedProgress:Math.min(1,Math.max(0,(viewport*.94-top)/(viewport*(mobile?.72:.62))));
    const eased=progress*progress*(3-2*progress);
    const distance=(mobile?[80,110,140]:[65,135,205])[i];
    card.style.setProperty('--work-enter-y',`${((1-eased)*distance).toFixed(1)}px`);
    card.style.setProperty('--work-enter-opacity',(0.75+eased*.25).toFixed(3));
  });
}
function updateCaseToc(){
 const sections=[...document.querySelectorAll('.case-article .story-section[id]')];
 if(!sections.length)return;
 const threshold=Math.min(window.innerHeight*.38,300);
 let active=sections[0].id;
 for(const section of sections){if(section.getBoundingClientRect().top<=threshold)active=section.id;else break;}
 document.querySelectorAll('.side-index a').forEach(link=>{
   const selected=link.getAttribute('href')==='#'+active;
   link.classList.toggle('is-active',selected);
   if(selected)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');
 });
}
let tocFrame=0;
function scheduleTocUpdate(){if(tocFrame)return;tocFrame=requestAnimationFrame(()=>{tocFrame=0;updateCaseToc();updateHomeMotion();updateWorkHold();updateThinkingParallax();updateScrollSignature();});}
window.addEventListener('scroll',scheduleTocUpdate,{passive:true});
window.addEventListener('resize',scheduleTocUpdate,{passive:true});
function playHomeOpening(){
  const target=document.querySelector('.home-mode .identity-photo .flip-face--front');
  if(!target||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const destination=target.getBoundingClientRect();
  if(!destination.width||!destination.height)return;
  const opening=document.createElement('div');opening.className='home-opening';opening.setAttribute('aria-hidden','true');
  const backdrop=document.createElement('div');backdrop.className='home-opening-backdrop';
  const image=document.createElement('img');image.className='home-opening-photo';image.src=target.currentSrc||target.src;image.alt='';
  const caption=document.createElement('span');caption.className='home-opening-caption';caption.textContent='YUAN CHI  /  PORTFOLIO';
  opening.append(backdrop,caption,image);document.body.appendChild(opening);
  target.style.visibility='hidden';
  const portrait=document.querySelector('.identity-photo');if(portrait)portrait.classList.add('opening-in-progress');
  const startWidth=Math.min(window.innerWidth*(window.innerWidth<650?.56:.43),480);
  const startHeight=Math.min(window.innerHeight*.68,startWidth*1.13);
  const startLeft=(window.innerWidth-startWidth)/2,startTop=(window.innerHeight-startHeight)/2;
  const endWidth=target.offsetWidth,endHeight=target.offsetHeight;
  const endLeft=destination.left+(destination.width-endWidth)/2;
  const endTop=destination.top+(destination.height-endHeight)/2;
  image.animate([
    {left:startLeft+'px',top:startTop+'px',width:startWidth+'px',height:startHeight+'px',transform:'rotate(-5deg)',offset:0},
    {left:startLeft+'px',top:startTop+'px',width:startWidth+'px',height:startHeight+'px',transform:'rotate(-5deg)',offset:.13},
    {left:endLeft+'px',top:endTop+'px',width:endWidth+'px',height:endHeight+'px',transform:'rotate(8deg)',offset:1}
  ],{duration:1450,easing:'cubic-bezier(.22,.78,.15,1)',fill:'forwards'});
  backdrop.animate([{opacity:1,offset:0},{opacity:1,offset:.36},{opacity:0,offset:1}],{duration:1080,easing:'ease-out',fill:'forwards'});
  caption.animate([{opacity:1,offset:0},{opacity:1,offset:.32},{opacity:0,offset:1}],{duration:850,fill:'forwards'});
  const finish=()=>{target.style.visibility='';if(portrait)portrait.classList.remove('opening-in-progress');opening.remove();};
  window.setTimeout(finish,1500);
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&opening.isConnected)finish();},{once:true});
}
function setupThinkingBand(){
  const band=document.querySelector('.home-mode .dark-band');
  if(!band)return;
  const heading=band.querySelector('h2');
  if(heading){heading.innerHTML='<span class="thinking-line">Not the solution</span><span class="thinking-line">Fall in love with PROBLEM</span>';}
}
function setupHeroFlip(){
  const frame=document.querySelector('.home-mode .identity-photo');
  const back=frame?.querySelector('img');
  if(!frame||!back)return;
  back.classList.add('flip-face','flip-face--back');
  back.src='./yuan-chi-hero-flip-back.png';
  back.alt='Yuan Chi 俏皮黑白肖像與橘色塗鴉';
  const spinner=document.createElement('div');spinner.className='hero-flip-inner';
  const front=document.createElement('img');
  front.className='flip-face flip-face--front';
  front.src='./yuan-chi-expressive-hero.png';
  front.alt='Yuan Chi 俏皮的黑白個人照片';
  spinner.append(front,back);frame.prepend(spinner);
}
function setupPhotoJourney(){
  document.querySelector('.photo-journey')?.remove();
  const hero=document.querySelector('.home-mode .identity-photo');
  const destination=document.querySelector('.home-mode .intro-photo-frame');
  if(!hero||!destination)return;
  const overlay=document.createElement('div');overlay.className='photo-journey';overlay.setAttribute('aria-hidden','true');
  overlay.dataset.endScroll=Math.max(1,destination.getBoundingClientRect().top+window.scrollY-window.innerHeight*.42);
  const card=document.createElement('div');card.className='photo-journey-card';
  const front=document.createElement('img');front.src='./yuan-chi-expressive-hero.png';front.className='photo-journey-face photo-journey-front';front.alt='';
  const back=document.createElement('img');back.src='./yuan-chi-about-crossleg-slim.svg';back.className='photo-journey-face photo-journey-back';back.alt='';
  card.append(front,back);overlay.append(card);document.body.append(overlay);
}
function updatePhotoJourney(){
  const overlay=document.querySelector('.photo-journey');
  const hero=document.querySelector('.home-mode .identity-photo');
  const target=document.querySelector('.home-mode .intro-photo-frame');
  if(!overlay||!hero||!target)return;
  const heroCard=hero.querySelector('.hero-flip-inner');
  // On narrow screens the About portrait follows several paragraphs of copy.
  // Flying a card across them feels jumpy and obscures the content.
  if(window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 900px)').matches){overlay.style.display='none';heroCard.style.visibility='';target.style.visibility='';return;}
  const scroll=window.scrollY;
  const source=hero.getBoundingClientRect(),dest=target.getBoundingClientRect();
  const sourceTop=source.top+scroll,destTop=dest.top+scroll;
  const end=Number(overlay.dataset.endScroll)||1;
  const progress=Math.max(0,Math.min(1,scroll/end));
  if(progress<=0){overlay.style.display='none';heroCard.style.visibility='';target.style.visibility='';return;}
  if(progress>=1){overlay.style.display='none';heroCard.style.visibility='hidden';target.style.visibility='';return;}
  // Finish the flip at the original hero size before the photograph travels.
  // Separating rotation from resizing prevents the rubbery 3D distortion.
  const flipProgress=Math.max(0,Math.min(1,progress/.23));
  const flipEase=flipProgress*flipProgress*(3-2*flipProgress);
  const travelProgress=Math.max(0,Math.min(1,(progress-.23)/.77));
  const ease=travelProgress*travelProgress*(3-2*travelProgress);
  const lerp=(a,b)=>a+(b-a)*ease;
  overlay.style.display='block';heroCard.style.visibility='hidden';target.style.visibility='hidden';
  overlay.style.left=lerp(source.left,dest.left)+'px';
  overlay.style.top=(lerp(sourceTop,destTop)-scroll)+'px';
  overlay.style.width=lerp(source.width,dest.width)+'px';
  overlay.style.height=lerp(source.height,dest.height)+'px';
  const card=overlay.firstElementChild;
  card.style.transform=`rotateZ(${(1-ease)*4}deg) rotateY(${flipEase*180}deg)`;
}
function updateThinkingParallax(){
  const band=document.querySelector('.home-mode .dark-band');
  if(!band)return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){band.style.setProperty('--thinking-horizontal','0px');band.style.setProperty('--thinking-horizontal-reverse','0px');return;}
  const bounds=band.getBoundingClientRect();
  const viewHeight=window.innerHeight;
  if(bounds.bottom<0||bounds.top>viewHeight)return;
  const progress=(viewHeight-bounds.top)/(viewHeight+bounds.height);
  const maxShift=window.matchMedia('(max-width:760px)').matches?18:34;
  const shift=Math.max(-maxShift,Math.min(maxShift,(progress-.5)*maxShift*2));
  band.style.setProperty('--thinking-horizontal',shift.toFixed(1)+'px');
  band.style.setProperty('--thinking-horizontal-reverse',(-shift).toFixed(1)+'px');
}
function renderPage(){document.querySelector('.photo-journey')?.remove();render();setupHeroFlip();setupThinkingBand();applyOrbitLettering();addScrollSignature();frameIntroPhoto();setupIntroHold();setupSceneHolds();document.querySelectorAll('.identity-works .work-visual').forEach((visual,index)=>{const frame=document.createElement('span');frame.className='work-hover-frame';frame.setAttribute('aria-hidden','true');visual.appendChild(frame);const name=document.createElement('span');name.className='work-hover-name';name.setAttribute('aria-hidden','true');const label=document.createElement('span');label.textContent=projects[index]?.title||'';const arrow=document.createElement('span');arrow.className='work-hover-arrow';arrow.textContent='↗';name.append(label,arrow);visual.appendChild(name);});scheduleTocUpdate();}
window.addEventListener('hashchange',renderPage);renderPage();
requestAnimationFrame(()=>requestAnimationFrame(playHomeOpening));

// Keep a short visible press response after touch release (especially on phones).
(function setupTapFeedback(){
  const selector='a[href],button,[role="button"]';
  const timers=new WeakMap();
  const scheduleRelease=(element,delay=190)=>{
    if(!element)return;
    clearTimeout(timers.get(element));
    timers.set(element,setTimeout(()=>element.classList.remove('tap-feedback'),delay));
  };
  document.addEventListener('pointerdown',event=>{
    if(event.button!==0)return;
    const element=event.target.closest?.(selector);
    if(!element)return;
    clearTimeout(timers.get(element));
    element.classList.add('tap-feedback');
  },{passive:true});
  document.addEventListener('pointerup',event=>scheduleRelease(event.target.closest?.(selector)),{passive:true});
  document.addEventListener('pointercancel',event=>scheduleRelease(event.target.closest?.(selector),0),{passive:true});
  document.addEventListener('click',event=>{
    if(event.detail===0){const element=event.target.closest?.(selector);if(element){element.classList.add('tap-feedback');scheduleRelease(element);}}
  });
})();
