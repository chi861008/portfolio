const projects = [
  {id:'kiosk',number:'01',title:'KIOSK Redesign',zh:'次世代自助點餐機',type:'RESEARCH → PRODUCT DECISIONS',summary:'從研究發現到產品改善：整合軟硬體付款引導，重新檢視完整點餐體驗。',role:'UX Research & Product Design',year:'2025–2026',visual:'kiosk'},
  {id:'scheduling',number:'02',title:'Pilates Scheduling',zh:'皮拉提斯排課系統',type:'0→1 BUILD & RE-SCOPE',summary:'獨立做出可運作的排課產品，再從老師的回饋學會重新判斷：什麼才值得先做。',role:'Independent Product Builder',year:'2026',visual:'schedule'},
  {id:'kds',number:'03',title:'Kitchen Display System',zh:'廚房顯示系統研究與概念設計',type:'TEAM RESEARCH + PERSONAL CONCEPT',summary:'在團隊 KDS 改版中負責研究與 UI 檢視（5 項建議全數採納），並獨立延伸設計支援批次製餐的品項視角。',role:'UX Research & Independent UI Concept',year:'2026',visual:'kds'}
];
const app = document.querySelector('#app');
let portfolioLanguage = (()=>{try{return localStorage.getItem('yc-portfolio-language')==='en'?'en':'zh';}catch{return 'zh';}})();
const isEnglish=()=>portfolioLanguage==='en';
function setPortfolioLanguage(next){portfolioLanguage=next==='en'?'en':'zh';try{localStorage.setItem('yc-portfolio-language',portfolioLanguage);}catch{}renderPage();}
function updateLanguageControls(){const toggle=document.querySelector('#language-toggle');if(toggle){const label=isEnglish()?'切換為繁體中文':'Switch to English';toggle.setAttribute('aria-label',label);toggle.setAttribute('title',label);const destination=toggle.querySelector('.language-destination');if(destination)destination.textContent=isEnglish()?'中':'EN';}document.documentElement.lang=isEnglish()?'en':'zh-Hant';const nav=document.querySelector('.nav-links');if(nav)nav.setAttribute('aria-label',isEnglish()?'Main navigation':'主選單');const node=document.querySelector('.footer-right a');if(node)node.textContent=isEnglish()?'Back to top ↑':'回到頂端 ↑';}
document.querySelector('#language-toggle')?.addEventListener('click',()=>setPortfolioLanguage(isEnglish()?'zh':'en'));
const figmaURL='https://www.figma.com/design/S2sh6gtlIJ3JtDM7i3MEiN/portfolio?node-id=1654-18351';
const repoURL='https://github.com/chi861008/researved-system';
const visual=(name)=>name==='schedule'?'<div class="work-visual visual-schedule"><div class="arrow-circle" aria-hidden="true">↗</div><div class="schedule-mock"><div class="schedule-top"><strong>Weekly schedule</strong><span>October / 2026　↗</span></div><div class="calendar-week">'+['MON','TUE','WED','THU','FRI','SAT','SUN'].map((d,i)=>'<div class="calendar-day"><b>'+d+'</b>'+(i===0||i===2||i===4?'<span class="calendar-pill">Pilates 10:00</span>':'')+(i===1||i===3?'<span class="calendar-pill orange-pill">Private 14:00</span>':'')+'</div>').join('')+'</div></div></div>':name==='kiosk'?'<div class="work-visual visual-kiosk kiosk-image-cover"><img src="./kiosk-cover.png?v=8" alt="KIOSK 自助點餐介面與付款引導的設計畫面拼貼"><div class="arrow-circle" aria-hidden="true">↗</div></div>':'<div class="work-visual visual-kds kds-image-cover"><img src="./kds-cover.png?v=8" alt="KDS 個人概念設計封面：深色廚房訂單與分類畫面的介面拼貼"><div class="arrow-circle" aria-hidden="true">↗</div></div>';
const card=p=>'<a class="work-card" href="#/case/'+p.id+'">'+visual(p.visual)+'<div class="work-info"><div><h3>'+p.title+'</h3><p>'+p.zh+'<br>'+p.type+'</p></div><div class="project-number">'+p.number+' / 03</div></div></a>';
function home(){return '<section class="identity-hero"><div class="identity-wrap"><h1 class="visually-hidden">Yuan Chi — Product Manager &amp; Product Designer</h1><div class="identity-caption">PORTFOLIO / 2026</div><div class="identity-title"><span>Yuan</span><figure class="identity-photo"><img src="./yuan-chi-expressive-hero.png" alt="Yuan Chi 俏皮的黑白個人照片" fetchpriority="high" loading="eager" decoding="async"><i class="corner c1"></i><i class="corner c2"></i><i class="corner c3"></i><i class="corner c4"></i></figure><span>Chi</span></div><div class="identity-details"><p>Product Manager ×<br>Product Designer</p><p>Research / Strategy / Design<br>From insight to working product</p><p>Based in Taiwan<br><a href="mailto:chi861008@gmail.com">chi861008@gmail.com ↗</a></p></div></div></section><section class="intro-portrait wrap" id="about"><div class="intro-copy"><div class="eyebrow">ABOUT ME</div><h2>Hi<span class="orange">.</span></h2><p>我是產品設計師，正往產品經理發展。擅長把模糊的業務問題拆成可以驗證的假設，再用研究、設計與可運作的原型，幫團隊做出取捨。</p><p>過去曾參與餐飲 POS、自助點餐機、雲端報表及廚房顯示系統等產品。工作之外，我也喜歡從生活中的真實問題發起 Side Project，讓研究、設計與開發不只停留在工作中，也能實際應用於日常生活。</p><a class="intro-link" href="#/about">More about me <span>↗</span></a></div><div class="intro-visual"><img src="./yuan-chi-about-crossleg-slim.svg" alt="Yuan Chi 個人黑白形象照"><div class="orbit-word">DESIGN · RESEARCH · PRODUCT · BUILD ·</div></div></section><section class="section-space wrap" id="work"><div class="section-head selected-head"><div><div class="eyebrow">SELECTED WORK / 2026</div><h2>Works record<span class="orange">.</span></h2></div></div><div class="work-grid identity-works">'+projects.map(card).join('')+'</div></section><section class="dark-band"><div class="wrap"><div class="eyebrow">THE WAY I THINK</div><h2>Fall in love with the problem, not the solution.</h2><a href="mailto:chi861008@gmail.com">Let’s connect ↗</a></div></section>';}
function aboutSection(){return '<section class="section-space wrap" id="about"><div class="about-mini"><div><div class="eyebrow">02 / About</div><h2>Curious by nature.<br>Builder by choice.</h2></div><div><p>我的背景跨越工業設計、使用者研究與數位產品設計，做過餐飲 POS、自助點餐機與廚房顯示系統。現在我往產品經理發展：定義問題、排定優先順序、用最小成本驗證，必要時用 AI 輔助開發自己把原型做出來。</p><p>我喜歡定義問題、串聯不同線索、提出解法，以及把複雜的邏輯整理得讓人容易理解。</p><div class="skills"><span class="chip">Product Discovery</span><span class="chip">Prioritization</span><span class="chip">UX Research</span><span class="chip">Product Design</span><span class="chip">Prototyping</span><span class="chip">AI-assisted Development</span></div></div></div></section>';}
const sec=(id,kicker,title,inner)=>'<section class="story-section" id="'+id+'"><div class="story-kicker">'+kicker+'</div><h2>'+title+'</h2>'+inner+'</section>';
const paragraph=t=>'<p>'+t+'</p>';
const fact=(n,title,desc)=>'<div class="fact-box"><span class="fact-id">'+n+'</span><h3>'+title+'</h3><p>'+desc+'</p></div>';
function kioskBody(){
return sec('overview','01 / OVERVIEW','當 KIOSK 銷售未達預期，我如何用研究協助新版產品做出設計取捨',

 paragraph('團隊反映既有 KIOSK 銷售表現未達預期，並懷疑產品功能與使用體驗可能存在競爭差距。公司原有點餐與付款設備分離，因此已規劃推出整合兩者的新一代機台，並把握改版機會檢視既有軟體的操作體驗。')+
 paragraph('這不只是將原本的畫面移到新機台：不同餐飲業態的菜單架構、不同角色的需求，以及畫面與實體付款設備如何配合，都需要重新理解。團隊因此希望從市場競爭差距與真實使用需求出發，為新版 KIOSK 找到有依據的軟體改善方向。')+
 ''+
 '<figure class="scenario-figure"><img src="./kiosk-scenario.png" alt="顧客在餐廳操作整合螢幕與多種付款設備的自助點餐機之使用情境示意"><figcaption>使用情境示意｜螢幕與實體付款設備的相對位置。</figcaption></figure>')+
sec('research','02 / RESEARCH FRAMEWORK','三個研究問題，對應三條證據來源',
 '<div class="research-question-grid"><div><span>RQ 01 / PRODUCT FIT</span><strong>不同餐飲業態對 KIOSK 的功能與操作流程有什麼需求？</strong><div class="rq-decision"><b>研究發現</b>探索性盤點 40 間店家、約 10 種業態，初步收斂出日式專門店與飲料店兩個值得探索的方向（尚待店家驗證）。</div><div class="rq-value"><b>帶出的決策</b><a class="rq-link rq-link--wide" href="#kiosk-market">市場聚焦｜收斂優先店型 <span aria-hidden="true">↓</span></a></div></div><div><span>RQ 02 / COMPETITIVE GAP</span><strong>我們與市場競品有哪些關鍵功能差距？</strong><div class="rq-decision"><b>研究發現</b>71% 的競品在點餐流程中提供加購入口，現有產品缺少這類營運工具。</div><div class="rq-value"><b>帶出的決策</b><a class="rq-link" href="#kdec-1">決策 01｜加購入口 <span aria-hidden="true">↓</span></a></div></div><div><span>RQ 03 / USER EXPERIENCE</span><strong>既有店家遇到哪些操作問題與未滿足需求？</strong><div class="rq-decision"><b>研究發現</b>店家轉述顧客專注螢幕、找不到實體付款位置；過往訪談也發現升級套餐必須刪除重點。</div><div class="rq-value"><b>帶出的決策</b><a class="rq-link" href="#kdec-2">決策 02｜付款位置引導 <span aria-hidden="true">↓</span></a><a class="rq-link" href="#kdec-3">決策 03｜單點／套餐切換 <span aria-hidden="true">↓</span></a></div></div></div>'+
 '<h3>研究方法｜Research Methods</h3>'+
 '<div class="research-method-grid"><div class="research-method"><span>01 / DESK RESEARCH</span><strong>市場與業態桌面研究</strong><p>整理不同餐飲店型、菜單結構與點餐情境，釐清 KIOSK 的產品適配需求。</p></div><div class="research-method"><span>02 / COMPETITIVE ANALYSIS</span><strong>競品分析</strong><p>比較競品的功能、介面與操作流程，辨識市場常見能力與現有產品的差距。</p></div><div class="research-method"><span>03 / MERCHANT INTERVIEWS</span><strong>合作店家訪談與既有訪談資料</strong><p>訪談 7 位合作店家管理者，理解其轉述的消費者操作問題及門市需求，並納入過往訪談發現的單點／套餐切換問題；本次未直接訪談終端消費者。</p></div><div class="research-method"><span>04 / PROTOTYPE TESTING</span><strong>Prototype 可用性測試</strong><p>邀請 6 位公司同事操作設計原型，蒐集付款流程與套餐選項理解上的早期回饋，作為第二輪設計的依據。</p></div></div>'+
 '<div class="kiosk-market-restored"><div class="kiosk-market-final" id="kiosk-market"><div class="kiosk-market-final-head"><span>MARKET FOCUS / 市場聚焦</span><h3>從市場盤點收斂優先店型</h3><p>探索性盤點 40 間店家、約 10 種業態後，我初步整理出值得進一步探索的店型方向，仍需透過實際店家驗證。</p></div><div class="kiosk-market-final-main"><div class="market-conclusion"><div class="market-sizing market-sizing--circles"><div class="market-sizing-tam"><span>TAM</span><strong>有自助點餐需求的餐飲市場</strong><div class="market-sizing-sam"><span>SAM</span><strong>現階段產品可服務的店型</strong><div class="market-sizing-focus"><span>待驗證</span><strong>初步候選業態</strong></div></div></div></div></div><div class="kiosk-market-screening"><span>SEGMENT CRITERIA / 分析後的篩選條件</span><h4>哪些店家更適合導入？</h4><p class="kiosk-screening-intro">初步以日式專門店與飲料店作為值得探索的例子，並透過三項商業條件評估；這些店型尚未確認有足夠的市場需求或產品適配性，也不是由長條圖排名直接決定。</p><div class="kiosk-screening-item"><span>01 / TRANSACTION FREQUENCY</span><h5>交易頻率高</h5><p>尖峰訂單集中，需要快速完成點餐；內用店也可觀察翻桌節奏。</p></div><div class="kiosk-screening-item"><span>02 / STANDARDIZATION</span><h5>流程標準化</h5><p>菜單與點餐步驟相對固定，較有機會透過自助操作分擔櫃台工作。</p></div><div class="kiosk-screening-item"><span>03 / AVERAGE ORDER VALUE</span><h5>客單價 NT$300 以下</h5><p>作為這次初步鎖定店型的商業篩選門檻，而非所有目標業態的既定事實。</p></div></div></div><div class="market-compare kiosk-market-final-stats"><div><span>40</span><strong>間店家</strong><small>探索性市場盤點</small></div><div><span>10</span><strong>種業態</strong><small>依菜單與店型粗分</small></div><div><span>2</span><strong>項優先方向</strong><small>日式專門店・飲料店</small></div></div><details class="evidence-details kiosk-market-final-chart"><summary>展開：各業態的 KIOSK 採用觀察</summary><div class="market-chart"><div class="market-chart-head"><h6>各業態的 KIOSK 採用觀察</h6><p>橘色代表本次觀察數較高的業態，不代表產品的優先順序。</p></div><div class="market-bars"><div class="market-bar-row"><span>中式小吃店</span><div class="market-bar-track"><div class="market-bar market-bar-lead" style="width:100%"></div></div><strong>7</strong></div><div class="market-bar-row"><span>日式專門店</span><div class="market-bar-track"><div class="market-bar market-bar-lead" style="width:100%"></div></div><strong>7</strong></div><div class="market-bar-row"><span>速食店</span><div class="market-bar-track"><div class="market-bar market-bar-lead" style="width:86%"></div></div><strong>6</strong></div><div class="market-bar-row"><span>飲料店</span><div class="market-bar-track"><div class="market-bar market-bar-lead" style="width:86%"></div></div><strong>6</strong></div><div class="market-bar-row"><span>西式餐館</span><div class="market-bar-track"><div class="market-bar " style="width:57%"></div></div><strong>4</strong></div><div class="market-bar-row"><span>平價快餐店</span><div class="market-bar-track"><div class="market-bar " style="width:43%"></div></div><strong>3</strong></div><div class="market-bar-row"><span>麵食店</span><div class="market-bar-track"><div class="market-bar " style="width:29%"></div></div><strong>2</strong></div><div class="market-bar-row"><span>無人拉麵店</span><div class="market-bar-track"><div class="market-bar " style="width:29%"></div></div><strong>2</strong></div><div class="market-bar-row"><span>咖啡廳</span><div class="market-bar-track"><div class="market-bar " style="width:29%"></div></div><strong>2</strong></div><div class="market-bar-row"><span>其他</span><div class="market-bar-track"><div class="market-bar " style="width:29%"></div></div><strong>2</strong></div></div><p class="market-chart-note">圖表數值為各業態觀察到採用 KIOSK 的品牌數，與「40 間店家」計數單位不同；不可直接加總或推估全台採用率。</p></div></details></div></div>')+
sec('solutions','03 / KEY PRODUCT DECISIONS','從研究證據到三個核心產品決策',
 paragraph('我結合 7 位店家管理者訪談、既有研究與市場競品資料評估產品方向：競品指出加購機會，店家轉述揭示付款設備不易尋找，過往訪談則發現單點升級套餐需要重做訂單。以下聚焦三項核心決策，區分研究依據與尚待驗證的假設。')+
 "<div class=\"kiosk-decision-intro\"><span>RESEARCH TO DESIGN / 研究如何影響設計</span><h3>三個核心設計決策</h3><p>從<strong>營運加購、付款設備引導、單點與套餐切換</strong>三個角度，說明研究如何轉成具體的介面方向。</p></div><div class=\"research-question-grid kiosk-decision-rows\"><div id=\"kdec-1\"><span>01 / COMMERCIAL OPPORTUNITY</span><strong>讓加購不只是一個隱藏的選項<em class=\"ev-tag ev-weak\">競品推論・待驗證</em></strong><div class=\"rq-decision\"><b>研究依據</b>71% 的競品提供加購入口，顯示這是可評估的營運機會，但現階段沒有直接的消費者需求證據。</div><div class=\"rq-value\"><b>設計決策</b>提出明確的加購入口，讓顧客在選餐時看見可搭配的商品；是否提升客單價仍須上線驗證。<a class=\"dec-look\" href=\"#hl-addon\">看實際畫面 <span aria-hidden=\"true\">↓</span></a></div></div><div id=\"kdec-2\"><span>02 / SCREEN × HARDWARE</span><strong>讓畫面指示對得上實體付款設備<em class=\"ev-tag ev-mid\">店家訪談轉述</em></strong><div class=\"rq-decision\"><b>研究依據</b>店家反映顧客專注螢幕時，難以找到現金、信用卡或感應付款的實體位置。</div><div class=\"rq-value\"><b>設計決策</b>將付款引導與實體機台的設備位置對應，減少顧客尋找設備及向店員求助的機會。<a class=\"dec-look\" href=\"#hl-pay\">看實際畫面 <span aria-hidden=\"true\">↓</span></a></div></div><div id=\"kdec-3\"><span>03 / ORDER FLEXIBILITY</span><strong>讓單點與套餐切換不必重做訂單<em class=\"ev-tag ev-mid\">過往訪談發現</em></strong><div class=\"rq-decision\"><b>研究依據</b>過往訪談指出，顧客想升級套餐時，常需要刪除原本選擇再重新點餐。</div><div class=\"rq-value\"><b>設計決策</b>保留既有選擇，支援直接切換單點／套餐，降低重複操作與中途放棄的風險。<a class=\"dec-look\" href=\"#hl-combo\">看實際畫面 <span aria-hidden=\"true\">↓</span></a></div></div></div><p class=\"kiosk-decision-status\">已採納為設計方向，非上線成效</p><div class=\"kiosk-foundation-note\"><span>FOUNDATIONAL IMPROVEMENTS / 基礎流程改善</span><p>其他獲採納項目涵蓋商品分類導覽、發票／載具入口、結帳前返回修改、初次使用提示、簡化付款步驟，以及掃描與取餐提示。這些用來補齊完整點餐流程，不在此逐項展開。另有 3 項方向尚未確認採納或需要進一步評估。</p></div>")+
sec('validation','04 / DESIGN & VALIDATION','從設計方案到初步使用者驗證',
 '<div class="design-phase design-phase--proposal"><div class="phase-banner"><span>PHASE 01 / DESIGN PROPOSALS</span><strong>研究轉譯為設計方案</strong><p>三個設計方案依序說明，右邊是從互動展示錄下的實際操作；最後可以自己完整操作一遍。</p></div><article class="hl-row" id="hl-pay"><div class="hl-copy"><span class="solution-num">01 / MY PROPOSAL · 我獨立提出、獲 PM 採納</span><h3>付款設備位置引導</h3><p>顧客站在機台前時，注意力集中於螢幕，未必能同時看到機台周遭的付款裝置。單純顯示紙鈔或信用卡圖示，無法充分解釋設備在哪裡。</p><p>因此，我提出在付款畫面中呈現機台與付款設備的相對位置，讓使用者能直接對照畫面與實際操作環境。我的判斷是：這是唯一一個<strong>發生在主流程、會直接中斷交易、又需要店員介入</strong>的問題，改善它同時降低顧客卡關與門市支援成本，所以優先度最高。</p><figure class="hl-before"><img src="./kiosk-payment-before.png" alt="舊付款介面以文字和抽象投鈔圖示提示現金支付"><figcaption><b>改版前</b>只提示投鈔動作，較難對照實體位置。</figcaption></figure><div class="state-note">貢獻：我根據店家訪談轉述的操作問題與機台畫面分析提出方案；獲 PM 採納並安排試作。原型測試中，付款是受測者回饋最順暢的環節。</div></div><figure class="hl-clip"><div class="hl-clip-frame"><video autoplay muted loop playsinline preload="metadata" poster="./assets/kiosk-hl-pay.jpg?v=1"><source src="./assets/kiosk-hl-pay.mp4?v=1" type="video/mp4"></video></div><figcaption>現金付款：鏡頭依序帶到投幣口與紙鈔口</figcaption></figure></article><article class="hl-row" id="hl-combo"><div class="hl-copy"><span class="solution-num">02 / HISTORICAL RESEARCH REVIEW</span><h3>套餐一鍵切換</h3><p>回顧過往研究時，我重新辨識到既有系統把「單點」與「套餐」設成兩個獨立商品。顧客只要在結帳前臨時改變主意，就得先刪除原本品項、重新選擇另一個商品。</p><p>改版後，在同一個商品頁直接「一鍵升級套餐／切回單點」，附餐也在同一頁調整。</p><div class="state-note">貢獻：團隊共同發想；我參與方案評估與設計。</div></div><figure class="hl-clip"><div class="hl-clip-frame"><video autoplay muted loop playsinline preload="metadata" poster="./assets/kiosk-hl-combo.jpg?v=1"><source src="./assets/kiosk-hl-combo.mp4?v=1" type="video/mp4"></video></div><figcaption>在商品頁直接升級套餐並調整附餐</figcaption></figure></article><article class="hl-row" id="hl-addon"><div class="hl-copy"><span class="solution-num">03 / ADOPTED DIRECTION</span><h3>加點商品畫面</h3><p>為了讓店家在既有點餐流程中提供額外加購選項，結帳前增加獨立的加點畫面，以商品圖片、價格與數量加減呈現選擇。</p><p>同時保留「不需要，謝謝」的略過入口，不讓促購變成阻礙。此畫面對應原始建議表中被採納的「加購功能」。</p></div><figure class="hl-clip"><div class="hl-clip-frame"><video autoplay muted loop playsinline preload="metadata" poster="./assets/kiosk-hl-addon.jpg?v=1"><source src="./assets/kiosk-hl-addon.mp4?v=1" type="video/mp4"></video></div><figcaption>前往付款前跳出加點畫面，可加購或略過</figcaption></figure></article><div class="kiosk-live-demo" id="try-demo"><div class="kiosk-live-copy"><span>TRY THE PROTOTYPE / 自由操作</span><h3>從頭走一遍新版點餐流程</h3><p>以 Figma Prototype 為基礎重建的可操作展示，涵蓋開始畫面、內用／外帶與桌號選擇、點餐與套餐升級、加點商品、發票設定，以及對照機台位置的付款引導動畫。菜單、價格與圖片為示意資料，付款為模擬流程；部分畫面與互動細節為展示需要補充。</p><a href="./kiosk-demo/index.html?v=20261029" target="_blank" rel="noopener">在新視窗開啟互動展示 ↗</a><small>不連接真實系統 · 付款頁可點「展示用」按鈕模擬完成 · 建議以桌機或平板觀看</small></div><div class="kiosk-live-frame"><iframe src="./kiosk-demo/index.html?v=20261029" title="次世代自助點餐機互動展示" loading="lazy"></iframe></div></div></div>'+
 '<div class="design-phase design-phase--testing"><div class="phase-banner"><span>PHASE 02 / PROTOTYPE TESTING</span><strong>透過操作回饋找出理解斷點</strong><p>6 位內部同事參與第一輪可用性測試。</p></div><h3>Prototype 驗證：付款流程順暢，套餐選項表意仍不清楚</h3>'+
 paragraph('我以 Prototype 進行 6 人前期可用性測試，受測者皆為公司同事。這一輪主要用來檢查新流程是否容易理解，並蒐集下一輪改善線索。')+
 '<figure class="design-shot test-session-photo"><img src="./kiosk-prototype-test.png" alt="六位公司同事分別在實體自助點餐機上操作 Prototype 的測試過程照片拼貼"><figcaption>Prototype 測試紀錄｜6 位公司同事在機台上操作設計原型。</figcaption></figure>'+
 '<div class="test-finding-grid"><div class="test-finding-positive"><div class="test-finding-label"><b class="test-finding-mark" aria-hidden="true">✓</b><span>優勢 / POSITIVE SIGNAL</span></div><h4>付款流程是相對順暢的環節</h4><p>受測者普遍回饋，付款是整體任務中最順暢的一段。這初步支持付款引導及流程安排的可行性。</p></div><div class="test-finding-negative"><div class="test-finding-label"><b class="test-finding-mark" aria-hidden="true">✕</b><span>待改善 / USABILITY ISSUE</span></div><h4>統一方形按鈕難以傳達調整目的</h4><p>第一版 Prototype 的套餐選項採用方形按鈕，部分受測者不清楚進入選項後究竟要調整什麼，因此需要重新設計選項資訊的呈現方式。</p></div></div></div>'+
 '<div class="design-phase design-phase--iteration"><div class="phase-banner"><span>PHASE 03 / SECOND ITERATION</span><strong>測試結果推動第二輪版型</strong><p>從單一方形按鈕，延伸出四種資訊呈現方式。</p></div><div class="solution"><span class="solution-num">04 / SECOND DESIGN ITERATION</span><h3>由單一方形按鈕延伸四種選項版型</h3>'+paragraph('根據第一次 Prototype 測試的理解障礙，我們不再讓所有選項沿用相同的方形按鈕，而是用兩個問題決定版型：<strong>顧客需要看圖才能決定嗎？需要調整數量嗎？</strong>由此延伸出四種形式，讓店家設定新菜單時也有一致的規則可循。')+
 "<div class=\"layout-variants layout-variants--integrated\"><figure><div class=\"layout-variant-rationale\"><span>01 / 文字選項</span><h4>只是選程度，不需要看圖</h4><p>飯量、甜度、冰塊等可直接用文字辨識的選擇。</p></div><img loading=\"lazy\" src=\"./kiosk-layout-compact.png\" alt=\"飯量的純文字選項\"></figure><figure><div class=\"layout-variant-rationale\"><span>02 / 橫向版型</span><h4>需要閱讀商品資訊才能決定</h4><p>附餐或單點加購需要同時看名稱、價格與說明。</p></div><img loading=\"lazy\" src=\"./kiosk-layout-wide.png\" alt=\"包含商品說明的橫向版型\"></figure><figure><div class=\"layout-variant-rationale\"><span>03 / 精簡橫列</span><h4>可以多選，還需要調整數量</h4><p>加購小菜、醬料等需要快速增減份數。</p></div><img loading=\"lazy\" src=\"./kiosk-layout-row.png\" alt=\"可調整數量的精簡橫列\"></figure><figure><div class=\"layout-variant-rationale\"><span>04 / 圖像大卡</span><h4>需要看圖片才能辨識內容</h4><p>套餐附餐與組合選擇，讓商品圖片協助辨識。</p></div><img loading=\"lazy\" src=\"./kiosk-layout-tile.png\" alt=\"以商品圖片為主的選項大卡\"></figure></div>"+
 '<div class="state-note">迭代狀態：第二輪設計完成後專案結束，未再測試。</div></div>'+
 '</div>')+
sec('reflection','05 / OUTCOME & REFLECTION','研究成果、關鍵反思與下一步',
 '<div class="kiosk-reflection-section kiosk-reflection-outcome"><span class="overline">01 / OUTCOME · 專案成果</span><h3>研究如何改變產品決策</h3><p>我將「銷售不如預期」拆解為店家選型時對功能完整度的期待，以及顧客操作卡關造成的門市支援負擔。研究與討論後提出 12 項建議，其中 9 項獲採納為設計方向；我也獨立提出將螢幕引導對應實體付款設備的方案，並獲 PM 採納試作。這些代表<strong>設計決策獲得支持</strong>，並非功能已上線或成效已被證實。</p></div>'+
 '<div class="kiosk-reflection-section kiosk-reflection-learning"><span class="overline">02 / LEARNING · 關鍵反思</span><h3>不同證據，能回答不同問題</h3><p>競品普及度能提示市場期待，卻不能直接證明消費者需要；7 位店家管理者的轉述與 40 間門市的探索性盤點，能指出問題線索，但仍需要直接觀察消費者。6 位內部同事的原型測試找到了介面問題，套餐選項的第二輪版型也尚未再次測試，因此不能把原型回饋當作真實門市成效。</p></div>'+
 '<div class="kiosk-reflection-section kiosk-reflection-next"><span class="overline">03 / NEXT STEPS · 下一步驗證</span><h3>從設計被採納，走向使用效果</h3><ul><li>到真實門市觀察顧客付款與求助情境。</li><li>邀請目標顧客測試第二輪套餐選項，確認誤選、停頓與切換是否改善。</li><li>若產品上線，追蹤付款求助次數、點餐完成率與時間，以及加購使用率與客單價。</li></ul></div>');
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
 return sec('overview','01 / PROJECT OVERVIEW','我做出了能運作的排課產品，然後學會重新判斷什麼值得先做',
  paragraph('這個個人專案源自一位皮拉提斯老師的真實困擾：每月約花 2–3 小時安排課表，學生再因臨時取消或改期而讓老師持續調整。她以 LINE 蒐集時間、用紙本安排課程，也需要在老師群組協調代課。這些條件讓排課不只是找空檔，更是持續協調與取捨的工作。')+
  '<div class="schedule-feature-quote"><span>INITIAL DESIGN QUESTION / 最初的設計提問</span><p>因此，我在第一版開發前，將問題整理成這個設計提問：</p><strong>如何尊重每位學生的時間偏好，兼顧分配公平與教學連續性，並讓老師高效率地完成每月排課？</strong></div>'+
  '<figure class="scenario-figure pilates-case-scenario"><img loading="eager" decoding="async" fetchpriority="high" width="2048" height="1536" src="./assets/pilates-scenario.webp" alt="皮拉提斯老師在教室內查看手機上的排課系統；合成使用情境示意，非訪談現場照片"><figcaption>使用情境示意（合成畫面）。</figcaption></figure>')+
 sec('research','02 / PROBLEM DISCOVERY','問題不只是排課耗時，而是如何兼顧不同人的限制',
  '<div class="schedule-problem-grid">'+point('TEACHER / 已知回饋','逐一協調，工作高度集中在老師身上','老師需要彙整不同學生的可上課時段，還要考慮原老師授課比例、課程間隔與代課協作；每月初排課約 2–3 小時，後續仍常有取消和異動。')+point('STUDENT / 老師轉述','先搶先得，不是受歡迎的解法','老師曾嘗試讓學生自行搶課，但她觀察到取消情況反而增加，因而回到由老師主導安排。')+'</div>'+
  '<h3>開工前的初始假設｜來源：1 位老師</h3>'+
  schedulingInsight('01','TEACHING CONTINUITY / 教學連續性','排課品質不只取決於完成堂數，更在於維持學生與主要老師的教學連續性。','老師重視學生持續由主要老師授課，因此排課規則需要兼顧授課連續性，而不只是盡可能排入最多堂數。','continuity','教學安排示意｜主要老師與代課老師交錯授課。')+
  schedulingInsight('02','DECISION AUTHORITY / 排課決策','排課涉及多重條件與例外取捨，無法完全自動化，仍需保留老師的最終決策權。','學生時段、課程間隔與授課老師可能互相衝突。系統提供草案及衝突資訊，再由老師完成取捨與調整。','authority','多條件排課示意｜草案仍需老師審核。')+
  schedulingInsight('03','CONTINUOUS COORDINATION / 持續協調','排課不是一次性的時間分配，而是伴隨請假、補課與代課需求持續變動的協調過程。','初次排出課表只是起點；後續異動需要重新安排老師與學生時間，並同步最新課程資訊。','changing','課表異動流程示意｜請假與補課會形成後續協調。')+
  '<p class="schedule-insight-disclaimer">這三點是我開工前根據與一位老師的溝通形成的假設。第 05 段會回頭檢驗它們。</p>'+'<div class="schedule-turn"><span>PRODUCT FRAMING / 問題重新定義</span><p>核心問題不是「如何讓學生更快搶到課」，而是<strong>「如何在有限時段內，公平地安排學生可接受的課程，同時讓老師能彈性調整整月課表」。</strong></p></div>')+
 sec('opportunity','03 / PRODUCT STRATEGY','產品策略：讓系統處理排課規則，老師保留調整權',
  paragraph('第一版要回答一個問題：<strong>誰來決定哪位學生上哪一堂課？</strong>我把這件事拆給三個角色，依序完成，每個角色只做自己最適合做的部分。')+
  '<div class="schedule-flow"><article><span>STEP 1 · 學生</span><h3>只交可接受時段，不用搶課</h3><dl><div><dt>做什麼</dt><dd>學生選出自己能上的日期與時段。只能星期二，就只排星期二。</dd></div><div><dt>為什麼</dt><dd>老師試過讓學生自己搶課，取消反而變多。可接受時段是限制條件，不是比誰手快。</dd></div></dl><div class="schedule-days schedule-days--mini" aria-label="學生只選星期二的示意"><i>一</i><i class="picked">二 ✓</i><i>三</i><i>四</i><i>五</i><i>六</i><i>日</i></div></article><article><span>STEP 2 · 系統</span><h3>依規則排出整月草案</h3><dl><div><dt>做什麼</dt><dd>自動檢查可上時段、剩餘堂數、課程間隔與時段衝突，產生整月課表草稿。</dd></div><div><dt>為什麼</dt><dd>這些是每月重複的條件判斷，正是老師花 2–3 小時在算的部分，最適合交給規則。</dd></div></dl></article><article><span>STEP 3 · 老師</span><h3>處理例外，確認後發布</h3><dl><div><dt>做什麼</dt><dd>檢查整體分配、手動調整，再確認並分享給學生。</dd></div><div><dt>為什麼</dt><dd>學生關係、主要老師授課比例等特殊安排，固定規則判斷不了，要保留給老師。</dd></div></dl></article></div><p class="schedule-flow-note">這個分工是根據一位老師工作情境做的設計假設；是否真的更省時、她是否願意這樣用，要在真實排課週期驗證（見 05）。</p>')+
 sec('highlights','04 / DESIGN & BUILD','設計與實作：從排課規則到跨角色協調','<p class="schedule-highlight-intro">第一版採用「學生填寫可接受時段 → 系統產生整月草案 → 老師審核與調整 → 確認分享」的流程。以下三項設計亮點呈現如何把老師的排課判斷、跨角色資訊與異動協調做成可操作的介面（展示資料）。</p>'+'<article class="hl-row hl-row--pil"><div class="hl-copy"><span class="solution-num">01 / FROM MENTAL MODEL TO SCHEDULING RULES</span><h3>把老師的排課判斷，變成看得懂的規則</h3><dl><div><dt>問題</dt><dd>除了學生可上課時段，還要兼顧剩餘堂數、課程間隔、授課比例與時段衝突；原先的取捨藏在老師經驗裡。</dd></div><div><dt>設計</dt><dd>把判斷拆成可調整的條件與優先順序，例如先涵蓋每位學生基本堂數，再分配剩餘課程。</dd></div><div><dt>互動</dt><dd>老師在設定頁檢視排課邏輯，系統產生草案後，透過「未填寫 → 已填 → 已分享」等狀態檢查與完成確認。</dd></div></dl><p class="hl-skills">UX Research × Domain Modeling × Rule-based Product Design</p></div><figure class="hl-clip"><div class="hl-clip-frame"><video autoplay muted loop playsinline preload="metadata" poster="./assets/pilates-hl-p1.jpg?v=2"><source src="./assets/pilates-hl-p1.mp4?v=2" type="video/mp4"></video></div><figcaption>開始排課 → 自動排課 → 確認並分享，在 LINE 選擇傳送對象，完成後顯示「已分享」</figcaption></figure></article><article class="hl-row hl-row--pil"><div class="hl-copy"><span class="solution-num">02 / SWITCHING BETWEEN STUDENT AND TEACHER VIEWS</span><h3>從個別學生切回老師整週課表</h3><dl><div><dt>問題</dt><dd>單看某位學生的可上課日期，難以判斷老師整週是否已排滿；只看老師週曆，又不易發現特定學生的限制。</dd></div><div><dt>設計</dt><dd>同一份排課資料提供個別學生月曆與老師整週課表兩種檢視層級，幫助老師在微觀與整體配置間切換。</dd></div><div><dt>互動</dt><dd>先搜尋學生、確認已排堂數與可上課時段；再開啟整週老師課表，檢查其他學生與時段占用。</dd></div></dl><p class="hl-skills">Information Architecture × Interaction Design</p></div><figure class="hl-clip"><div class="hl-clip-frame"><video autoplay muted loop playsinline preload="metadata" poster="./assets/pilates-hl-p2.jpg?v=2"><source src="./assets/pilates-hl-p2.mp4?v=2" type="video/mp4"></video></div><figcaption>展開學生的可上時段，再切到老師整週課表</figcaption></figure></article><article class="hl-row hl-row--pil"><div class="hl-copy"><span class="solution-num">03 / SUBSTITUTE & FREED-SLOT COORDINATION</span><h3>從被動找人，到整理能補位的學生</h3><dl><div><dt>問題</dt><dd>請假或代課發生時，老師需要再次核對哪些人有空、哪些課尚未安排，並在不同老師之間協調。</dd></div><div><dt>設計</dt><dd>將待代課安排整理為可搜尋、可分享的清單；時段釋出時，列出曾選擇該時段的學生供老師判斷。</dd></div><div><dt>互動</dt><dd>透過「代課總表」整理待協調課程並用 LINE 分享；空出時段後，老師可選擇學生執行補位，並非全自動通知。</dd></div></dl><p class="hl-skills">Workflow Design × Service Coordination</p></div><figure class="hl-clip hl-clip--shots"><div class="hl-shot-pair"><img loading="lazy" src="./assets/pilates-design-03a.webp" alt="代課總表與 LINE 分享功能"><img loading="lazy" src="./assets/pilates-design-03b.webp" alt="空出時段後顯示曾選擇該時間的學生清單"></div><figcaption>代課總表與請假補位畫面（截圖）</figcaption></figure></article>'+'<p class="schedule-highlight-note">畫面來源：第一版產品操作截圖；學生名稱為測試資料。</p><div class="schedule-live-demo" id="try-demo"><div class="schedule-live-copy"><span>TRY THE PRODUCT / 互動展示</span><h3>正式版流程，免 LINE 登入直接操作</h3><p>這是正式產品的程式與流程，只拿掉 LINE 登入，改用示範資料：10 位示範學生都已填好時段，可以直接體驗重點流程：「開始排課」→「查看填寫與排課」→「自動排課」，再點學生旁的「確認並分享」，用模擬的 LINE 分享畫面選擇要傳給哪個群組或學生。用手機上方的「老師端／學生端」可以切換視角。</p><a href="./pilates-demo/teacher/" target="_blank" rel="noopener">在新視窗開啟互動展示 ↗</a><small>不需登入 · LINE 分享為模擬畫面，不會真的傳送 · 重新整理即回到初始示範資料</small></div><div class="schedule-live-stage"><div class="pil-view-switch" role="tablist" aria-label="切換視角"><button type="button" role="tab" data-pil-view="teacher" aria-selected="true">👩‍🏫 老師端</button><button type="button" role="tab" data-pil-view="student" aria-selected="false">🙋‍♀️ 學生端</button></div><div class="schedule-live-frame"><iframe data-pil-frame="teacher" src="./pilates-demo/teacher/" title="皮拉提斯排課系統老師端互動展示" loading="lazy"></iframe><iframe data-pil-frame="student" data-src="./pilates-demo/?t=t1" title="皮拉提斯排課系統學生端互動展示" hidden></iframe></div></div></div>')+
 sec('reflection','05 / OUTCOME & REFLECTION','關鍵轉折：系統能排出課表，老師卻不願意導入',
  '<div class="schedule-adoption-turn"><span>THE TURNING POINT / 第一次向老師展示</span><h3>能完成排課，不代表老師願意換一套工作方式。</h3><p>我獨立完成需求整理、介面設計、規則建立與 AI 輔助開發，第一版已能產生可檢查、可修改的課表。然而老師雖然認同概念的潛在價值，目前仍不願將它導入實際工作。這讓我發現，先前驗證的是「能不能排」，還不是「值不值得用」。</p></div>'+
  '<blockquote class="schedule-quote"><span>受訪者原句｜老師看完 Demo 後</span><p>「感覺是真的還不錯欸，但真的變因太多了，我要一個一個教學生嗎？」</p></blockquote><div class="schedule-hypo-check"><span>HYPOTHESIS CHECK / 回頭檢驗開工前的假設</span><h3>三個假設都成立，真正被推翻的是我沒寫下來的那一個</h3><table><thead><tr><th>假設</th><th>Demo 後</th><th>依據</th></tr></thead><tbody><tr><th scope="row"><span>01</span>教學連續性</th><td><em class="hc-ok">成立</em></td><td>她仍在意學生由主要老師授課，代課只是例外。</td></tr><tr><th scope="row"><span>02</span>保留老師決策權</th><td><em class="hc-ok">成立</em></td><td>「變因太多」說明規則無法涵蓋所有例外，最後仍要老師判斷。</td></tr><tr><th scope="row"><span>03</span>持續協調</th><td><em class="hc-up">成立，而且被低估</em></td><td>第一版主要解決「初次排課」，但日常負擔其實在請假、補課與代課。</td></tr><tr><th scope="row"><span>隱藏</span>老師最想要排得更快</th><td><em class="hc-no">被推翻</em></td><td>她擔心的不是排課速度，而是要一個一個教學生用新工具、異動由誰維護。</td></tr></tbody></table><p>前三點來自 02 段的初始假設。真正讓產品卡住的，是我預設「省時間」就是老師最在意的價值，卻沒有先驗證。</p></div>'+
  '<div class="schedule-reframe schedule-reframe--turn"><span>PRODUCT REFRAMING / 下一階段方向</span><h3>從提高自動化程度，轉向降低導入成本</h3><p>我決定先保留核心排課規則與人工調整能力，重新設計資訊收集及異動入口：以老師與學生熟悉的 LINE 作為主要接觸點，減少學習新工具與切換流程的負擔。這是下一版 LINE Bot 的服務流程與規則規劃，<strong>尚未完成實作或實際採用驗證</strong>。</p></div>'+
  '<div class="schedule-next-check"><span>NEXT VALIDATION / 尚待驗證</span><h3>先證明願意用，再衡量省下多少時間</h3><p>需求目前只來自一位老師，所以下一步不是先做 LINE Bot，而是先找更多老師確認「導入與維護成本」是否是共通阻力；確認後，再在真實排課週期觀察老師是否願意持續使用、臨時異動是否更容易處理，並量測每月排課時間能否由原本約 2–3 小時降低至 1 小時內。示範資料中的 40／40 堂成功排入，不能代替這些使用成效。</p></div>'+
  '<div class="schedule-repo"><div><span>WORKING PRODUCT / SOURCE</span><strong>從概念到可操作的第一版</strong><p>原型程式碼與介面實作可供檢視；LINE Bot 仍在規劃階段。</p></div><a href="'+repoURL+'" target="_blank" rel="noopener">Explore GitHub ↗</a></div>');

}
function kdsBody(){
 return sec("overview","01 / CONTEXT","從工程師 Demo 到可交付的 KDS：先釐清廚房真正需要什麼","\n<div class=\"role-split\"><div><span>TEAM PROJECT / 團隊專案（02–04）</span><strong>我負責研究與 UI 檢視</strong><p>整理歷史研究與客戶回饋、競品分析、LA PASTA 現場訪談；提出 5 項 UI 建議，全數被採納。正式介面由另一位 UX 主責。</p></div><div><span>PERSONAL EXTENSION / 個人延伸（05）</span><strong>我獨立設計的品項視角</strong><p>在專案之外，把「批次製餐」的研究洞察延伸成訂單／品項雙視角與批次規則，並做成可操作的展示。</p></div></div>\n<p>因為有客戶表達購買 KDS 的意願，公司決定將工程師依自身理解開發的初步 Demo 推進為正式產品。原型已可呈現並處理訂單，但仍有<strong>長餐名截斷、跑馬燈閱讀負擔、誤完成後難以找回、油污環境觸控不便</strong>等問題。因此需要先釐清第一階段的功能範圍與真實廚房流程，支持團隊把 Demo 轉成可交付的產品。</p>\n<figure class=\"scenario-figure kds-case-scenario\"><img loading=\"lazy\" src=\"./kds-case-hero.png\" alt=\"KDS 廚房作業情境示意\"><figcaption>廚房使用情境示意。</figcaption></figure>\n")+
sec("research","02 / DISCOVERY","有限樣本下，如何做出有依據的下一版 KDS 設計決策？","\n<p>為回答這個挑戰，我結合<strong>第一代使用者回饋、歷史研究資料、競品比較與現場觀察</strong>，從不同來源交叉理解製餐工作與功能需求。只有 LA PASTA 一家店願意接受實地訪談，所以現場資料主要用來補充作業脈絡。</p>\n<p class=\"kds-research-method-summary\"><strong>研究來源：</strong>第一代客戶回饋與介面走查、歷史訪談和廚房單、競品比較，以及 LA PASTA 的現場訪查。現場樣本有限，因此以多種資料交叉理解，不將單一店家的作法視為通則。</p>\n<div class=\"kds-competitor-analysis\">\n<h3>競品分析｜Competitive Analysis</h3>\n<p>這次以<strong>自家產品「專加科技第一代 KDS」</strong>為現況基準，對照<strong>Eats365</strong>與<strong>微碧（Weiby）</strong>，比較訂單分組、排序、資訊辨識、異動通知與出餐狀態。研究目的同時是找出缺少的基本功能、比較可行互動方式，協助團隊討論下一版取捨。</p>\n<div class=\"kds-research-turn\"><strong>主要分析結論：</strong>KDS 不只是顯示訂單，而是幫助內場在高壓環境快速完成「分組、排序、辨識」決策，並讓重要異動與出餐狀態及時被發現。</div>\n<div class=\"kds-competitor-findings\">\n<article><span>01 / GROUPING</span><h4>查看視角：以適合工作的單位分組</h4><p>常見依單號或桌號整理訂單；Eats365 另提供商品類別分組與總單視角，讓內場能聚焦同類商品的批次製作。分組方式不是單純換畫面，而是對應不同工作單位。</p></article>\n<article><span>02 / SORTING</span><h4>製作順序：兼顧效率與等待公平</h4><p>排序可能依單號、桌號、下單時間與等待時長切換。Eats365 提供菜單順序；微碧則有取餐時間相關排序與預訂單處理，協助內場判斷合適的製作時機。</p></article>\n<article><span>03 / READABILITY</span><h4>資訊辨識：穩定閱讀比選項多更重要</h4><p>專加第一代在欄位或字級組合不當時，長餐名容易被截斷。Eats365 採相對固定的版型與預設視角，提供另一種設計取捨：減少配置自由度，以維持資訊完整與閱讀舒適。</p></article>\n<article><span>04 / ALERTS & STATUS</span><h4>異動與出餐：讓狀態不只停在廚房</h4><p>Eats365 對退單提供音效，修改訂單後也會標示變更內容，降低內場重新比對負擔。兩家競品皆呈現製餐／出餐的進度管理；微碧還將部分狀態延伸到點餐流程。</p></article>\n</div>\n\n<a class=\"kds-compare-button\" href=\"./kds-function-comparison.webp\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"開啟完整 KDS 競品功能比較圖\">查看完整競品功能比較 <span aria-hidden=\"true\">↗</span></a>\n</div>\n")+
sec("user-analysis","03 / USER ANALYSIS","廚房如何批次製餐、接收異動並安排出餐順序？","\n<p>以<strong>歷史廚房單及既有需求</strong>建立初步理解，再透過 LA PASTA 的<strong>內、外場兩位受訪者</strong>與一次現場脈絡訪查，釐清資訊如何在真實製餐情境中流動。以下三項 Insight 是結合不同證據來源的研究歸納。</p>\n<div class=\"kds-user-metrics\"><div><strong>歷史資料</strong><span>廚房單與既有需求</span></div><div><strong>2 位</strong><span>LA PASTA 內、外場受訪者</span></div><div><strong>1 次</strong><span>現場脈絡訪查</span></div></div>\n<h3>使用者訪談與現場觀察｜Field Study</h3>\n\n<div class=\"kds-field-site\"><img loading=\"lazy\" src=\"./la-pasta-logo.svg\" alt=\"LA PASTA 餐廳 Logo\"><div><span>FIELD STUDY / 實地研究對象</span><strong>LA PASTA</strong><p>本次實地訪談與觀察對象，涵蓋內、外場作業脈絡。</p></div></div>\n<h3>三個主要洞察｜Key Insights</h3>\n\n<div class=\"kds-user-insights\">\n<article class=\"insight-feature kds-insight-feature\"><div class=\"insight-feature-copy\"><span class=\"insight-feature-kicker\"><em class=\"insight-number\">01</em><span>BATCH PREPARATION / 批次製餐</span></span><h4>內場依相同製作流程批次製餐，而不是逐張訂單處理</h4><p>內場會先確認多筆訂單中的同類商品數量，再集中取料與製作。當冰櫃和烹飪位置有距離，批次備料能減少往返。這表示廚房的工作單位不一定是「整張訂單」，也可能是可共同製作的「一批商品」。</p></div><figure class=\"kds-insight-figure\"><div class=\"kds-mini-flow\"><div><small>訂單 01</small><strong>餐點 A × 2</strong></div><div><small>訂單 02</small><strong>餐點 A × 1</strong></div><span class=\"kds-mini-arrow\">↓</span><div class=\"kds-mini-highlight\"><small>相同製程集中查看</small><strong>餐點 A × 3</strong></div></div><figcaption>製餐分組情境示意｜批次思考方式。</figcaption></figure></article>\n<figure class=\"kds-insight-context voice-paraphrase\"><span>WORKING CONTEXT / 研究紀錄整理</span><p class=\"voice-text\">冰櫃與烹飪位置相隔一段距離，內場會先看同類餐點的總需求量，再一次拿取所需食材。</p></figure>\n<article class=\"insight-feature kds-insight-feature\"><div class=\"insight-feature-copy\"><span class=\"insight-feature-kicker\"><em class=\"insight-number\">02</em><span>INTERRUPTED ATTENTION / 間歇掃視</span></span><h4>內場以間歇掃視接收資訊，重要異動不能只靠畫面更新</h4><p>製餐者主要注意力在備料與烹調，無法持續盯著 KDS。當退單或修改發生時，若需要反覆回頭確認畫面，便會增加錯過異動的風險。手部接觸食材與油污，也使頻繁觸控操作不便。</p></div><figure class=\"kds-insight-figure\"><div class=\"kds-attention-flow\"><div><b>製餐中</b><span>注意力在餐點</span></div><div class=\"kds-attention-alert\"><b>訂單異動</b><span>需要被主動察覺</span></div><div><b>回看螢幕</b><span>調整製餐工作</span></div></div><figcaption>資訊接收節奏示意｜間歇掃視。</figcaption></figure></article>\n<figure class=\"kds-insight-context voice-paraphrase\"><span>WORKING CONTEXT / 客戶回饋整理</span><p class=\"voice-text\">內場無法一直看著螢幕；退單或修改如果能有提醒聲，就比較有機會及時調整製餐。</p></figure>\n<article class=\"insight-feature kds-insight-feature\"><div class=\"insight-feature-copy\"><span class=\"insight-feature-kicker\"><em class=\"insight-number\">03</em><span>EFFICIENCY & FAIRNESS / 效率與等待</span></span><h4>出餐順序同時受到製作效率與顧客等待時間影響</h4><p>同製程商品聚合能提高備餐效率，卻不代表所有相同商品都應排成一批。當來源訂單的進單時間相差很大，只看合計數量會掩蓋先後順序。內場需要兼顧批次製作與辨識哪些訂單已等待較久。</p></div><figure class=\"kds-insight-figure\"><div class=\"kds-time-flow\"><div><small>較早進單</small><strong>12:00</strong><span>餐點 A</span></div><div><small>接續進單</small><strong>12:03</strong><span>餐點 A</span></div><div class=\"kds-time-later\"><small>較晚進單</small><strong>12:18</strong><span>餐點 A</span></div></div><figcaption>進單時間差示意（示例時間）。</figcaption></figure></article>\n</div>\n")+
sec("opportunity","04 / PRODUCT DECISIONS","團隊專案｜把研究轉成可執行的設計方向","\n<p>本次 MVP 先聚焦「製餐資訊理解、誤操作排除、批次製餐」三項核心需求；團隊根據既有痛點與競品比較，納入資訊可讀性、異動提醒、訂單找回、視角同步與減少觸控等改善方向。研究建議進入產品規劃，並已推進至開發與交付前準備。<strong>正式介面主要由另一位 UX 設計師負責；我提供研究依據、參與功能範圍討論，並提出上述五項 UI 檢視建議。</strong></p>\n\n<h3>從研究洞察到 MVP 交付範圍</h3>\n<p>本次研究將需求歸納為三個工作挑戰：<strong>辨識資訊與避免誤操作、支援批次製餐、讓關鍵異動被注意到</strong>。考量新版第一階段的開發範圍，團隊先收斂為兩項 MVP 交付目標；其餘需求則分層保留，並不代表已決定開發。</p>\n<div class=\"kds-scope-heading\"><div><span>PHASED DELIVERY / 分階段交付</span><h3>巢狀圓呈現分階段交付目標</h3><p>越靠中心越早規劃，<strong>不是功能的重要程度排序</strong>。本次只處理中心 MVP，其餘兩圈是後續可能擴充的方向。</p></div></div>\n<div class=\"kds-scope-layout\"><div class=\"kds-scope-rings\" role=\"img\" aria-label=\"KDS 三層底部相切的巢狀圓：中心第一階段 MVP 為製餐資訊理解與誤操作排除及支援批次製餐；中圈後續初階管理為依門店流程設定製餐規則；外圈未來方向為網路環境異常的應對。\"><div class=\"kds-scope-outer\"><span>03 / FUTURE</span><strong>網路異常應對</strong></div><div class=\"kds-scope-middle\"><span>02 / LATER</span><strong>門店製餐規則</strong></div><div class=\"kds-scope-center\"><span>01 / THIS MVP</span><strong>製餐資訊理解<br>與誤操作排除</strong><strong>支援批次製餐</strong></div></div><div class=\"kds-scope-legend\"><div><span class=\"kds-scope-dot kds-scope-dot--now\"></span><div><small>01 / 本次新版第一階段 MVP</small><strong>製餐核心任務</strong><p>先處理資訊辨識、誤操作風險與批次製作的基本需求。此處表示<strong>規劃範圍</strong>，不是已開發上線。</p></div></div><div><span class=\"kds-scope-dot kds-scope-dot--later\"></span><div><small>02 / 後續初階管理</small><strong>可依門店流程設定製餐規則</strong><p>第二階段可探索依品項設定單批製作數量上限（示例：3 份），以及依訂單時間差決定是否切分批次（示例：10 分鐘）。這些數值為設計舉例，並非已確認的預設規則或本次 MVP 交付。</p></div></div><div><span class=\"kds-scope-dot kds-scope-dot--future\"></span><div><small>03 / 未來系統韌性</small><strong>網路環境異常的應對</strong><p>屬長期延伸方向，並非目前 MVP 範圍。</p></div></div></div></div>\n<p class=\"kds-decision-bridge\">研究指出資訊辨識、誤操作找回與批次製餐是優先工作需求。以下直接呈現我在 UI 檢視中提出、並獲團隊採納的五項建議；各項設計以研究發現為依據，並非已量測的上線成效。</p>\n<div class=\"kds-proactive-story\"><span>PROACTIVE DESIGN REVIEW / 主動介入設計檢視</span><h3>當 UI 設計偏離使用情境，我主動提出修正</h3><p>專案進行期間，我發現初版設計的資訊層級與操作安排，部分未能回應研究中廚房需要快速掃視、辨識狀態的情境。因此我主動檢視畫面，提出五項具體改善建議，並與負責正式介面的 UX 設計師討論修正。</p><p><strong>結果：</strong>五項建議均獲團隊採納，由正式介面設計師調整新版設計稿；此為設計修正成果，尚非上線後的使用成效。</p></div>\n\n<div class=\"kds-map\"><div class=\"kds-map-row\"><figure class=\"kds-map-fig\"><span class=\"kds-compare-label\">BEFORE / 舊版｜五個問題點</span><a class=\"kds-map-img\" href=\"./kds-ui-before.png\" target=\"_blank\" rel=\"noopener noreferrer\"><img loading=\"lazy\" src=\"./kds-ui-before.png\" alt=\"KDS 舊版白底介面，標出五個問題點\"><i class=\"kds-box\" data-n=\"1\" style=\"left:18.83%;top:1.38%;width:31.57%;height:5.66%\"><b>1</b></i><i class=\"kds-box kds-box--side\" data-n=\"2\" style=\"left:23.82%;top:22.95%;width:8.32%;height:5.20%\"><b>2</b></i><i class=\"kds-box\" data-n=\"2\" style=\"left:1.15%;top:95.79%;width:37.89%;height:3.83%\"></i><i class=\"kds-box\" data-n=\"3\" style=\"left:34.79%;top:29.30%;width:30.31%;height:11.63%\"><b>3</b></i><i class=\"kds-box\" data-n=\"3\" style=\"left:2.30%;top:51.72%;width:29.39%;height:5.66%\"></i><i class=\"kds-box\" data-n=\"4\" style=\"left:1.26%;top:13.93%;width:32.49%;height:6.12%\"><b>4</b></i><i class=\"kds-box\" data-n=\"4\" style=\"left:0.00%;top:8.57%;width:100.00%;height:4.59%\"></i><i class=\"kds-box\" data-n=\"5\" style=\"left:2.18%;top:34.81%;width:30.08%;height:16.22%\"><b>5</b></i></a></figure><ol class=\"kds-map-list\"><li data-n=\"1\"><b aria-hidden=\"true\">1</b><div><span>01 / SPACE ALLOCATION</span><strong>縮減低頻站點切換的空間</strong><p>站點通常不會頻繁更動，卻占據較大的頂部區域；建議將空間留給製餐核心資訊。</p></div></li><li data-n=\"2\"><b aria-hidden=\"true\">2</b><div><span>02 / WAITING TIME</span><strong>簡化等候時間的色彩</strong><p>等待時間可考慮先以兩種顏色區分，減少判讀負擔。</p></div></li><li data-n=\"3\"><b aria-hidden=\"true\">3</b><div><span>03 / VISUAL PRIORITY</span><strong>降低紅、橘警示色的使用頻率</strong><p>畫線、已取消、移除顯示等多處都使用警示色，容易分散視覺重心。</p></div></li><li data-n=\"4\"><b aria-hidden=\"true\">4</b><div><span>04 / INFORMATION DENSITY</span><strong>檢視非必要與重複資訊</strong><p>重新評估待排入數量、製餐區數量，以及已有文字說明的圖示，是否都需要在主畫面呈現。</p></div></li><li data-n=\"5\"><b aria-hidden=\"true\">5</b><div><span>05 / NOTE USABILITY</span><strong>備註以易用性優先</strong><p>備註使用率較低，但有使用需求時仍需易於辨識與操作；不應只為視覺美觀犧牲可用性。</p></div></li></ol></div><figure class=\"kds-map-fig kds-map-after\"><span class=\"kds-compare-label\">AFTER / 新版</span><a class=\"kds-map-img\" href=\"./kds-ui-after.png?v=6\" target=\"_blank\" rel=\"noopener noreferrer\"><img loading=\"lazy\" src=\"./kds-ui-after.png?v=6\" alt=\"KDS 新版深色介面\"></a><figcaption>新版畫面｜點擊圖片可放大檢視。</figcaption></figure></div>\n")+
sec("solutions","05 / INDEPENDENT EXPLORATION","個人延伸｜在 MVP 之後探索更符合製餐節奏的品項視角","\n<p>在正式專案之外，我進一步思考：<strong>外場以訂單追蹤出餐，內場卻可能以商品與製作流程安排工作。</strong>如果只是將所有相同商品無限聚合，反而會忽略不同顧客的下單時間，以及廚房一次能做的數量。</p>\n<article class=\"hl-row hl-row--kds\"><div class=\"hl-copy\"><span class=\"solution-num\">01 / ORDER ↔ ITEM VIEW</span><h3>在訂單與品項之間切換製餐視角</h3><p>外場以訂單追蹤出餐，內場卻常以品項安排工作。訂單視角追蹤每張單的完成狀態；切到分類或品項視角，會跨訂單彙整同一品項的總量，一次做一批，同時保留每一份對應的原始訂單。</p><p>品項先打勾、再按「批次完成」送出，避免一次點錯就讓整批消失。</p></div><figure class=\"hl-clip\"><div class=\"hl-clip-frame\"><video autoplay muted loop playsinline preload=\"metadata\" poster=\"./assets/kds-hl-views.jpg?v=3\" aria-label=\"KDS 訂單、分類、品項三種視角切換錄影\"><source src=\"./assets/kds-hl-views.mp4?v=3\" type=\"video/mp4\"></video></div><figcaption>訂單視角勾選送出，再切到分類與品項視角</figcaption></figure></article><article class=\"hl-row hl-row--kds\"><div class=\"hl-copy\"><span class=\"solution-num\">02 / INFORMATION AWARENESS</span><h3>重要異動留下可辨識的狀態痕跡</h3><p>內場多半是間歇看一眼螢幕。前台取消的品項不會直接消失，而是以醒目底色與刪除線留在原位，廚師確認後才移除，避免已經開始做的餐點「憑空不見」。</p></div><figure class=\"hl-clip\"><div class=\"hl-clip-frame\"><video autoplay muted loop playsinline preload=\"metadata\" poster=\"./assets/kds-hl-alert.jpg?v=3\" aria-label=\"KDS 取消品項提示與確認錄影\"><source src=\"./assets/kds-hl-alert.mp4?v=3\" type=\"video/mp4\"></video></div><figcaption>取消的品項留在原位，按下確認後才移除</figcaption></figure></article><article class=\"hl-row hl-row--kds\"><div class=\"hl-copy\"><span class=\"solution-num\">03 / ERROR RECOVERY</span><h3>誤觸後可找回餐點，重新銜接製餐任務</h3><p>高壓環境難免誤完成。整張單勾完會自動移到「已出餐」；若是誤觸，可以在已出餐整單復原或單品退回重做。找回的品項以藍色標示，讓廚師知道這是剛回來的任務。</p></div><figure class=\"hl-clip\"><div class=\"hl-clip-frame\"><video autoplay muted loop playsinline preload=\"metadata\" poster=\"./assets/kds-hl-recover.jpg?v=3\" aria-label=\"KDS 已出餐整單復原錄影\"><source src=\"./assets/kds-hl-recover.mp4?v=3\" type=\"video/mp4\"></video></div><figcaption>整單完成移到已出餐，復原後以藍色回到製餐中</figcaption></figure></article><div class=\"kiosk-live-demo kds-live-demo\" id=\"try-demo\"><div class=\"kiosk-live-copy\"><span>TRY THE PROTOTYPE / 互動展示</span><h3>直接操作廚房出餐看板</h3><p>以個人補充設計的 Figma 畫面重建的可操作展示：依訂單、依分類、依品項三種檢視，點品項打勾、按「批次完成」送出已勾選的品項，整單完成自動移到已出餐並可回復，已出餐退回重做，預定單自動排入，以及等待時間顏色標註與設定。訂單為模擬資料，進單中時會定時模擬新訂單；部分互動細節為展示需要補充。</p><a href=\"./kds-demo/index.html\" target=\"_blank\" rel=\"noopener\">在新視窗開啟互動展示 ↗</a><small>不連接真實系統 · 點品項打勾，按「批次完成」送出 · 建議以桌機或平板觀看</small></div><div class=\"kiosk-live-frame kds-live-frame\"><iframe src=\"./kds-demo/index.html\" title=\"廚房出餐看板（KDS）互動展示\" loading=\"lazy\"></iframe></div></div>\n<div class=\"kds-design-phase-two\"><span>PHASE 02 / 後續規劃，非本次 MVP</span><h3>依產能與進單時間決定製作批次</h3><p>後續可探索針對不同品項設定單批製作上限，以及依訂單時間差切分批次。以下以每批最多 3 份、相隔 10 分鐘切批為介面範例。</p><div class=\"validation-plan\"><span>HOW I WOULD VALIDATE IT / 低成本驗證方法</span><ol><li>取一家店一個尖峰時段的歷史訂單。</li><li>用三種規則模擬出餐：逐單製作、同品項無限聚合、3 份／10 分鐘切批。</li><li>比較「最久等待時間」與「需要製作的批次數」，看切批規則是否在不明顯增加等待的前提下減少批次。</li><li>把模擬結果拿給內場人員看，確認數值是否符合實際的鍋具容量與節奏。</li></ol></div><figure class=\"kds-shot\"><a href=\"./kds-design-phase-two.png?v=6\" target=\"_blank\" rel=\"noopener noreferrer\"><img loading=\"lazy\" src=\"./kds-design-phase-two.png?v=6\" alt=\"KDS 第二階段依時間與品項上限拆分批次的設計示例\"></a><figcaption>第二階段設計示例｜以可設定的容量與時間限制輔助決定單次製餐範圍。</figcaption></figure></div>\n\n")+
sec("reflection","06 / OUTCOME & REFLECTION","從市場基本功能，到理解製餐現場的限制","\n<div class=\"kds-evidence-columns\"><div><h3>正式專案目前能說的成果</h3><ul><li>競品、歷史研究與現場訪談共同支援新版 MVP 的功能取捨，產品已推進至準備交付顧客的階段。</li><li>提出五項資訊層級與操作相關的 UI 建議，獲團隊採納並調整設計稿。</li><li>辨識 LA PASTA 內外場協作與產能／時機限制，作為後續設計參考。</li></ul></div><div><h3>仍需驗證的部分</h3><ul><li>下一版功能是否真能降低誤銷或加速辨識。</li><li>不同店態是否需要相同的視角切換與控菜機制。</li><li>個人提出的 10 分鐘分批、單商品產能與批次完成是否適用（驗證方法見 05）。</li></ul></div></div>\n<p>這次讓我理解，競品分析能幫團隊建立市場基本面，但無法單獨解釋使用者為什麼需要某個功能。只有將它與歷史反饋及現場工作邏輯結合，設計才不會停留在功能清單。</p>\n<p>我在正式專案裡學會透過研究與設計師討論資訊層級；在個人延伸中，練習將<strong>訂單與商品視角、製餐產能、時間公平性</strong>整合成可操作的介面概念。未來若有更多店態與驗證機會，才能再確認哪些規則值得產品化。</p>\n<div class=\"kds-reflection-bottom\"><strong>NEXT QUESTION ↗</strong><p>當廚房和外場的工作節奏不同時，哪些步驟適合自動化，哪些決策仍應保留給現場人員？</p></div>\n");
}
const bodyMap={kiosk:kioskBody,scheduling:schedulingBody,kds:kdsBody};
const toc={kiosk:['Overview','Research Approach','Product Decisions','Design & Validation','Outcome'],scheduling:['Overview','Problem Discovery','Product Strategy','Design & Build','Reflection'],kds:['Context','Discovery','User Analysis','Product Decisions','Independent Design','Reflection']};
function caseSnapshot(p){if(p.id==='kds')return '<div class="case-overview-intro case-project-meta"><span>廚房顯示系統 · 團隊專案＋個人延伸</span></div><div class="case-snapshot case-tldr"><div><span>PROBLEM / 問題</span><p>工程師依自己理解做的 KDS Demo 要變成可交付的正式產品，但團隊不清楚廚房實際怎麼工作、第一階段該做什麼。</p></div><div><span>MY ROLE / 我的角色</span><p><b>團隊專案：</b>負責研究整理、競品分析、現場訪談與 UI 檢視；正式介面由另一位 UX 主責。<b>個人延伸：</b>獨立設計「品項視角」與批次規則，並做成可操作展示。</p></div><div><span>KEY DECISION / 關鍵決策</span><p>MVP 只做兩件事：「製餐資訊看得懂、誤操作能找回」與「支援批次製餐」；聲音提醒、門店規則等往後放。</p></div><div><span>OUTCOME / 成果</span><p>提出的 5 項 UI 建議全數被採納並反映在新版設計稿；產品推進到交付前準備。個人延伸設計尚未經驗證。</p></div></div>';if(p.id==='scheduling')return '<div class="case-overview-intro case-project-meta"><span>皮拉提斯課程排課系統 · 2026 · 個人專案</span></div><div class="case-snapshot case-tldr"><div><span>PROBLEM / 問題</span><p>一位皮拉提斯老師每月花 2–3 小時排課，學生取消、改期後又要一再重排；改用學生自己搶課，取消反而變多。</p></div><div><span>MY ROLE / 我的角色</span><p>獨立完成需求定義、排課規則、UX/UI 與 AI 輔助開發，做出在 LINE 裡就能用的排課系統（Next.js＋Supabase＋LINE LIFF）。</p></div><div><span>KEY DECISION / 關鍵決策</span><p>不做先搶先得，改成「學生交可接受時段 → 系統出整月草案 → 老師定案」，把老師的判斷保留在最後一步。</p></div><div><span>OUTCOME / 成果與轉折</span><p>示範資料下 10 位學生、每人 4 堂，一次排入 40／40 堂。但 Demo 後發現真正的阻力是導入成本——我學到應該先驗證共通需求，再擴充功能。</p></div></div>';return '<div class="case-overview-intro case-project-meta"><span>次世代自助點餐機 · 公司專案</span></div><div class="case-snapshot case-tldr"><div><span>PROBLEM / 問題</span><p>既有 KIOSK 銷售不如預期，公司要推出點餐＋付款整合的新機台，但不確定軟體該改什麼、先改什麼。</p></div><div><span>MY ROLE / 我的角色</span><p>負責消費者端流程與介面設計，參與市場盤點、競品分析、7 位店家管理者訪談與 6 人原型測試；「付款設備位置引導」由我獨立提出。</p></div><div><span>KEY DECISION / 關鍵決策</span><p>以店家轉述的使用者問題為主軸、用競品普及度加權、用開發可行性把關，把 12 個方向收斂成優先建議，不做功能清單。</p></div><div><span>OUTCOME / 成果</span><p>12 項建議中有 9 項被採納，包含我提出的付款位置引導；原型測試中付款是最順的環節，套餐選項的理解問題則推動第二輪的四種版型。</p></div></div>';}
const caseLimits={kiosk:'<details class="limits-box"><summary>這次的限制，以及我會怎麼補</summary><ul><li><b>沒有直接訪談消費者，需求來自 7 位店家管理者轉述</b><span>上線後到門市觀察顧客操作，並追蹤付款求助次數。文中「店家轉述」是整理後的摘要，只有「受訪者原句」是逐字引言。</span></li><li><b>原型只測了 6 位公司同事，第二輪設計未再測試</b><span>找真實顧客做第二輪測試，比較套餐選項的停頓與操作錯誤。</span></li><li><b>市場盤點是 40 間店的探索性樣本</b><span>用業務端的導入與成交資料，驗證優先店型是否成立。</span></li><li><b>「已採納」不等於已上線</b><span>上線後追蹤付款完成率、操作時間與店員介入次數。</span></li></ul></details>',scheduling:'<details class="limits-box"><summary>這次的限制，以及我會怎麼補</summary><ul><li><b>需求只來自 1 位老師</b><span>訪談 5 位不同規模的老師，確認排課耗時是不是共通痛點。</span></li><li><b>只用示範資料做功能測試，老師還沒實際使用</b><span>用一個月的真實排課，量測人工調整堂數與定案時間。</span></li><li><b>省時、公平性、取消率與每月 120 堂目標都還沒驗證</b><span>列為導入後的追蹤指標。</span></li></ul></details>',kds:'<details class="limits-box"><summary>這次的限制，以及我會怎麼補</summary><ul><li><b>現場研究只有 1 家餐廳、2 位受訪者</b><span>補訪不同店型（速食、飲料、套餐）的內場。文中「工作脈絡摘要」是整理內容，不是逐字引言。</span></li><li><b>新版還沒有上線後的使用數據</b><span>追蹤誤銷找回次數與出餐辨識時間。</span></li><li><b>個人延伸的批次規則（3 份、10 分鐘）未經驗證</b><span>先用歷史訂單模擬，方法見第 05 段。</span></li></ul></details>'};
function casePage(p){const next=projects[(projects.indexOf(p)+1)%projects.length];const anchors=p.id==='kds'?['overview','research','user-analysis','opportunity','solutions','reflection']:p.id==='kiosk'?['overview','research','solutions','validation','reflection']:['overview','research','opportunity','highlights','reflection'];const banner='';return '<div class="wrap"><section class="case-top'+(p.id==='kiosk'?' kiosk-cover':p.id==='kds'?' kds-cover':' scheduling-cover')+'"><a href="#/work" class="back-link">← BACK TO SELECTED WORK</a><div class="case-title-row"><h1>'+p.title+'<span class="orange">.</span></h1><time class="case-cover-date" datetime="'+(p.id==='kiosk'?'2025-11':p.id==='kds'?'2026-06':'2026')+'">'+(p.id==='kiosk'?'2025.11 — 2026.04':p.id==='kds'?'2026.06 — 2026.07':p.year)+'</time></div><p class="case-deck">'+(p.id==='kiosk'?'用研究幫新一代 KIOSK 決定先改什麼：從店家訪談到被採納的付款引導設計。':p.summary)+'</p><a class="try-demo-cta" href="#try-demo">查看互動展示 <span aria-hidden="true">↓</span></a>'+caseSnapshot(p)+'</section>'+banner+'<div class="case-layout"><aside class="side-index">'+toc[p.id].map((t,i)=>'<a href="#'+anchors[i]+'"><b>0'+(i+1)+'</b>'+t+'</a>').join('')+'</aside><article class="case-article">'+bodyMap[p.id]()+ (p.id==='kiosk'?'':caseLimits[p.id])+'</article></div><a class="next-case" href="#/case/'+next.id+'"><div><small>NEXT CASE STUDY →</small><h2>'+next.title+'</h2></div><span>↗</span></a></div>';}
function aboutPage(){return '<div class="wrap"><section class="case-top"><a class="back-link" href="#/">← HOME</a><div class="eyebrow" style="margin-top:75px">THE PERSON BEHIND THE WORK</div><h1>Curious.<br>Thoughtful.<br><span class="orange">Hands-on.</span></h1><p class="case-deck">工業設計背景的產品設計師，正往產品經理發展。我在意的不只是畫面，而是「這個問題值不值得解、要先解哪一塊」，並用研究與可運作的原型把答案驗證出來。</p></section></div>'+aboutSection()+'<section class="dark-band"><div class="wrap"><div class="eyebrow">LET’S CONNECT</div><h2>Have a product problem worth solving?</h2><p>歡迎交流產品經理、產品設計與 0→1 的機會。</p><a href="mailto:chi861008@gmail.com">Say hello ↗</a></div></section>';}
// English home/about use the exact current Chinese markup. Only copy changes:
// imagery, signatures, scroll scenes and future layout edits stay identical.
const englishSharedText=[
 ['我是產品設計師，正往產品經理發展。擅長把模糊的業務問題拆成可以驗證的假設，再用研究、設計與可運作的原型，幫團隊做出取捨。','I am a product designer moving into product management. I break ambiguous business problems into testable assumptions, then use research, design, and working prototypes to help teams make trade-offs.'],
 ['過去曾參與餐飲 POS、自助點餐機、雲端報表及廚房顯示系統等產品。工作之外，我也喜歡從生活中的真實問題發起 Side Project，讓研究、設計與開發不只停留在工作中，也能實際應用於日常生活。','I have worked on restaurant POS systems, self-ordering kiosks, cloud reporting tools, and kitchen display systems. Beyond work, I start side projects inspired by everyday problems, putting research, design, and development into practice in daily life.'],
 ['三個代表性的產品案例：從 0→1 建立產品，到研究支持的設計決策與場域驗證。','Three selected cases: building a product from zero, making research-informed design decisions, and validating ideas in context.'],
 ['皮拉提斯排課系統','Pilates Scheduling System'],
 ['次世代自助點餐機','Next-generation Self-ordering Kiosk'],
 ['廚房顯示系統研究與概念設計','Kitchen Display System Research & Concept'],
 ['工業設計背景的產品設計師，正往產品經理發展。我在意的不只是畫面，而是「這個問題值不值得解、要先解哪一塊」，並用研究與可運作的原型把答案驗證出來。','A product designer with an industrial design background, moving into product management. I care less about screens alone and more about whether a problem is worth solving and which part to solve first—then I validate the answer with research and working prototypes.'],
 ['我的背景跨越工業設計、使用者研究與數位產品設計，做過餐飲 POS、自助點餐機與廚房顯示系統。現在我往產品經理發展：定義問題、排定優先順序、用最小成本驗證，必要時用 AI 輔助開發自己把原型做出來。','My background spans industrial design, UX research, and digital product design across restaurant POS, self-ordering kiosks, and kitchen display systems. Moving into product management, I frame problems, set priorities, validate at the lowest cost, and build prototypes myself with AI-assisted development when needed.'],
 ['我喜歡定義問題、串聯不同線索、提出解法，以及把複雜的邏輯整理得讓人容易理解。','I enjoy framing problems, connecting evidence, proposing solutions, and making complex product logic easy to understand.'],
 ['歡迎交流產品經理、產品設計與 0→1 的機會。','I would love to connect about product management, product design, and 0→1 opportunities.']
];
function translateSharedPage(markup){for(const [zh,en] of englishSharedText)markup=markup.replaceAll(zh,en);return markup;}
function englishHome(){return translateSharedPage(home());}
function englishAbout(){return translateSharedPage(aboutPage());}
function render(){let route=decodeURI(location.hash.replace(/^#\/?/,'')).split('/').filter(Boolean);let view=route[0]||'';document.body.classList.toggle('home-mode',!(view==='case'||view==='about'));document.body.classList.toggle('kiosk-case',view==='case'&&route[1]==='kiosk');document.body.classList.toggle('kds-case',view==='case'&&route[1]==='kds');document.body.classList.toggle('scheduling-case',view==='case'&&route[1]==='scheduling');document.querySelectorAll('[data-nav]').forEach(a=>a.removeAttribute('aria-current'));if(view==='case'){const p=projects.find(p=>p.id===route[1]);app.innerHTML=p?(isEnglish()?window.PortfolioEN.casePage(p,projects,visual):casePage(p)):(isEnglish()?englishHome():home());document.title=(p?p.title:'Work')+' — Yuan Chi';}else if(view==='about'){app.innerHTML=isEnglish()?englishAbout():aboutPage();document.title='About — Yuan Chi';}else{app.innerHTML=isEnglish()?englishHome():home();document.title='Yuan Chi — Product Portfolio';if(view==='work'){requestAnimationFrame(()=>document.querySelector('#work')?.scrollIntoView({behavior:'smooth'}));}}updateLanguageControls();if(view==='case'||view==='about')window.scrollTo(0,0);}
app.addEventListener('click',event=>{const link=event.target.closest('a[href^="#"]');if(!link)return;const href=link.getAttribute('href');if(href==='#try-demo'){event.preventDefault();const demo=document.getElementById('try-demo');if(!demo)return;demo.scrollIntoView({behavior:'smooth',block:'start'});/* lazy images above the demo load during the scroll and push it down, so keep correcting until it settles */let tries=0;const settle=()=>{const off=demo.getBoundingClientRect().top-parseFloat(getComputedStyle(demo).scrollMarginTop||0);if(Math.abs(off)>6&&tries++<8){demo.scrollIntoView({behavior:tries>3?'auto':'smooth',block:'start'});setTimeout(settle,600);}};setTimeout(settle,900);return;}if(['#overview','#research','#user-analysis','#opportunity','#solutions','#validation','#reflection'].includes(href)){event.preventDefault();document.querySelectorAll('.side-index a').forEach(item=>{const active=item.getAttribute('href')===href;item.classList.toggle('is-active',active);if(active)item.setAttribute('aria-current','location');else item.removeAttribute('aria-current');});document.querySelector(href)?.scrollIntoView({behavior:'smooth',block:'start'});}});
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
  if(heading){heading.innerHTML='<span class="thinking-line">Fall in love with the PROBLEM,</span><span class="thinking-line">not the solution.</span>';}
}
function setupHeroFlip(){
  const frame=document.querySelector('.home-mode .identity-photo');
  const front=frame?.querySelector('img');
  if(!frame||!front)return;
  // Keep the image fetched by the HTML parser; don't download a placeholder
  // and replace it with the actual front face after JavaScript starts.
  front.classList.add('flip-face','flip-face--front');
  const spinner=document.createElement('div');
  spinner.className='hero-flip-inner';
  const back=document.createElement('img');
  back.className='flip-face flip-face--back';
  back.src='./yuan-chi-hero-flip-back.png';
  back.alt='Yuan Chi 俏皮黑白肖像與橘色塗鴉';
  back.decoding='async';
  spinner.append(front,back);
  frame.prepend(spinner);
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

document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-pil-view]');if(!b)return;var st=b.closest('.schedule-live-stage');if(!st)return;var v=b.getAttribute('data-pil-view');
st.querySelectorAll('[data-pil-view]').forEach(function(x){x.setAttribute('aria-selected',x===b?'true':'false')});
st.querySelectorAll('iframe[data-pil-frame]').forEach(function(f){var on=f.getAttribute('data-pil-frame')===v;if(on&&f.dataset.src&&!f.getAttribute('src'))f.setAttribute('src',f.dataset.src);
if(on&&v==='student'&&f.contentWindow&&f.getAttribute('src')&&f.dataset.loaded){try{f.contentWindow.location.reload()}catch(_){}}
f.hidden=!on;if(on)f.addEventListener('load',function(){f.dataset.loaded='1'},{once:true})});});

