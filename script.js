const projects = [
  {id:'scheduling',number:'01',title:'Pilates Scheduling',zh:'皮拉提斯排課系統',type:'0→1 PRODUCT BUILDING',summary:'從老師真實的排課困境出發，獨立定義產品規則、設計流程並開發可操作的系統。',role:'Independent Product Builder',year:'2026',visual:'schedule'},
  {id:'kiosk',number:'02',title:'KIOSK Redesign',zh:'次世代自助點餐機',type:'RESEARCH-DRIVEN DESIGN',summary:'從研究發現到產品改善：整合軟硬體付款引導，重新檢視完整點餐體驗。',role:'UX Research & Product Design',year:'2025–2026',visual:'kiosk'},
  {id:'kds',number:'03',title:'Kitchen Display System',zh:'廚房顯示系統研究與概念設計',type:'RESEARCH → INDEPENDENT UI',summary:'深入廚房現場，從批次製作與出餐協作的研究洞察，延伸出一套獨立設計的 KDS 介面。',role:'UX Research & Independent UI Concept',year:'2026',visual:'kds'}
];
const app = document.querySelector('#app');
let portfolioLanguage = (()=>{try{return localStorage.getItem('yc-portfolio-language')==='en'?'en':'zh';}catch{return 'zh';}})();
const isEnglish=()=>portfolioLanguage==='en';
function setPortfolioLanguage(next){portfolioLanguage=next==='en'?'en':'zh';try{localStorage.setItem('yc-portfolio-language',portfolioLanguage);}catch{}renderPage();}
function updateLanguageControls(){const toggle=document.querySelector('#language-toggle');if(toggle){const label=isEnglish()?'切換為繁體中文':'Switch to English';toggle.setAttribute('aria-label',label);toggle.setAttribute('title',label);const destination=toggle.querySelector('.language-destination');if(destination)destination.textContent=isEnglish()?'中':'EN';}document.documentElement.lang=isEnglish()?'en':'zh-Hant';const nav=document.querySelector('.nav-links');if(nav)nav.setAttribute('aria-label',isEnglish()?'Main navigation':'主選單');const node=document.querySelector('.footer-right a');if(node)node.textContent=isEnglish()?'Back to top ↑':'回到頂端 ↑';}
document.querySelector('#language-toggle')?.addEventListener('click',()=>setPortfolioLanguage(isEnglish()?'zh':'en'));
const figmaURL='https://www.figma.com/design/S2sh6gtlIJ3JtDM7i3MEiN/portfolio?node-id=1654-18351';
const repoURL='https://github.com/chi861008/researved-system';
const visual=(name)=>name==='schedule'?'<div class="work-visual visual-schedule"><div class="arrow-circle" aria-hidden="true">↗</div><div class="schedule-mock"><div class="schedule-top"><strong>Weekly schedule</strong><span>October / 2026　↗</span></div><div class="calendar-week">'+['MON','TUE','WED','THU','FRI','SAT','SUN'].map((d,i)=>'<div class="calendar-day"><b>'+d+'</b>'+(i===0||i===2||i===4?'<span class="calendar-pill">Pilates 10:00</span>':'')+(i===1||i===3?'<span class="calendar-pill orange-pill">Private 14:00</span>':'')+'</div>').join('')+'</div></div></div>':name==='kiosk'?'<div class="work-visual visual-kiosk kiosk-image-cover"><img src="./kiosk-cover.png" alt="KIOSK 自助點餐介面與付款引導的設計畫面拼貼"><div class="arrow-circle" aria-hidden="true">↗</div></div>':'<div class="work-visual visual-kds kds-image-cover"><img src="./kds-cover.png" alt="KDS 個人概念設計封面：深色廚房訂單與分類畫面的介面拼貼"><div class="arrow-circle" aria-hidden="true">↗</div></div>';
const card=p=>'<a class="work-card" href="#/case/'+p.id+'">'+visual(p.visual)+'<div class="work-info"><div><h3>'+p.title+'</h3><p>'+p.zh+'<br>'+p.type+'</p></div><div class="project-number">'+p.number+' / 03</div></div></a>';
function home(){return '<section class="identity-hero"><div class="identity-wrap"><h1 class="visually-hidden">Yuan Chi — UX Designer &amp; Product Builder</h1><div class="identity-caption">PORTFOLIO / 2026</div><div class="identity-title"><span>Yuan</span><figure class="identity-photo"><img src="./yuan-chi-portrait.png" alt="Yuan Chi 的黑白人像"><i class="corner c1"></i><i class="corner c2"></i><i class="corner c3"></i><i class="corner c4"></i></figure><span>Chi</span></div><div class="identity-details"><p>UX Designer ×<br>Product Builder</p><p>Research / Strategy / Design<br>From insight to working product</p><p>Based in Taiwan<br><a href="mailto:chi861008@gmail.com">chi861008@gmail.com ↗</a></p></div></div></section><section class="intro-portrait wrap" id="about"><div class="intro-copy"><div class="eyebrow">ABOUT ME</div><h2>Hi<span class="orange">.</span></h2><p>我是一名專注於 B2B SaaS 的 UX Researcher / Product Designer，正朝兼具設計與開發能力的 Product Builder、Product Manager 發展。</p><p>過去曾參與餐飲 POS、自助點餐機、雲端報表及廚房顯示系統等產品。工作之外，我也喜歡從生活中的真實問題發起 Side Project，讓研究、設計與開發不只停留在工作中，也能實際應用於日常生活。</p><a class="intro-link" href="#/about">More about me <span>↗</span></a></div><div class="intro-visual"><img src="./yuan-chi-about-crossleg-slim.svg" alt="Yuan Chi 個人黑白形象照"><div class="orbit-word">DESIGN · RESEARCH · PRODUCT · BUILD ·</div></div></section><section class="section-space wrap" id="work"><div class="section-head selected-head"><div><div class="eyebrow">SELECTED WORK / 2026</div><h2>Works record<span class="orange">.</span></h2></div></div><div class="work-grid identity-works">'+projects.map(card).join('')+'</div></section><section class="dark-band"><div class="wrap"><div class="eyebrow">THE WAY I THINK</div><h2>Fell in love with the problem, not the solution.</h2><a href="mailto:chi861008@gmail.com">Let’s connect ↗</a></div></section>';}
function aboutSection(){return '<section class="section-space wrap" id="about"><div class="about-mini"><div><div class="eyebrow">02 / About</div><h2>Curious by nature.<br>Builder by choice.</h2></div><div><p>我的背景跨越工業設計、使用者研究與數位產品設計。現在我正朝產品經理發展，也持續用 AI 輔助開發，把身邊看見的問題轉成真正可以操作的產品。</p><p>我喜歡定義問題、串聯不同線索、提出解法，以及把複雜的邏輯整理得讓人容易理解。</p><div class="skills"><span class="chip">UX Research</span><span class="chip">Product Discovery</span><span class="chip">Product Thinking</span><span class="chip">Prototyping</span><span class="chip">AI-assisted Development</span></div></div></div></section>';}
const sec=(id,kicker,title,inner)=>'<section class="story-section" id="'+id+'"><div class="story-kicker">'+kicker+'</div><h2>'+title+'</h2>'+inner+'</section>';
const paragraph=t=>'<p>'+t+'</p>';
const fact=(n,title,desc)=>'<div class="fact-box"><span class="fact-id">'+n+'</span><h3>'+title+'</h3><p>'+desc+'</p></div>';
function kioskBody(){
return sec('overview','01 / OVERVIEW','當 KIOSK 銷售未達預期，我如何用研究協助新版產品做出設計取捨',
 '<div class="contribution-summary"><span class="overline">DECISION STORY / 這篇案例的核心</span><p><strong>商業問題：</strong>既有 KIOSK 銷售未達預期，新一代機台改版需要釐清市場適配與使用阻礙。</p><p><strong>研究如何影響決策：</strong>我透過探索性市場盤點、競品研究、7 位店家管理者訪談及 6 人內部原型測試，整理出可被評估的產品改善方向；其中 4 項可由原始建議表核實已採納，後續也依測試回饋提出第二輪介面設計。</p></div><h3>專案起源｜產品版本整併與升級</h3>'+
 paragraph('團隊反映既有 KIOSK 銷售表現未達預期，並懷疑產品功能與使用體驗可能存在競爭差距。公司原有點餐與付款設備分離，因此已規劃推出整合兩者的新一代機台，並把握改版機會檢視既有軟體的操作體驗。')+
 paragraph('這不只是將原本的畫面移到新機台：不同餐飲業態的菜單架構、不同角色的需求，以及畫面與實體付款設備如何配合，都需要重新理解。團隊因此希望從市場競爭差距與真實使用需求出發，為新版 KIOSK 找到有依據的軟體改善方向。')+
 ''+
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
 '')+
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
 '<div class="test-finding-grid"><div class="test-finding-positive"><div class="test-finding-label"><b class="test-finding-mark" aria-hidden="true">✓</b><span>優勢 / POSITIVE SIGNAL</span></div><h4>付款流程是相對順暢的環節</h4><p>受測者普遍回饋，付款是整體任務中最順暢的一段。這初步支持付款引導及流程安排的可行性。</p></div><div class="test-finding-negative"><div class="test-finding-label"><b class="test-finding-mark" aria-hidden="true">✕</b><span>待改善 / USABILITY ISSUE</span></div><h4>統一方形按鈕難以傳達調整目的</h4><p>第一版 Prototype 的套餐選項採用方形按鈕，部分受測者不清楚進入選項後究竟要調整什麼，因此需要重新設計選項資訊的呈現方式。</p></div></div></div>'+
 '<div class="design-phase design-phase--iteration"><div class="phase-banner"><span>PHASE 03 / SECOND ITERATION</span><strong>測試結果推動第二輪版型</strong><p>從單一方形按鈕，延伸出四種資訊呈現方式。</p></div><div class="solution"><span class="solution-num">04 / SECOND DESIGN ITERATION</span><h3>由單一方形按鈕延伸四種選項版型</h3>'+paragraph('根據第一次 Prototype 測試的理解障礙，我們不再讓所有選項沿用相同的方形按鈕，而是依資訊量與操作目的延伸出文字、橫向、精簡橫列與圖像大卡等四種形式，讓不同類型的選項有更適合的資訊呈現。這是測試後的第二輪設計成果，並非前期訪談直接產生的方案。')+
 '<div class="layout-variants"><figure><figcaption>文字選項｜飯量、甜度等不需圖片的設定</figcaption><img src="./kiosk-layout-compact.png" alt="純文字三欄式的飯量選項，正常、多、少"></figure><figure><figcaption>橫向版型｜需展示說明的商品</figcaption><img src="./kiosk-layout-wide.png" alt="橫向商品卡片含商品圖片、價格與品項說明"></figure><figure><figcaption>精簡橫列｜快速調整加購數量</figcaption><img src="./kiosk-layout-row.png" alt="精簡橫向商品列，包括圖片、名稱、價格及加減按鈕"></figure><figure><figcaption>圖像大卡｜需要辨識附餐內容的套餐</figcaption><img src="./kiosk-layout-tile.png" alt="大型方形套餐組合選項卡，含圖片、名稱及加價金額"></figure></div>'+
 '<div class="state-note">迭代狀態：完成第二輪設計，但專案在此階段結束，未再次進行可用性測試；因此不能宣稱新版按鈕已經改善理解率或操作效率。</div></div>'+
 '</div>')+