/* "try it in the demo" links: scroll is handled by the #try-demo handler; this drives the demo to the right screen */
(function(){
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  const waitFor=async(fn,ms)=>{const t0=Date.now();while(Date.now()-t0<ms){let v;try{v=fn();}catch(e){}if(v)return v;await sleep(150);}return null;};
  const vis=doc=>[...doc.querySelectorAll('button,a')].filter(e=>e.offsetParent);
  const clickLabel=(doc,label)=>{const el=vis(doc).find(e=>(e.getAttribute('aria-label')||'').trim()===label||e.innerText.trim()===label);if(el){el.click();return true;}return false;};
  async function pilates(kind,box){
    const tb=box.querySelector('[data-pil-view="teacher"]');if(tb&&tb.getAttribute('aria-selected')!=='true')tb.click();
    const f=box.querySelector('iframe[data-pil-frame="teacher"]');if(!f)return;
    f.removeAttribute('loading');await new Promise(r=>{f.addEventListener('load',r,{once:true});f.setAttribute('src',f.getAttribute('src'));});
    const doc=()=>f.contentDocument;
    for(const l of ['開始排課','查看填寫與排課','自動排課']){await sleep(700);if(!await waitFor(()=>clickLabel(doc(),l),10000))return;}
    if(kind!=='pil-week')return;
    await waitFor(()=>doc().body.innerText.includes('確認並分享'),10000);await sleep(500);
    if(!await waitFor(()=>clickLabel(doc(),'課表一覽'),6000))return;await sleep(600);
    await waitFor(()=>{const b=vis(doc()).filter(e=>e.getAttribute('aria-label')==='下一週').pop();if(b){b.click();return true;}},4000);
  }
  async function frameDemo(key,box){
    const f=box.querySelector('iframe');if(!f)return;
    if(f.getAttribute('loading')==='lazy')f.removeAttribute('loading');
    const ok=await waitFor(()=>f.contentWindow&&f.contentWindow.__demoReady,12000);
    if(ok)f.contentWindow.postMessage({demoGo:key},'*');
  }
  document.addEventListener('click',e=>{
    const a=e.target.closest&&e.target.closest('[data-demo-go]');if(!a)return;
    const box=document.getElementById('try-demo');if(!box)return;
    const key=a.getAttribute('data-demo-go');
    if(key.startsWith('pil-'))pilates(key,box);else frameDemo(key,box);
  });
})();

/* "try the demo" pill: fixed at the bottom-right on case pages from the start; steps aside while the demo itself is on screen */
(function(){
  const fab=document.createElement('a');fab.className='demo-fab';fab.href='#try-demo';document.body.appendChild(fab);
  fab.addEventListener('click',e=>{e.preventDefault();const cta=document.querySelector('.case-top .try-demo-cta');if(cta)cta.click();});
  function update(){
    const demo=document.getElementById('try-demo');let show=!!demo&&/^#\/case\//.test(location.hash);
    if(show){const d=demo.getBoundingClientRect();if(d.top<innerHeight*.6&&d.bottom>innerHeight*.4)show=false;}
    const lbl=isEnglish()?'Try it':'親手試玩';if(fab.dataset.lbl!==lbl){fab.dataset.lbl=lbl;fab.setAttribute('aria-label',lbl);fab.innerHTML='<span>'+lbl+'</span><span aria-hidden="true">↓</span>';}
    fab.classList.toggle('on',show);fab.tabIndex=show?0:-1;fab.setAttribute('aria-hidden',show?'false':'true');
  }
  addEventListener('scroll',update,{passive:true});addEventListener('resize',update);addEventListener('hashchange',()=>setTimeout(update,60));
  setInterval(update,700);update();
})();

/* keep the Pilates phone at 390px logical width and scale it to the available frame */
(function(){
  function fit(){document.querySelectorAll('.schedule-live-frame').forEach(fr=>{const avail=(fr.parentElement&&fr.parentElement.clientWidth||0)-18;if(avail<=0)return;const s=Math.min(1,avail/390,(innerWidth>850?720:640)/844);const v=s.toFixed(4);if(fr.dataset.s!==v){fr.dataset.s=v;fr.style.setProperty('--pil-s',v);fr.style.setProperty('--pil-h',Math.round(844*s)+'px');fr.style.width=Math.round(390*s)+'px';}});}
  addEventListener('resize',fit);addEventListener('hashchange',()=>setTimeout(fit,80));setInterval(fit,600);fit();
})();