sec('reflection','06 / OUTCOME & REFLECTION','好的自助體驗，必須同時理解決策、資訊與環境',
  paragraph('這次專案讓我從研究執行延伸到設計機會的辨識，進一步參與改善方向的評估與設計。加點商品、套餐切換與付款位置引導分別回應營運促購、重複操作與軟硬體理解的問題；而 Prototype 之後的四種按鈕版型，則呈現從測試回饋走向第二輪設計的迭代過程。')+
 '<div class="state-note"><strong>成果與證據限制：</strong>原始建議表可核對 4 個獲採納的設計方向；原 Product Backlog 已無法取得，因此不將先前提到的 11 項視為已核實成果。Roadmap 由團隊決定，採納不等於完成開發或上線，銷售與營運影響也尚未驗證。</div><ul><li><strong>從畫面走向情境：</strong>理解使用者當下看見什麼、能接觸到什麼。</li><li><strong>從研究走向決策：</strong>讓洞察連接實際可行的設計方案。</li><li><strong>從方案走向驗證：</strong>區分已採納的建議、易用性表現與真正的營運成效。</li></ul>'+
 '<div class="callout"><strong>如果後續導入門店，我會追蹤什麼？</strong><p>付款求助頻率、操作時間、完成率，以及套餐切換是否降低重複點選。這些是後續評估方向，並非目前已有的成效數據。</p></div>');
}

const schedulingIllustration=(kind,en=false)=>{
 const zh={
  continuity:['學生課程','主要老師','代課老師','主要老師','主要老師'],
  authority:['學生時段','課程間隔','老師分配','排課草案','老師檢查與調整'],
  changing:['初次排課','臨時請假','尋找代課／補課','更新課表'],
  adoption:['自動產生課表','新工具學習','異動維護','整體負擔待驗證'],
  collaboration:['學生','主要老師','代課老師','LINE 協作與通知']
 };
 const english={
  continuity:['Student lessons','Main teacher','Substitute','Main teacher','Main teacher'],
  authority:['Availability','Lesson spacing','Teacher assignment','Draft timetable','Instructor reviews and adjusts'],
  changing:['Initial plan','Absence','Find cover / make-up','Update schedule'],
  adoption:['Auto-generated plan','Tool onboarding','Change upkeep','Total effort unverified'],
  collaboration:['Student','Main instructor','Substitute','LINE communication']
 };
 const v=(en?english:zh)[kind];
 let inside='';
 if(kind==='continuity')inside='<div class="schedule-scene-label">'+v[0]+'</div><div class="schedule-scene-lessons">'+v.slice(1).map((t,i)=>'<div class="'+(i===1?'substitute':'')+'"><span>'+(i+1).toString().padStart(2,'0')+'</span><strong>'+t+'</strong></div>').join('')+'</div>';
 if(kind==='authority')inside='<div class="schedule-scene-constraints">'+v.slice(0,3).map(t=>'<span>'+t+'</span>').join('')+'</div><div class="schedule-scene-arrow">↓</div><div class="schedule-scene-draft">'+v[3]+'</div><div class="schedule-scene-arrow">↓</div><div class="schedule-scene-decision">'+v[4]+' ✓</div>';
 if(kind==='changing')inside='<div class="schedule-scene-stages">'+v.map((t,i)=>'<div class="'+(i===1?'changed':'')+'"><span>'+String(i+1).padStart(2,'0')+'</span><strong>'+t+'</strong></div>').join('')+'</div>';
 if(kind==='adoption')inside='<div class="schedule-scene-work"><div><span>−</span><strong>'+v[0]+'</strong></div><div><span>+</span><strong>'+v[1]+'</strong></div><div><span>+</span><strong>'+v[2]+'</strong></div></div><div class="schedule-scene-decision">'+v[3]+'</div>';
 if(kind==='collaboration')inside='<div class="schedule-scene-people">'+v.slice(0,3).map((t,i)=>'<div><span class="person-avatar">'+['●','◆','●'][i]+'</span><strong>'+t+'</strong></div>').join('')+'</div><div class="schedule-scene-links">↕　↕　↕</div><div class="schedule-scene-decision">'+v[3]+'</div>';
 return '<div class="schedule-scene schedule-scene--'+kind+'" aria-hidden="true">'+inside+'</div>';
};
const schedulingInsight=(num,label,title,copy,kind,caption,en=false)=>'<article class="schedule-insight-card"><div class="schedule-insight-copy"><div class="schedule-insight-heading"><em>'+num+'</em><span>'+label+'</span></div><h4>'+title+'</h4><p>'+copy+'</p></div><figure class="schedule-insight-figure">'+schedulingIllustration(kind,en)+'<figcaption>'+caption+'</figcaption></figure></article>';