/* mobile chip bar: keep the active chip in view */
(function(){let last=null;setInterval(()=>{if(innerWidth>900)return;const a=document.querySelector('.side-index a.is-active');if(a&&a!==last){last=a;const bar=a.parentElement;bar.scrollTo({left:a.offsetLeft-bar.clientWidth/2+a.clientWidth/2,behavior:'smooth'});}},300);})();

/* design-highlight tabs: each tab drives the live demo to its screen */
(function(){
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  async function send(box,key){const f=box.querySelector('iframe');if(!f)return;if(f.getAttribute('loading')==='lazy')f.removeAttribute('loading');
    for(let i=0;i<80;i++){try{if(f.contentWindow&&f.contentWindow.__demoReady)break;}catch(e){}await sleep(150);}
    try{f.contentWindow.postMessage({demoGo:key,quiet:true},'*');}catch(e){}}
  function select(box,key){box.querySelectorAll('[data-hl]').forEach(b=>b.setAttribute('aria-selected',b.dataset.hl===key?'true':'false'));
    box.querySelectorAll('[data-hl-panel]').forEach(p=>p.hidden=p.dataset.hlPanel!==key);send(box,key);}
  document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('.hl-tablist [data-hl]');if(!b)return;select(b.closest('.hl-tabs'),b.dataset.hl);});
  /* when the component first scrolls into view, put the demo on the selected tab's screen */
  setInterval(()=>{document.querySelectorAll('.hl-tabs:not([data-armed])').forEach(box=>{const r=box.getBoundingClientRect();if(r.top<innerHeight*1.2&&r.bottom>0){box.dataset.armed='1';const cur=box.querySelector('[data-hl][aria-selected="true"]');if(cur)send(box,cur.dataset.hl);}});},400);
})();

/* highlight clips: play only while on screen */
(function(){
  if(!('IntersectionObserver' in window))return;
  const io=new IntersectionObserver(es=>es.forEach(e=>{const v=e.target;if(e.isIntersecting){const p=v.play();if(p&&p.catch)p.catch(()=>{});}else v.pause();}),{threshold:.25});
  setInterval(()=>document.querySelectorAll('.hl-clip video:not([data-io])').forEach(v=>{v.dataset.io='1';io.observe(v);}),700);
})();

/* in-page jumps between the KIOSK research questions, decisions and highlight clips (hash routing would otherwise leave the case page) */
document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('a.rq-link,a.dec-look');if(!a)return;const id=(a.getAttribute('href')||'').slice(1);const el=document.getElementById(id);if(!el)return;e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});el.classList.remove('jump-flash');void el.offsetWidth;el.classList.add('jump-flash');});