function schedulingBody(){
 const point=(label,title,body)=>'<div class="schedule-point"><span>'+label+'</span><h3>'+title+'</h3><p>'+body+'</p></div>';
 return sec('overview','01 / PROJECT OVERVIEW','從老師每月的排課困境，打造一套可操作的產品',
  '<p class="schedule-lead">這套排課系統希望讓學生在自己的時間限制內客製化可接受的上課時段，並透過集中分配取得更公平、雙方可接受的排課結果；同時協助老師用自動排課與靈活調整減少協調工作，朝每月 120 堂課的業績目標安排課程。</p>'+
  paragraph('這個個人專案源自一位皮拉提斯老師的真實困擾：每月約花 2–3 小時安排課表，學生再因臨時取消或改期而讓老師持續調整。她以 LINE 蒐集時間、用紙本安排課程，也需要在老師群組協調代課。目前已完成第一版可操作 MVP，後續仍需確認它是否適合老師既有的協作流程。')+
  '<div class="schedule-feature-quote"><span>DESIGN QUESTION</span><strong>如何尊重每位學生的時間偏好，兼顧分配公平與教學連續性，並讓老師高效率地完成每月排課？</strong></div>'+
  '<div class="schedule-small-label">PROJECT STATUS / 2026</div><p class="schedule-status-copy">已完成可操作 MVP，以模擬資料測試排課規則與例外情境，並向老師展示收集回饋；尚未由老師在日常工作中正式操作，也沒有可確認的時間節省或留存數據。</p>')+
 sec('research','02 / PROBLEM DISCOVERY','問題不只是排課耗時，而是如何兼顧不同人的限制',
  '<div class="schedule-problem-grid">'+point('TEACHER / 已知回饋','逐一協調，工作高度集中在老師身上','老師需要彙整不同學生的可上課時段，還要考慮原老師授課比例、課程間隔與代課協作；每月初排課約 2–3 小時，後續仍常有取消和異動。')+point('STUDENT / 老師轉述','先搶先得，不是受歡迎的解法','老師曾嘗試讓學生自行搶課，但她觀察到取消情況反而增加，因而回到由老師主導安排。這是老師提供的經驗，尚無前後取消率的量化比較。')+'</div>'+
  '<h3>訪談前｜初步關鍵洞察</h3>'+
  schedulingInsight('01','TEACHING CONTINUITY / 教學連續性','排課品質不只取決於完成堂數，更在於維持學生與主要老師的教學連續性。','老師重視學生持續由主要老師授課，因此排課規則需要兼顧授課連續性，而不只是盡可能排入最多堂數。','continuity','教學安排示意｜主要老師與代課老師交錯授課；非真實課程資料。')+
  schedulingInsight('02','DECISION AUTHORITY / 排課決策','排課涉及多重條件與例外取捨，無法完全自動化，仍需保留老師的最終決策權。','學生時段、課程間隔與授課老師可能互相衝突。系統提供草案及衝突資訊，再由老師完成取捨與調整。','authority','多條件排課示意｜說明草案仍需人工審核；非演算法效能測試。')+
  schedulingInsight('03','CONTINUOUS COORDINATION / 持續協調','排課不是一次性的時間分配，而是伴隨請假、補課與代課需求持續變動的協調過程。','初次排出課表只是起點；後續異動需要重新安排老師與學生時間，並同步最新課程資訊。','changing','課表異動流程示意｜請假與補課會形成後續協調。')+
  '<p class="schedule-insight-disclaimer">以上為正式深入訪談前，根據既有溝通與需求整理形成的初步洞察；尚待真實使用驗證。</p>'+'<div class="schedule-turn"><span>PRODUCT FRAMING / 問題重新定義</span><p>核心問題不是「如何讓學生更快搶到課」，而是<strong>「如何在有限時段內，公平地安排學生可接受的課程，同時讓老師能彈性調整整月課表」。</strong></p></div>')+
 sec('opportunity','03 / PRODUCT STRATEGY','產品策略：先蒐集可接受時段，再由老師統一安排',
  paragraph('我沒有直接採用學生自行搶課的常見模式：老師先前曾嘗試，卻觀察到取消變多，也難以兼顧每位學生的需求。第一版因此選擇集中分配：學生先提交可接受時段，系統產出整月草案，再由老師調整與確認。規則考量原老師授課目標、學生可用時段與整體排入堂數；每月 120 堂是老師希望達到的業績目標，不是已由系統驗證的排課成果；目前亦尚未驗證實際省時或留存效益。')+
  '<div class="schedule-comparison"><div class="schedule-compare-old"><span>BEFORE / FIRST COME, FIRST SERVED</span><h3>誰先按，誰先有</h3><p>學生競爭熱門時間；老師較容易完成單筆預約，但可能無法兼顧整體需求。</p></div><div class="schedule-compare-new"><span>AFTER / PREFERENCE-BASED ALLOCATION</span><h3>先看所有人能接受什麼</h3><p>學生提供可接受時段，系統建立排課草案，再由老師調整與確認。</p></div></div>'+
  '<div class="schedule-preference"><div class="schedule-preference-title"><span>DESIGN PRINCIPLE 01</span><h3>「可接受」不等於「一定要開放很多選項」</h3><p>學生可以只選星期二，系統就把星期二當作限制；也可以選多天，增加安排的彈性。設計尊重個人邊界，不強迫學生為了演算法放寬需求。</p></div><div class="schedule-choice-demo" aria-label="學生選擇可接受上課日的概念示意"><span>STUDENT A / AVAILABLE DAY</span><div class="schedule-days"><i>一</i><i class="picked">二 ✓</i><i>三</i><i>四</i><i>五</i><i>六</i><i>日</i></div><small>概念示意：此學生只接受星期二；不是產品實際畫面。</small></div></div>')+
 sec('solutions','04 / EXPERIENCE & RULES','方案設計：將排課規則轉成可調整的工作流程',
  '<div class="schedule-flow"><div><span>01 / INPUT</span><h3>學生提交可接受時段</h3><p>由學生先提供時間限制，免去老師逐一收集與整理。</p></div><div><span>02 / DRAFT</span><h3>系統產生排課草案</h3><p>依學生條件與可用時段進行配置，讓老師一次檢視整體結果。</p></div><div><span>03 / REVIEW</span><h3>老師介入例外與調整</h3><p>自動安排後仍可人工修改；未排入的學生也保留在待處理清單，顯示無法安排的原因。</p></div><div><span>04 / CONFIRM</span><h3>完成確認後，穩定課表</h3><p>排課進入正式階段後，學生不能自行取消既有課程；需要調整則由老師協助。</p></div></div>'+
  '<div class="schedule-decision-grid">'+point('DESIGN PRINCIPLE 02','以學生為中心的課表審核','同一份課表提供整月老師視角與個別學生視角；老師能查看學生已排課程與可用時段，直接調整課程、安排未排入堂數或代課。')+point('DESIGN PRINCIPLE 03','保留老師的最終決定權','演算法先兼顧原老師授課目標、學生覆蓋率、可選時段較少者與三天間隔；無法排入的課程與原因保留供老師處理。')+'</div>')+
 sec('highlights','05 / DESIGN HIGHLIGHTS','三個設計亮點：從排課規則到跨角色協調','<p class="schedule-highlight-intro">這三項設計把老師仰賴經驗的排課判斷、不同角色的資訊需求，以及請假代課造成的後續協調，轉成可操作的介面。以下為第一版產品以展示資料呈現的畫面，尚未代表正式導入成果。</p>'+'<article class="schedule-highlight"><div class="schedule-highlight-copy"><span class="schedule-highlight-num">01</span><span class="schedule-highlight-kicker">FROM MENTAL MODEL TO SCHEDULING RULES</span><h3>把老師的排課判斷，變成看得懂的規則</h3><dl><div><dt>問題</dt><dd>除了學生可上課時段，還要兼顧剩餘堂數、課程間隔、授課比例與時段衝突；原先的取捨藏在老師經驗裡。</dd></div><div><dt>設計</dt><dd>把判斷拆成可調整的條件與優先順序，例如先涵蓋每位學生基本堂數，再分配剩餘課程；這是設計的公平分配策略，非已驗證的公平性成效。</dd></div><div><dt>互動</dt><dd>老師在設定頁檢視排課邏輯，系統產生草案後，透過「未填寫 → 已填 → 已分享」等狀態檢查與完成確認。</dd></div></dl><p class="schedule-highlight-skills">UX Research × Domain Modeling × Rule-based Product Design</p></div><div class="schedule-highlight-gallery"><figure class="schedule-highlight-shot"><div class="schedule-highlight-phone"><img loading="lazy" src="./assets/pilates-design-01a.webp" alt="排課邏輯設定，展開時段不足的優先順序"></div><figcaption>排課邏輯｜將隱性判斷具體化</figcaption></figure><figure class="schedule-highlight-shot"><div class="schedule-highlight-phone"><img loading="lazy" src="./assets/pilates-design-01b.webp" alt="自動排課結果與學生待安排月曆"></div><figcaption>排課結果｜查看進度與個別學生安排</figcaption></figure></div></article>'+'<article class="schedule-highlight"><div class="schedule-highlight-copy"><span class="schedule-highlight-num">02</span><span class="schedule-highlight-kicker">SWITCHING BETWEEN STUDENT AND TEACHER VIEWS</span><h3>從個別學生切回老師整週課表</h3><dl><div><dt>問題</dt><dd>單看某位學生的可上課日期，難以判斷老師整週是否已排滿；只看老師週曆，又不易發現特定學生的限制。</dd></div><div><dt>設計</dt><dd>同一份排課資料提供個別學生月曆與老師整週課表兩種檢視層級，幫助老師在微觀與整體配置間切換。</dd></div><div><dt>互動</dt><dd>先搜尋學生、確認已排堂數與可上課時段；再開啟整週老師課表，檢查其他學生與時段占用。</dd></div></dl><p class="schedule-highlight-skills">Information Architecture × Interaction Design</p></div><div class="schedule-highlight-gallery"><figure class="schedule-highlight-shot"><div class="schedule-highlight-phone"><img loading="lazy" src="./assets/pilates-design-02a.webp" alt="特定學生的月曆、已排堂數與可上課時段"></div><figcaption>學生視角｜個別課程與可用時段</figcaption></figure><figure class="schedule-highlight-shot"><div class="schedule-highlight-phone"><img loading="lazy" src="./assets/pilates-design-02b.webp" alt="老師整週課表，展示多位學生於不同時段的分布"></div><figcaption>老師視角｜整週時間分布</figcaption></figure></div></article>'+'<article class="schedule-highlight"><div class="schedule-highlight-copy"><span class="schedule-highlight-num">03</span><span class="schedule-highlight-kicker">SUBSTITUTE & FREED-SLOT COORDINATION</span><h3>從被動找人，到整理能補位的學生</h3><dl><div><dt>問題</dt><dd>請假或代課發生時，老師需要再次核對哪些人有空、哪些課尚未安排，並在不同老師之間協調。</dd></div><div><dt>設計</dt><dd>將待代課安排整理為可搜尋、可分享的清單；時段釋出時，列出曾選擇該時段的學生供老師判斷。</dd></div><div><dt>互動</dt><dd>透過「代課總表」整理待協調課程並用 LINE 分享；空出時段後，老師可選擇學生執行補位，並非全自動通知。</dd></div></dl><p class="schedule-highlight-skills">Workflow Design × Service Coordination</p></div><div class="schedule-highlight-gallery"><figure class="schedule-highlight-shot"><div class="schedule-highlight-phone"><img loading="lazy" src="./assets/pilates-design-03a.webp" alt="代課總表與 LINE 分享功能"></div><figcaption>代課總表｜集中整理跨老師協調</figcaption></figure><figure class="schedule-highlight-shot"><div class="schedule-highlight-phone"><img loading="lazy" src="./assets/pilates-design-03b.webp" alt="空出時段後顯示曾選擇該時間的學生清單"></div><figcaption>請假補位｜由老師確認誰能排進來</figcaption></figure></div></article>'+'<p class="schedule-highlight-note">畫面來源：個人作品第一版展示資料與操作截圖；學生名稱為測試資料。排課公平性、月排 120 堂目標與協調時間節省仍待真實使用驗證。</p>')+
 sec('validation','06 / FROM IDEA TO PRODUCT','打造 MVP：從產品規則到功能驗證與老師回饋',
  paragraph('我以獨立 Product Builder 的角色負責需求、UI／UX、產品流程、AI 輔助程式開發、GitHub／Vercel 部署和測試驗收。第一版使用模擬資料，設計時段衝突、間隔不足、無法排入等情境，透過程式化測試及人工檢查確認主要規則；這是功能驗證，尚非老師實際操作的易用性或效率驗證。')+
  '<div class="schedule-build-grid">'+point('RULES TO PRODUCT','將人工經驗轉換成規則','以學生時段、原老師授課目標、可排入堂數與課程間隔建立排課邏輯；無法完成的安排保留人工處理。')+point('TWO REVIEW PERSPECTIVES','整月與個別學生雙視角','老師可從整體時間分布切換到特定學生，確認課程安排並直接調整、補課或指定代課。')+point('TEST & DELIVERY','AI 輔助開發與驗收','自行設計介面、測試案例，利用 AI Coding 迭代程式，管理 GitHub、Vercel 部署；以模擬資料檢查例外狀態。')+'</div>'+
  '<div class="schedule-learning"><span>INITIAL DEMO FEEDBACK</span><strong>能排出課表，不代表老師願意改變既有工作方式。</strong><p>第一次向老師展示 MVP 時，她擔心需要教每個學生操作新軟體，以及臨時取消、重新安排的持續管理負擔。這是 Demo 回饋，並非正式使用後的測量。</p></div>'+
  '<div class="schedule-repo"><div><span>WORKING PRODUCT / SOURCE</span><strong>從概念到可操作的產品</strong><p>設計、規則與開發持續迭代中，可查看目前的程式實作。</p></div><a href="'+repoURL+'" target="_blank" rel="noopener">Explore GitHub ↗</a></div>')+
 sec('reflection','07 / OUTCOME & REFLECTION','從功能做得完整，到重新判斷什麼值得先做',
  '<div class="schedule-learning"><span>WHAT I BUILT / 階段成果</span><strong>第一版 MVP 已能將人工排課限制轉成可檢查、可修改的課表。</strong><p>已實作學生可接受時段、主要老師授課目標、課程間隔、排課草案與人工調整，並透過模擬資料檢查主要規則及例外情境。系統尚未正式導入，沒有已驗證的時間節省或留存成效。第一版 PRD 與手動測試過程將於後續補充。</p></div>'+
  paragraph('起初，我以一位老師的排課困境為起點，將她提出的條件與例外情境逐步做成系統功能。隨著開發深入，我不斷補足規則，希望讓產品盡可能完整。然而，MVP 展示後的回饋讓我意識到：自己過早將單一使用者的需求視為產品需求，尚未充分確認不同老師的共通問題、釐清最小範圍，就投入了大量開發時間。')+
  paragraph('更重要的是，功能能運作不代表老師願意改變工作方式。她仍須教學生操作新工具、處理請假與補課，並在 LINE 群組尋找代課。若新系統無法銜接既有流程，即使初次排課更快，也可能增加後續維護成本。這是 Demo 後的初步回饋，而非實際導入的量測結果。')+
  schedulingInsight('04','ADOPTION COST / 導入成本','自動化不必然減輕工作負擔，新工具的學習與維護成本可能抵銷排課效率帶來的效益。','不能只評估系統產生課表的速度，也要檢視學生學習、老師修改及日常異動的整體成本。','adoption','導入成本示意｜自動化收益與額外維護工作需一起評估；非量化結果。')+
  schedulingInsight('05','COLLABORATION / 協作生態','排課仰賴既有的跨角色協作，若新系統無法銜接原有工具，反而可能增加溝通與維護成本。','老師、學生與代課老師已透過 LINE 協調。下一步應先確認能保留哪些既有習慣，再評估整合方式。','collaboration','跨角色協作示意｜LINE 為既有溝通管道，整合功能仍待驗證。')+
  '<div class="schedule-reframe"><span>PRODUCT REFRAMING / 產品重新定位</span><h3>從「讓排課更快」轉向「以最小範圍驗證真正值得解決的問題」</h3><p>我重新理解 MVP：它不是快速做出盡可能多的功能，而是先用有限投入驗證最重要的產品假設。這也改變了下一階段的功能取捨。</p><div class="schedule-strategy-grid"><div><span>KEEP / 保留</span><strong>集中分配與老師審核</strong><p>保留目前可處理多重排課條件的核心能力，但重新驗證它是不是其他老師也需要的共通價值。</p></div><div><span>RETHINK / 調整</span><strong>使用者的導入與協作方式</strong><p>先理解老師願意改變哪些流程，再比較獨立系統、LINE 整合或混合方式。</p></div><div><span>DEFER / 暫緩</span><strong>繼續擴充功能</strong><p>未確認需求共通性及導入成本前，不急著把所有個別情境都做進產品。</p></div></div></div>'+
  '<div class="schedule-next-steps"><span>NEXT VALIDATION / 下一階段計畫（尚未執行）</span><h3>先研究、收斂，再階段性測試</h3><div class="schedule-next-steps-grid">'+point('01 / DISCOVERY','訪談不同老師','訪談不同學生規模與排課方式的老師，區分共通需求與個別工作習慣。')+point('02 / MVP SCOPE','建立分階段範圍圓圈','依需求證據與產品目標劃分核心、下一階段及暫不開發的功能。')+point('03 / ADOPTION','驗證工作流程轉換','比較獨立系統、LINE 整合與混合操作的導入成本，先用低成本原型測試。')+point('04 / ITERATION','階段性驗證','每一輪先確認關鍵假設，再決定是否投入下一階段開發；追蹤完整協調時間及人工介入。')+'</div></div>'+
  '<div class="schedule-turn"><span>KEY TAKEAWAY / 核心反思</span><p><strong>從證明自己能做出產品，到學會判斷什麼值得先做。</strong>這次獨立開發讓我理解：做出功能，不等於已找到值得解決的產品問題。未來我會先確認需求的共通性、最需要驗證的假設，以及使用者的轉換成本，再決定投入多少開發資源。</p></div>');
}
function kdsBody(){
 return sec("overview","01 / CONTEXT","從工程師 Demo 到可交付的 KDS：先釐清廚房真正需要什麼","\n<p>因為有客戶表達購買 KDS 的意願，公司決定將工程師依自身理解開發的初步 Demo 推進為正式產品。原型已可呈現並處理訂單，但仍有<strong>長餐名截斷、跑馬燈閱讀負擔、誤完成後難以找回、油污環境觸控不便</strong>等問題。因此需要先釐清第一階段的功能範圍與真實廚房流程，支持團隊把 Demo 轉成可交付的產品。</p>\n<figure class=\"scenario-figure kds-case-scenario\"><img loading=\"lazy\" src=\"./kds-case-hero.png\" alt=\"KDS 廚房作業情境示意\"><figcaption>廚房使用情境示意，非本次現場研究照片。</figcaption></figure>\n")+
sec("research","02 / DISCOVERY","有限樣本下，如何做出有依據的下一版 KDS 設計決策？","\n<p>為回答這個挑戰，我結合<strong>第一代使用者回饋、歷史研究資料、競品比較與現場觀察</strong>，從不同來源交叉理解製餐工作與功能需求。由於只有 LA PASTA 一家店願意接受實地訪談與觀察，現場資料主要用來補充作業脈絡，不推論為所有餐飲業態的共同需求。</p>\n<h3>研究方法｜Research Methods</h3>\n<div class=\"research-method-grid\">\n<div class=\"research-method\"><span>01 / USER FEEDBACK & UX AUDIT</span><strong>既有客戶回饋與認知走查</strong><p>整理第一代 KDS 的誤銷找回、長品名截斷、跑馬燈、油污觸控及通知問題，並走查現有操作與資訊密度。</p></div>\n<div class=\"research-method\"><span>02 / HISTORICAL RESEARCH</span><strong>歷史訪談與廚房單分析</strong><p>整合過往跨店家的訪談、廚房單與製餐行為，理解同製程批次製作、出餐排序及不同角色的資訊需求。</p></div>\n<div class=\"research-method\"><span>03 / COMPETITIVE ANALYSIS</span><strong>競品功能與操作比較</strong><p>以自家產品專加科技為基準，比較 Eats365、微碧的視角切換、分組排序、時間管理、異動通知與找回功能，支援下一版功能取捨。</p></div>\n<div class=\"research-method\"><span>04 / CONTEXTUAL OBSERVATION</span><strong>LA PASTA 現場觀察與訪談</strong><p>在唯一能實地研究的餐廳觀察內外場如何透過多台 KDS 控制製餐節奏；此場域不代表全部餐飲業態。</p></div>\n</div>\n<div class=\"kds-competitor-analysis\">\n<h3>競品分析｜Competitive Analysis</h3>\n<p>這次以<strong>自家產品「專加科技第一代 KDS」</strong>為現況基準，對照<strong>Eats365</strong>與<strong>微碧（Weiby）</strong>，比較訂單分組、排序、資訊辨識、異動通知與出餐狀態。研究目的同時是找出缺少的基本功能、比較可行互動方式，協助團隊討論下一版取捨。</p>\n<div class=\"kds-research-turn\"><strong>主要分析結論：</strong>KDS 不只是顯示訂單，而是幫助內場在高壓環境快速完成「分組、排序、辨識」決策，並讓重要異動與出餐狀態及時被發現。</div>\n<div class=\"kds-competitor-findings\">\n<article><span>01 / GROUPING</span><h4>查看視角：以適合工作的單位分組</h4><p>常見依單號或桌號整理訂單；Eats365 另提供商品類別分組與總單視角，讓內場能聚焦同類商品的批次製作。分組方式不是單純換畫面，而是對應不同工作單位。</p></article>\n<article><span>02 / SORTING</span><h4>製作順序：兼顧效率與等待公平</h4><p>排序可能依單號、桌號、下單時間與等待時長切換。Eats365 提供菜單順序；微碧則有取餐時間相關排序與預訂單處理，協助內場判斷合適的製作時機。</p></article>\n<article><span>03 / READABILITY</span><h4>資訊辨識：穩定閱讀比選項多更重要</h4><p>專加第一代在欄位或字級組合不當時，長餐名容易被截斷。Eats365 採相對固定的版型與預設視角，提供另一種設計取捨：減少配置自由度，以維持資訊完整與閱讀舒適。</p></article>\n<article><span>04 / ALERTS & STATUS</span><h4>異動與出餐：讓狀態不只停在廚房</h4><p>Eats365 對退單提供音效，修改訂單後也會標示變更內容，降低內場重新比對負擔。兩家競品皆呈現製餐／出餐的進度管理；微碧還將部分狀態延伸到點餐流程。</p></article>\n</div>\n\n<a class=\"kds-compare-button\" href=\"./kds-function-comparison.webp\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"開啟完整 KDS 競品功能比較圖\">查看完整競品功能比較 <span aria-hidden=\"true\">↗</span></a>\n</div>\n")+
sec("user-analysis","03 / USER ANALYSIS","廚房如何批次製餐、接收異動並安排出餐順序？","\n<p>以<strong>歷史廚房單及既有需求</strong>建立初步理解，再透過 LA PASTA 的<strong>內、外場兩位受訪者</strong>與一次現場脈絡訪查，釐清資訊如何在真實製餐情境中流動。以下三項 Insight 是結合不同證據來源的研究歸納。</p>\n<div class=\"kds-user-metrics\"><div><strong>歷史資料</strong><span>廚房單與既有需求</span></div><div><strong>2 位</strong><span>LA PASTA 內、外場受訪者</span></div><div><strong>1 次</strong><span>現場脈絡訪查</span></div></div>\n<h3>使用者訪談與現場觀察｜Field Study</h3>\n\n<div class=\"kds-field-site\"><img loading=\"lazy\" src=\"./la-pasta-logo.svg\" alt=\"LA PASTA 餐廳 Logo\"><div><span>FIELD STUDY / 實地研究對象</span><strong>LA PASTA</strong><p>本次實地訪談與觀察對象；研究涵蓋內、外場作業脈絡，不將單店流程直接視為所有餐廳的普遍模式。</p></div></div>\n<h3>三個主要洞察｜Key Insights</h3>\n\n<div class=\"kds-user-insights\">\n<article class=\"insight-feature kds-insight-feature\"><div class=\"insight-feature-copy\"><span class=\"insight-feature-kicker\"><em class=\"insight-number\">01</em><span>BATCH PREPARATION / 批次製餐</span></span><h4>內場依相同製作流程批次製餐，而不是逐張訂單處理</h4><p>內場會先確認多筆訂單中的同類商品數量，再集中取料與製作。當冰櫃和烹飪位置有距離，批次備料能減少往返。這表示廚房的工作單位不一定是「整張訂單」，也可能是可共同製作的「一批商品」。</p></div><figure class=\"kds-insight-figure\"><div class=\"kds-mini-flow\"><div><small>訂單 01</small><strong>餐點 A × 2</strong></div><div><small>訂單 02</small><strong>餐點 A × 1</strong></div><span class=\"kds-mini-arrow\">↓</span><div class=\"kds-mini-highlight\"><small>相同製程集中查看</small><strong>餐點 A × 3</strong></div></div><figcaption>製餐分組情境示意｜說明批次思考方式，非現場操作截圖。</figcaption></figure></article>\n<figure class=\"kds-insight-context\"><span>WORKING CONTEXT / 工作脈絡摘要</span><blockquote>冰櫃與烹飪位置相隔一段距離，內場會先看同類餐點的總需求量，再一次拿取所需食材。</blockquote><figcaption>依研究記錄整理的情境摘要，非受訪者逐字引言。</figcaption></figure>\n<article class=\"insight-feature kds-insight-feature\"><div class=\"insight-feature-copy\"><span class=\"insight-feature-kicker\"><em class=\"insight-number\">02</em><span>INTERRUPTED ATTENTION / 間歇掃視</span></span><h4>內場以間歇掃視接收資訊，重要異動不能只靠畫面更新</h4><p>製餐者主要注意力在備料與烹調，無法持續盯著 KDS。當退單或修改發生時，若需要反覆回頭確認畫面，便會增加錯過異動的風險。手部接觸食材與油污，也使頻繁觸控操作不便。</p></div><figure class=\"kds-insight-figure\"><div class=\"kds-attention-flow\"><div><b>製餐中</b><span>注意力在餐點</span></div><div class=\"kds-attention-alert\"><b>訂單異動</b><span>需要被主動察覺</span></div><div><b>回看螢幕</b><span>調整製餐工作</span></div></div><figcaption>資訊接收節奏示意｜間歇掃視是工作情境分析，非注意力追蹤量測。</figcaption></figure></article>\n<figure class=\"kds-insight-context\"><span>WORKING CONTEXT / 工作脈絡摘要</span><blockquote>內場無法一直看著螢幕；退單或修改如果能有提醒聲，就比較有機會及時調整製餐。</blockquote><figcaption>依客戶回饋整理的情境摘要，非受訪者逐字引言。</figcaption></figure>\n<article class=\"insight-feature kds-insight-feature\"><div class=\"insight-feature-copy\"><span class=\"insight-feature-kicker\"><em class=\"insight-number\">03</em><span>EFFICIENCY & FAIRNESS / 效率與等待</span></span><h4>出餐順序同時受到製作效率與顧客等待時間影響</h4><p>同製程商品聚合能提高備餐效率，卻不代表所有相同商品都應排成一批。當來源訂單的進單時間相差很大，只看合計數量會掩蓋先後順序。內場需要兼顧批次製作與辨識哪些訂單已等待較久。</p></div><figure class=\"kds-insight-figure\"><div class=\"kds-time-flow\"><div><small>較早進單</small><strong>12:00</strong><span>餐點 A</span></div><div><small>接續進單</small><strong>12:03</strong><span>餐點 A</span></div><div class=\"kds-time-later\"><small>較晚進單</small><strong>12:18</strong><span>餐點 A</span></div></div><figcaption>進單時間差示意｜時間僅供解釋排序問題，非真實訂單資料。</figcaption></figure></article>\n</div>\n<p class=\"kds-insight-limitation\"><strong>研究限制：</strong>本次僅有 LA PASTA 一個實地場域、兩位受訪者，另整合歷史研究與既有客戶回饋。三項洞察可支援此階段設計判斷，但不代表已驗證所有餐飲業態。</p>\n")+
sec("opportunity","04 / PRODUCT DECISIONS","正式產品改版：把研究轉成可執行的設計方向","\n<p>本次 MVP 先聚焦「製餐資訊理解、誤操作排除、批次製餐」三項核心需求；團隊根據既有痛點與競品比較，納入資訊可讀性、異動提醒、訂單找回、視角同步與減少觸控等改善方向。研究建議進入產品規劃，並已推進至開發與交付前準備；尚無顧客正式使用後的驗證數據。<strong>正式介面主要由另一位 UX 設計師負責；我提供研究依據、參與功能範圍討論，並提出上述五項 UI 檢視建議。</strong></p>\n\n<h3>從研究洞察到 MVP 交付範圍</h3>\n<p>本次研究將需求歸納為三個工作挑戰：<strong>辨識資訊與避免誤操作、支援批次製餐、讓關鍵異動被注意到</strong>。考量新版第一階段的開發範圍，團隊先收斂為兩項 MVP 交付目標；其餘需求則分層保留，並不代表已決定開發。</p>\n<div class=\"kds-scope-heading\"><div><span>PHASED DELIVERY / 分階段交付</span><h3>巢狀圓呈現分階段交付目標</h3><p>越靠中心越早規劃，<strong>不是功能的重要程度排序</strong>。本次只處理中心 MVP，其餘兩圈是後續可能擴充的方向。</p></div></div>\n<div class=\"kds-scope-layout\"><div class=\"kds-scope-rings\" role=\"img\" aria-label=\"KDS 三層底部相切的巢狀圓：中心第一階段 MVP 為製餐資訊理解與誤操作排除及支援批次製餐；中圈後續初階管理為依門店流程設定製餐規則；外圈未來方向為網路環境異常的應對。\"><div class=\"kds-scope-outer\"><span>03 / FUTURE</span><strong>網路異常應對</strong></div><div class=\"kds-scope-middle\"><span>02 / LATER</span><strong>門店製餐規則</strong></div><div class=\"kds-scope-center\"><span>01 / THIS MVP</span><strong>製餐資訊理解<br>與誤操作排除</strong><strong>支援批次製餐</strong></div></div><div class=\"kds-scope-legend\"><div><span class=\"kds-scope-dot kds-scope-dot--now\"></span><div><small>01 / 本次新版第一階段 MVP</small><strong>製餐核心任務</strong><p>先處理資訊辨識、誤操作風險與批次製作的基本需求。此處表示<strong>規劃範圍</strong>，不是已開發上線。</p></div></div><div><span class=\"kds-scope-dot kds-scope-dot--later\"></span><div><small>02 / 後續初階管理</small><strong>可依門店流程設定製餐規則</strong><p>第二階段可探索依品項設定單批製作數量上限（示例：3 份），以及依訂單時間差決定是否切分批次（示例：10 分鐘）。這些數值為設計舉例，並非已確認的預設規則或本次 MVP 交付。</p></div></div><div><span class=\"kds-scope-dot kds-scope-dot--future\"></span><div><small>03 / 未來系統韌性</small><strong>網路環境異常的應對</strong><p>屬長期延伸方向，並非目前 MVP 範圍。</p></div></div></div></div>\n<h3>研究證據如何支持產品決策｜對照表</h3>\n<p>以下整理研究輸入、設計建議與目前能確認的規劃狀態。「MVP 核心需求」表示第一階段研究收斂的目標，不代表功能已開發或上線；預期價值也尚未經量化驗證。</p>\n<div class=\"decision-comparison\" role=\"region\" aria-label=\"KDS 研究證據與產品決策對照表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">研究來源與問題</th><th scope=\"col\">設計建議與預期價值</th><th scope=\"col\">決策狀態</th></tr></thead><tbody>\n<tr><td><strong>既有使用者回饋＋介面走查</strong><p>長餐點名稱被截斷、跑馬燈造成閱讀負擔，影響廚房快速辨識資訊。</p></td><td><strong>提高製餐資訊可讀性</strong><p>重新安排商品名稱、數量與狀態的資訊層級；預期降低掃視負擔。</p></td><td><span class=\"decision-status\">已納入改版討論</span></td></tr>\n<tr><td><strong>使用者回饋＋現場情境</strong><p>油污環境下容易誤觸，訂單誤銷後難以找回。</p></td><td><strong>降低誤操作與支援復原</strong><p>讓廚房能更安全地管理訂單狀態，避免資訊因操作失誤而消失。</p></td><td><span class=\"decision-status decision-status--adopted\">MVP 核心需求</span></td></tr>\n<tr><td><strong>歷史訪談＋LA PASTA 現場研究</strong><p>廚房會將相同製程的商品集中製作，需要兼顧數量與訂單來源。</p></td><td><strong>支援批次製餐</strong><p>依商品或製程安排工作，同時保留來源資訊；預期減少逐單切換的負擔。</p></td><td><span class=\"decision-status decision-status--adopted\">MVP 核心需求</span></td></tr>\n<tr><td><strong>歷史資料＋競品比較</strong><p>廚房需要辨識等待時間、訂單來源，以及追加或取消等異動狀態。</p></td><td><strong>排序與異動提醒</strong><p>保留時間與來源脈絡，針對訂單追加、取消等異動評估聲音提醒與畫面變更痕跡；觸發條件仍待測試。</p></td><td><span class=\"decision-status\">後續評估</span></td></tr>\n</tbody></table></div>\n<p class=\"decision-comparison-note\">狀態反映研究與當時規劃，不是上線或績效驗證結果。正式介面由團隊 UX 夥伴主責；我的角色是提供研究依據、參與功能討論與 UI 檢視。</p>\n<h3>已完成的設計結果｜UI Revision</h3>\n<p>以下呈現的是正式專案中<strong>完成修改的 UI 設計稿</strong>，不等於新版功能已開發上線或通過使用者驗證。</p>\n\n<div class=\"kds-ui-review\"><div><span>01 / SPACE ALLOCATION</span><strong>縮減低頻站點切換的空間</strong><p>站點通常不會頻繁更動，卻占據較大的頂部區域；建議將空間留給製餐核心資訊。</p></div><div><span>02 / WAITING TIME</span><strong>簡化等候時間的色彩</strong><p>等待時間可考慮先以兩種顏色區分，減少判讀負擔。</p></div><div><span>03 / VISUAL PRIORITY</span><strong>降低紅、橘警示色的使用頻率</strong><p>畫線、已取消、移除顯示等多處都使用警示色，容易分散視覺重心。</p></div><div><span>04 / INFORMATION DENSITY</span><strong>檢視非必要與重複資訊</strong><p>重新評估待排入數量、製餐區數量，以及已有文字說明的圖示，是否都需要在主畫面呈現。</p></div><div><span>05 / NOTE USABILITY</span><strong>備註以易用性優先</strong><p>備註使用率較低，但有使用需求時仍需易於辨識與操作；不應只為視覺美觀犧牲可用性。</p></div></div>\n<p>以上是我在 UI 檢視時提出的五項主要建議，後續由團隊 UX 設計師調整新版畫面。這五項建議均獲團隊採納並反映於設計調整；以下呈現的是<strong>設計稿變化，而非已驗證的績效提升</strong>。</p>\n<figure class=\"kds-shot kds-ui-compare\"><div class=\"kds-compare-grid\"><div><span class=\"kds-compare-label\">BEFORE / 舊版</span><a href=\"./kds-ui-before.png\" target=\"_blank\" rel=\"noopener noreferrer\"><img loading=\"lazy\" src=\"./kds-ui-before.png\" alt=\"KDS 舊版白底介面\"></a></div><div><span class=\"kds-compare-label\">AFTER / 新版</span><a href=\"./kds-ui-after.png\" target=\"_blank\" rel=\"noopener noreferrer\"><img loading=\"lazy\" src=\"./kds-ui-after.png\" alt=\"KDS 新版深色介面\"></a></div></div><figcaption>左為舊版、右為新版｜資訊層級與畫面密度的調整。點擊個別圖片可放大檢視。</figcaption></figure>\n")+
sec("solutions","05 / INDEPENDENT EXPLORATION","個人補充設計：在 MVP 之後探索更符合製餐節奏的商品視角","\n<p>在正式專案之外，我進一步思考：<strong>外場以訂單追蹤出餐，內場卻可能以商品與製作流程安排工作。</strong>如果只是將所有相同商品無限聚合，反而會忽略不同顧客的下單時間，以及廚房一次能做的數量。</p>\n<div class=\"kds-design-overview\"><span>DESIGN OUTCOME / 完整介面圖</span><h3>在訂單與品項之間切換製餐視角</h3><p>以下為我提供的 KDS 介面設計圖面。先以完整畫面呈現兩種工作視角，後續再說明各項互動；圖片皆可點擊放大查看細節。</p></div>\n<div class=\"kds-design-gallery\"><figure class=\"kds-shot\"><div class=\"kds-design-screen-title\"><span>01 / ORDER VIEW</span><strong>訂單視角</strong></div><a href=\"./kds-design-order-view.png\" target=\"_blank\" rel=\"noopener noreferrer\"><img loading=\"lazy\" src=\"./kds-design-order-view.png\" alt=\"KDS 訂單視角完整介面，按訂單呈現餐點及其狀態\"></a><figcaption>依訂單追蹤各張單的餐點與完成狀態，可辨識等待時間、備註與單品狀態。</figcaption></figure><figure class=\"kds-shot\"><div class=\"kds-design-screen-title\"><span>02 / ITEM VIEW</span><strong>品項視角</strong></div><a href=\"./kds-design-item-view.png\" target=\"_blank\" rel=\"noopener noreferrer\"><img loading=\"lazy\" src=\"./kds-design-item-view.png\" alt=\"KDS 品項視角完整介面，按商品分類聚合並保留來源訂單資訊\"></a><figcaption>跨訂單彙整同類品項，以品項總量安排批次製餐，同時保留各份商品對應的原始訂單。</figcaption></figure></div>\n<div class=\"kds-design-feature\"><div class=\"kds-design-feature-copy\"><span>DESIGN DETAIL 01 / INFORMATION AWARENESS</span><h3>重要異動留下可辨識的狀態痕跡</h3><p>內場通常間歇查看螢幕，因此以畫面上的異動狀態提示輔助辨識，並提出聲音通知方向。聲音觸發規則仍待實際測試，圖面呈現的是視覺操作狀態。</p></div><figure class=\"kds-shot\"><a href=\"./kds-design-alert.png\" target=\"_blank\" rel=\"noopener noreferrer\"><img loading=\"lazy\" src=\"./kds-design-alert.png\" alt=\"KDS 異動狀態與操作提示設計圖\"></a><figcaption>異動提示介面｜聲音提醒為設計方向，不以靜態截圖聲稱已驗證。</figcaption></figure></div>\n<div class=\"kds-design-feature\"><div class=\"kds-design-feature-copy\"><span>DESIGN DETAIL 02 / ERROR RECOVERY</span><h3>誤觸後可找回餐點，重新銜接製餐任務</h3><p>高壓製餐環境可能發生誤選與誤完成。操作設計呈現餐點處理中的狀態，以及從已出餐紀錄找回餐點的流程，降低重新定位任務的負擔。</p></div><div class=\"kds-design-recovery-grid\"><figure class=\"kds-shot\"><a href=\"./kds-design-recovery-select.png\" target=\"_blank\" rel=\"noopener noreferrer\"><img loading=\"lazy\" src=\"./kds-design-recovery-select.png\" alt=\"KDS 餐點處理與選取狀態設計圖\"></a><figcaption>處理中｜餐點選取與完成狀態。</figcaption></figure><figure class=\"kds-shot\"><a href=\"./kds-design-recovery-history.png\" target=\"_blank\" rel=\"noopener noreferrer\"><img loading=\"lazy\" src=\"./kds-design-recovery-history.png\" alt=\"KDS 已出餐紀錄與找回操作設計圖\"></a><figcaption>找回任務｜從已完成狀態重新銜接製餐。</figcaption></figure></div></div>\n<div class=\"kds-design-phase-two\"><span>PHASE 02 / 後續規劃，非本次 MVP</span><h3>依產能與進單時間決定製作批次</h3><p>後續可探索針對不同品項設定單批製作上限，以及依訂單時間差切分批次。以下以每批最多 3 份、相隔 10 分鐘切批為介面範例；這些值不是已驗證的通用規則，也不代表已上線。</p><figure class=\"kds-shot\"><a href=\"./kds-design-phase-two.png\" target=\"_blank\" rel=\"noopener noreferrer\"><img loading=\"lazy\" src=\"./kds-design-phase-two.png\" alt=\"KDS 第二階段依時間與品項上限拆分批次的設計示例\"></a><figcaption>第二階段設計示例｜以可設定的容量與時間限制輔助決定單次製餐範圍。</figcaption></figure></div>\n\n")+
sec("reflection","06 / OUTCOME & REFLECTION","從市場基本功能，到理解製餐現場的限制","\n<div class=\"kds-evidence-columns\"><div><h3>正式專案目前能說的成果</h3><ul><li>競品、歷史研究與現場訪談共同支援新版 MVP 的功能取捨，產品已推進至準備交付顧客的階段。</li><li>提出五項資訊層級與操作相關的 UI 建議，獲團隊採納並調整設計稿。</li><li>辨識 LA PASTA 內外場協作與產能／時機限制，作為後續設計參考。</li></ul></div><div><h3>仍需驗證的部分</h3><ul><li>下一版功能是否真能降低誤銷或加速辨識。</li><li>不同店態是否需要相同的視角切換與控菜機制。</li><li>個人提出的 10 分鐘分批、單商品產能與批次完成是否適用。</li></ul></div></div>\n<p>這次讓我理解，競品分析能幫團隊建立市場基本面，但無法單獨解釋使用者為什麼需要某個功能。只有將它與歷史反饋及現場工作邏輯結合，設計才不會停留在功能清單。</p>\n<p>我在正式專案裡學會透過研究與設計師討論資訊層級；在個人延伸中，練習將<strong>訂單與商品視角、製餐產能、時間公平性</strong>整合成可操作的介面概念。未來若有更多店態與驗證機會，才能再確認哪些規則值得產品化。</p>\n<div class=\"kds-reflection-bottom\"><strong>NEXT QUESTION ↗</strong><p>當廚房和外場的工作節奏不同時，哪些步驟適合自動化，哪些決策仍應保留給現場人員？</p></div>\n");
}
const bodyMap={kiosk:kioskBody,scheduling:schedulingBody,kds:kdsBody};
const toc={kiosk:['Overview','Research Framework','Research Findings','Recommendations','Design & Validation','Outcome'],scheduling:['Overview','The Problem','Product Strategy','Design Decisions','Building & Feedback','Learnings'],kds:['Context','Discovery','User Analysis','Product Decisions','Independent Design','Reflection']};
function caseSnapshot(p){if(p.id==='kds')return '<div class="case-overview-intro case-project-meta"><span>廚房顯示系統</span></div><div class="case-snapshot"><div><span>TEAM GOAL / 專案背景與目標</span><p>以既有第一代 KDS 的問題為起點，規劃新版第一階段 MVP：優先完成製餐資訊理解、誤操作排除與批次製餐。</p></div><div><span>CHALLENGE / 關鍵研究問題</span><p>廚房不是單純依進單順序製作；不同製程、時間、設備容量及內外場協作都會改變資訊需求。</p></div><div><span>MY ROLE / 我的貢獻</span><p>整理歷史研究與既有客戶反饋、參與競品及 LA PASTA 現場研究，並協助對齊 UI 與研究結果；正式改善建議由另一位 UX 夥伴主提。</p></div><div><span>RESULT / 階段成果</span><p>研究與競品比較支持下一版功能取捨；UI 討論後調整資訊層級。跨訂單聚合、時間與產能分批為個人獨立概念，尚未驗證。</p></div></div>';if(p.id!=='kiosk')return '<div class="case-overview-intro case-project-meta"><span>'+p.zh+'</span></div><div class="meta-row case-role-summary"><div class="meta-item"><span>我的角色</span><strong>'+p.role+'</strong></div><div class="meta-item"><span>專案範圍</span><strong>'+p.type+'</strong></div></div>';return '<div class="case-overview-intro case-project-meta"><span>次世代自助點餐機</span></div><div class="case-snapshot"><div><span>TEAM GOAL / 專案背景與目標</span><p>整合原本分離的點餐與付款設備，並重新檢視完整的自助點餐與付款體驗。</p></div><div><span>CHALLENGE / 關鍵設計挑戰</span><p>軟硬體互動複雜；不同餐飲業態與菜單結構的需求差異大，且終端消費者招募受限。</p></div><div><span>MY ROLE / 我的貢獻</span><p>參與前期研究與問題定義，主要負責消費者端 KIOSK 操作流程與介面設計；另一位 UX 負責店家後端。付款設備位置引導由我獨立提出與設計，經 PM 評估後採納試作。</p></div><div><span>RESULT / 階段成果</span><p>完成 4 個品牌、7 位餐廳管理者訪談、競品分析與 6 人 Prototype 測試；目前可由原始建議表確認 4 個設計方向獲採納，實際上線成效尚未確認。</p></div></div>';}
function casePage(p){const next=projects[(projects.indexOf(p)+1)%projects.length];const anchors=p.id==='kds'?['overview','research','user-analysis','opportunity','solutions','reflection']:['overview','research','opportunity','solutions','validation','reflection'];const banner=p.id==='kiosk'||p.id==='kds'?'':'<div class="case-banner">'+visual(p.visual)+'</div>';return '<div class="wrap"><section class="case-top'+(p.id==='kiosk'?' kiosk-cover':p.id==='kds'?' kds-cover':'')+'"><a href="#/work" class="back-link">← BACK TO SELECTED WORK</a><div class="case-title-row"><h1>'+p.title+'<span class="orange">.</span></h1><time class="case-cover-date" datetime="'+(p.id==='kiosk'?'2025-11':p.id==='kds'?'2026-06':'2026')+'">'+(p.id==='kiosk'?'2025.11 — 2026.04':p.id==='kds'?'2026.06 — 2026.07':p.year)+'</time></div><p class="case-deck">'+(p.id==='kiosk'?'整合軟硬體付款引導，重新檢視無人自助點餐的完整流程。':p.summary)+'</p>'+caseSnapshot(p)+'</section>'+banner+'<div class="case-layout"><aside class="side-index">'+toc[p.id].map((t,i)=>'<a href="#'+anchors[i]+'"><b>0'+(i+1)+'</b>'+t+'</a>').join('')+'</aside><article class="case-article">'+bodyMap[p.id]()+'</article></div><a class="next-case" href="#/case/'+next.id+'"><div><small>NEXT CASE STUDY →</small><h2>'+next.title+'</h2></div><span>↗</span></a></div>';}
function aboutPage(){return '<div class="wrap"><section class="case-top"><a class="back-link" href="#/">← HOME</a><div class="eyebrow" style="margin-top:75px">THE PERSON BEHIND THE WORK</div><h1>Curious.<br>Thoughtful.<br><span class="orange">Hands-on.</span></h1><p class="case-deck">工業設計背景，現職 UX 設計師，正朝產品經理方向發展。我喜歡把研究中看見的需求變成有邏輯、可操作、可以反覆驗證的產品。</p></section></div>'+aboutSection()+'<section class="dark-band"><div class="wrap"><div class="eyebrow">LET’S CONNECT</div><h2>Have a product problem worth solving?</h2><p>歡迎交流產品研究、產品設計及 0→1 的實作機會。</p><a href="mailto:chi861008@gmail.com">Say hello ↗</a></div></section>';}
// English home/about use the exact current Chinese markup. Only copy changes:
// imagery, signatures, scroll scenes and future layout edits stay identical.
const englishSharedText=[
 ['我是一名專注於 B2B SaaS 的 UX Researcher / Product Designer，正朝兼具設計與開發能力的 Product Builder、Product Manager 發展。','I am a UX Researcher / Product Designer focused on B2B SaaS, growing toward becoming a Product Builder and Product Manager with hands-on development skills.'],
 ['過去曾參與餐飲 POS、自助點餐機、雲端報表及廚房顯示系統等產品。工作之外，我也喜歡從生活中的真實問題發起 Side Project，讓研究、設計與開發不只停留在工作中，也能實際應用於日常生活。','I have worked on restaurant POS systems, self-ordering kiosks, cloud reporting tools, and kitchen display systems. Beyond work, I start side projects inspired by everyday problems, putting research, design, and development into practice in daily life.'],
 ['三個代表性的產品案例：從 0→1 建立產品，到研究支持的設計決策與場域驗證。','Three selected cases: building a product from zero, making research-informed design decisions, and validating ideas in context.'],
 ['皮拉提斯排課系統','Pilates Scheduling System'],
 ['次世代自助點餐機','Next-generation Self-ordering Kiosk'],
 ['廚房顯示系統研究與概念設計','Kitchen Display System Research & Concept'],
 ['工業設計背景，現職 UX 設計師，正朝產品經理方向發展。我喜歡把研究中看見的需求變成有邏輯、可操作、可以反覆驗證的產品。','An industrial-design-trained UX designer growing toward product management. I turn research findings into understandable, usable products that can be tested and improved.'],
 ['我的背景跨越工業設計、使用者研究與數位產品設計。現在我正朝產品經理發展，也持續用 AI 輔助開發，把身邊看見的問題轉成真正可以操作的產品。','My background spans industrial design, UX research, and digital product design. I am growing toward product management and using AI-assisted development to turn everyday problems into working tools.'],
 ['我喜歡定義問題、串聯不同線索、提出解法，以及把複雜的邏輯整理得讓人容易理解。','I enjoy framing problems, connecting evidence, proposing solutions, and making complex product logic easy to understand.'],
 ['歡迎交流產品研究、產品設計及 0→1 的實作機會。','I would love to connect about product research, product design, and building products from zero.']
];
function translateSharedPage(markup){for(const [zh,en] of englishSharedText)markup=markup.replaceAll(zh,en);return markup;}
function englishHome(){return translateSharedPage(home());}
function englishAbout(){return translateSharedPage(aboutPage());}
function render(){let route=decodeURI(location.hash.replace(/^#\/?/,'')).split('/').filter(Boolean);let view=route[0]||'';document.body.classList.toggle('home-mode',!(view==='case'||view==='about'));document.body.classList.toggle('kiosk-case',view==='case'&&route[1]==='kiosk');document.body.classList.toggle('kds-case',view==='case'&&route[1]==='kds');document.body.classList.toggle('scheduling-case',view==='case'&&route[1]==='scheduling');document.querySelectorAll('[data-nav]').forEach(a=>a.removeAttribute('aria-current'));if(view==='case'){const p=projects.find(p=>p.id===route[1]);app.innerHTML=p?(isEnglish()?window.PortfolioEN.casePage(p,projects,visual):casePage(p)):(isEnglish()?englishHome():home());document.title=(p?p.title:'Work')+' — Yuan Chi';}else if(view==='about'){app.innerHTML=isEnglish()?englishAbout():aboutPage();document.title='About — Yuan Chi';}else{app.innerHTML=isEnglish()?englishHome():home();document.title='Yuan Chi — Product Portfolio';if(view==='work'){requestAnimationFrame(()=>document.querySelector('#work')?.scrollIntoView({behavior:'smooth'}));}}updateLanguageControls();if(view==='case'||view==='about')window.scrollTo(0,0);}
app.addEventListener('click',event=>{const link=event.target.closest('a[href^="#"]');if(!link)return;const href=link.getAttribute('href');if(['#overview','#research','#user-analysis','#opportunity','#solutions','#validation','#reflection'].includes(href)){event.preventDefault();document.querySelectorAll('.side-index a').forEach(item=>{const active=item.getAttribute('href')===href;item.classList.toggle('is-active',active);if(active)item.setAttribute('aria-current','location');else item.removeAttribute('aria-current');});document.querySelector(href)?.scrollIntoView({behavior:'smooth',block:'start'});}});
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
  // Place the smaller signature and About Me action together under the bio.
  const actionRow=document.createElement('div');
  actionRow.className='signature-action-row';
  link.before(actionRow);
  link.classList.remove('intro-bottom-link');
  actionRow.append(signature,link);
  const paths=[...signature.querySelectorAll('path')];
  let total=0;
  for(const path of paths){const length=path.getTotalLength();path.dataset.length=length;path.dataset.start=total;total+=length;path.style.strokeDasharray=length;path.style.strokeDashoffset=length;}
  signature.dataset.totalLength=total;
}
function addContactFlip(){
  if(!document.body.classList.contains('home-mode'))return;
  const section=document.createElement('section');
  section.className='contact-flip-section';
  section.setAttribute('aria-label','Contact Yuan Chi');
  section.innerHTML='<a class="contact-flip" href="mailto:chi861008@gmail.com" aria-label="Contact me — send an email to Yuan Chi"><span class="contact-flip-inner"><span class="contact-flip-face contact-flip-front" aria-hidden="true"><img src="data:image/png;base64,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AgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCAAAECrQgoAFqZKXkSIECAAIGCAgqAgpiaIkCA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" alt="" /></span><span class="contact-flip-face contact-flip-back" aria-hidden="true"><span>Contact<br>me</span></span></span></a></section>';
  document.querySelector('.home-mode .dark-band')?.before(section);
  const badge=section.querySelector('.contact-flip');
  const hand=section.querySelector('.contact-flip-front img');
  if(badge&&hand&&'IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting){
        hand.style.animation='none';
        void hand.offsetWidth;
        hand.style.animation='';
        section.classList.add('is-visible');
      }else{
        section.classList.remove('is-visible');
      }
    },{threshold:.3});
    observer.observe(badge);
  }else{
    section.classList.add('is-visible');
  }
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
  // Stage 1: the cards are already moving as this section enters the viewport.
  // Stage 2: once the heading reaches its pin, the scene stays still while
  // scrolling completes the remaining entrance. Only then is it released.
  const holdTop=work.parentElement.getBoundingClientRect().top;
  // The hold is 240svh tall while its sticky scene is one viewport tall.
  // All three cards finish before the last part of that pinned distance.
  const pinStart=0;
  const availableTravel=Math.max(1,work.parentElement.offsetHeight-work.offsetHeight);
  const pinnedTravel=availableTravel*.68;
  const enteringDistance=viewport*.95;
  const approachProgress=Math.min(1,Math.max(0,(enteringDistance-holdTop)/enteringDistance));
  const pinnedProgress=Math.min(1,Math.max(0,(pinStart-holdTop)/pinnedTravel));
  const sharedProgress=.38*approachProgress+.62*pinnedProgress;
  cards.forEach((card,i)=>{
    // Track each actual card rather than the earlier-arriving section heading.
    // The stagger remains visible while the image is on screen and rewinds on scroll-up.
    const priorShift=parseFloat(card.style.getPropertyValue('--work-enter-y'))||0;
    const top=card.getBoundingClientRect().top-priorShift;
    const baseProgress=pinnedLayout?sharedProgress:Math.min(1,Math.max(0,(viewport*.98-top)/(viewport*(mobile?.8:.72))));
    // Every card moves from the first visible moment. Different travel
    // distances provide the stagger without leaving later cards motionless.
    const stagger=pinnedLayout?0:i*.075;
    const progress=reduced?1:Math.max(0,Math.min(1,(baseProgress-stagger)/(1-stagger)));
    const eased=progress*progress*(3-2*progress);
    const distance=(mobile?[135,165,195]:[125,165,205])[i];
    card.style.setProperty('--work-enter-y',`${((1-eased)*distance).toFixed(1)}px`);
    card.style.setProperty('--work-enter-opacity',(0.67+eased*.33).toFixed(3));
  });
}
function updateCaseToc(){
 const sections=[...document.querySelectorAll('.case-article .story-section[id]')];
 if(!sections.length)return;
 const threshold=Math.min(window.innerHeight*.38,300);
 let active=sections[0].id;
 for(const section of sections){if(section.getBoundingClientRect().top<=threshold)active=section.id;else break;}
 if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-36)active=sections[sections.length-1].id;
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
let typographyObserver;
const typographyTitleSelector='.intro-copy h2,.selected-head h2,.about-mini h2,.case-top h1,.story-section>h2,.story-section>h3,.research-track>h3,.design-phase h3,.next-case h2';
const typographyCopySelector='.intro-copy>p,.selected-head>p,.about-mini p,.case-top>.case-deck,.story-section>p,.story-section .insight-feature-copy>p,.story-section .solution>p,.dark-band .wrap>p';
function splitTitleIntoLines(heading){
  const original=heading.innerHTML;
  const walker=document.createTreeWalker(heading,NodeFilter.SHOW_TEXT);
  const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  const lines=[];const range=document.createRange();
  for(const node of nodes){
    for(let offset=0;offset<node.length;offset++){
      if(!node.textContent[offset].trim())continue;
      range.setStart(node,offset);range.setEnd(node,offset+1);
      const rect=range.getBoundingClientRect();if(!rect.height)continue;
      let line=lines.find(item=>Math.abs(item.top-rect.top)<Math.max(3,rect.height*.3));
      if(!line){line={top:rect.top,startNode:node,startOffset:offset,endNode:node,endOffset:offset+1};lines.push(line);}
      else{line.endNode=node;line.endOffset=offset+1;}
    }
  }
  if(!lines.length||lines.length>12)return;
  const fragments=lines.map(line=>{const part=document.createRange();part.setStart(line.startNode,line.startOffset);part.setEnd(line.endNode,line.endOffset);return part.cloneContents();});
  const accessibleText=heading.textContent.trim();heading.replaceChildren();heading.setAttribute('aria-label',accessibleText);
  fragments.forEach((fragment,index)=>{const clip=document.createElement('span');clip.className='motion-line-clip';clip.setAttribute('aria-hidden','true');const inner=document.createElement('span');inner.className='motion-line-inner';inner.style.setProperty('--line-index',index);inner.append(fragment);clip.append(inner);heading.append(clip);});
  heading.dataset.motionSource=original;heading.classList.add('motion-title');
}
function setupTypographyMotion(){
  typographyObserver?.disconnect();
  const root=document.querySelector('#app');if(!root)return;
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce)return;
  root.querySelectorAll(typographyTitleSelector).forEach(splitTitleIntoLines);
  root.querySelectorAll(typographyCopySelector).forEach((paragraph)=>{
    paragraph.classList.add('motion-copy');
    let index=0;let sibling=paragraph.previousElementSibling;
    while(sibling&&sibling.matches('p.motion-copy')){index++;sibling=sibling.previousElementSibling;}
    paragraph.style.setProperty('--copy-delay',`${Math.min(index,3)*90+120}ms`);
  });
  if(!('IntersectionObserver' in window)){root.querySelectorAll('.motion-title,.motion-copy').forEach(el=>el.classList.add('motion-visible'));return;}
  typographyObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('motion-visible');typographyObserver.unobserve(entry.target);}});
  },{threshold:0.08,rootMargin:'0px 0px -6% 0px'});
  root.querySelectorAll('.motion-title,.motion-copy').forEach(el=>typographyObserver.observe(el));
}
let typographyRefreshTimer;
let typographyViewportWidth=window.innerWidth;
function refreshTypographyLineBreaks(){
  clearTimeout(typographyRefreshTimer);
  typographyRefreshTimer=setTimeout(()=>{
    if(window.innerWidth===typographyViewportWidth)return;
    typographyViewportWidth=window.innerWidth;
    document.querySelectorAll('#app .motion-title').forEach(heading=>{
      const original=heading.dataset.motionSource;if(!original)return;
      const wasVisible=heading.classList.contains('motion-visible');
      heading.classList.remove('motion-title');heading.innerHTML=original;
      splitTitleIntoLines(heading);
      if(wasVisible)heading.classList.add('motion-visible');
    });
  },160);
}
window.addEventListener('resize',refreshTypographyLineBreaks,{passive:true});
function renderPage(){window.scrollTo({top:0,left:0,behavior:'instant'});document.querySelector('.photo-journey')?.remove();document.querySelector('.home-opening')?.remove();render();setupHeroFlip();setupThinkingBand();applyOrbitLettering();addScrollSignature();addContactFlip();frameIntroPhoto();setupIntroHold();setupSceneHolds();document.querySelectorAll('.identity-works .work-visual').forEach((visual,index)=>{const frame=document.createElement('span');frame.className='work-hover-frame';frame.setAttribute('aria-hidden','true');visual.appendChild(frame);const name=document.createElement('span');name.className='work-hover-name';name.setAttribute('aria-hidden','true');const label=document.createElement('span');label.textContent=projects[index]?.title||'';const arrow=document.createElement('span');arrow.className='work-hover-arrow';arrow.textContent='↗';name.append(label,arrow);visual.appendChild(name);});window.scrollTo({top:0,left:0,behavior:'instant'});requestAnimationFrame(()=>window.scrollTo({top:0,left:0,behavior:'instant'}));setupTypographyMotion();scheduleTocUpdate();if(document.body.classList.contains('home-mode')&&(!location.hash||location.hash==='#/'||location.hash==='#')){window.scrollTo({top:0,left:0,behavior:'instant'});requestAnimationFrame(()=>requestAnimationFrame(()=>{window.scrollTo(0,0);playHomeOpening();}));}}
if('scrollRestoration' in history)history.scrollRestoration='manual';
window.addEventListener('pageshow',()=>{window.scrollTo({top:0,left:0,behavior:'instant'});requestAnimationFrame(()=>window.scrollTo({top:0,left:0,behavior:'instant'}));});
window.addEventListener('hashchange',renderPage);renderPage();
// Clicking Home again on the same hash is also a deliberate return to the opening.
document.querySelectorAll('a[href="#/"]').forEach(link=>link.addEventListener('click',event=>{if(location.hash==='#/'||(!location.hash&&document.body.classList.contains('home-mode'))){event.preventDefault();window.scrollTo({top:0,left:0,behavior:'instant'});document.querySelector('.home-opening')?.remove();requestAnimationFrame(()=>requestAnimationFrame(playHomeOpening));}}));

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
