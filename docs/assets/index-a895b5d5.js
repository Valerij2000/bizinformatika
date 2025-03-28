!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const n of t)if("childList"===n.type)for(const t of n.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const t=["/img/a3.webp","/img/a4.webp","/img/b1.webp","/img/b2.webp","/img/b3.webp","/img/b4.webp","/img/final-earth.png","/img/player_1.png","/img/player_2.png"];function e(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var a,s,o,r,i,l=(a=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],s=function(){function t(n){var a=n.targetModal,s=n.triggers,o=void 0===s?[]:s,r=n.onShow,i=void 0===r?function(){}:r,l=n.onClose,c=void 0===l?function(){}:l,d=n.openTrigger,p=void 0===d?"data-micromodal-trigger":d,u=n.closeTrigger,m=void 0===u?"data-micromodal-close":u,h=n.openClass,f=void 0===h?"is-open":h,w=n.disableScroll,_=void 0!==w&&w,b=n.disableFocus,v=void 0!==b&&b,g=n.awaitCloseAnimation,y=void 0!==g&&g,E=n.awaitOpenAnimation,S=void 0!==E&&E,k=n.debugMode,q=void 0!==k&&k;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.modal=document.getElementById(a),this.config={debugMode:q,disableScroll:_,openTrigger:p,closeTrigger:m,openClass:f,onShow:i,onClose:c,awaitCloseAnimation:y,awaitOpenAnimation:S,disableFocus:v},o.length>0&&this.registerTriggers.apply(this,e(o)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var n;return(n=[{key:"registerTriggers",value:function(){for(var t=this,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];n.filter(Boolean).forEach((function(e){e.addEventListener("click",(function(e){return t.showModal(e)}))}))}},{key:"showModal",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation?this.modal.addEventListener("animationend",(function e(){t.modal.removeEventListener("animationend",e,!1),t.setFocusToFirstNode()}),!1):this.setFocusToFirstNode(),this.config.onShow(this.modal,this.activeElement,e)}},{key:"closeModal",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,t),this.config.awaitCloseAnimation){var n=this.config.openClass;this.modal.addEventListener("animationend",(function t(){e.classList.remove(n),e.removeEventListener("animationend",t,!1)}),!1)}else e.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(t){this.modal=document.getElementById(t),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(t){if(this.config.disableScroll){var e=document.querySelector("body");switch(t){case"enable":Object.assign(e.style,{overflow:""});break;case"disable":Object.assign(e.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(t){(t.target.hasAttribute(this.config.closeTrigger)||t.target.parentNode.hasAttribute(this.config.closeTrigger))&&(t.preventDefault(),t.stopPropagation(),this.closeModal(t))}},{key:"onKeydown",value:function(t){27===t.keyCode&&this.closeModal(t),9===t.keyCode&&this.retainFocus(t)}},{key:"getFocusableNodes",value:function(){var t=this.modal.querySelectorAll(a);return Array.apply(void 0,e(t))}},{key:"setFocusToFirstNode",value:function(){var t=this;if(!this.config.disableFocus){var e=this.getFocusableNodes();if(0!==e.length){var n=e.filter((function(e){return!e.hasAttribute(t.config.closeTrigger)}));n.length>0&&n[0].focus(),0===n.length&&e[0].focus()}}}},{key:"retainFocus",value:function(t){var e=this.getFocusableNodes();if(0!==e.length)if(e=e.filter((function(t){return null!==t.offsetParent})),this.modal.contains(document.activeElement)){var n=e.indexOf(document.activeElement);t.shiftKey&&0===n&&(e[e.length-1].focus(),t.preventDefault()),!t.shiftKey&&e.length>0&&n===e.length-1&&(e[0].focus(),t.preventDefault())}else e[0].focus()}}])&&function(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(t.prototype,n),t}(),o=null,r=function(t){if(!document.getElementById(t))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(t,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(t,'"></div>')),!1},i=function(t,e){if(t.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>')),!e)return!0;for(var n in e)r(n);return!0},{init:function(t){var n,a,r,l=Object.assign({},{openTrigger:"data-micromodal-trigger"},t),c=e(document.querySelectorAll("[".concat(l.openTrigger,"]"))),d=(n=c,a=l.openTrigger,r=[],n.forEach((function(t){var e=t.attributes[a].value;void 0===r[e]&&(r[e]=[]),r[e].push(t)})),r);if(!0!==l.debugMode||!1!==i(c,d))for(var p in d){var u=d[p];l.targetModal=p,l.triggers=e(u),o=new s(l)}},show:function(t,e){var n=e||{};n.targetModal=t,!0===n.debugMode&&!1===r(t)||(o&&o.removeEventListeners(),(o=new s(n)).showModal())},close:function(t){t?o.closeModalById(t):o.closeModal()}});"undefined"!=typeof window&&(window.MicroModal=l);const c=[[{title:"Когда всё идёт не по плану...",correctclass:"smaller-header",description:"ВОПРОС &#8470;&nbsp;1",imgurl:"./img/b1.webp",question:"\n      <p>\n        Как ты реагируешь на неожиданную проблему?\n      </p>\n      ",answers:['<p class="answer__text">\n          Паника! Где моя инструкция? 😱\n        </p>','<p class="answer__text">\n          Окей, попробуем пару решений и посмотрим, что сработает! 🛠️\n        </p>','<p class="answer__text">\n          Это вызов! Надо придумать что-то совершенно новое. 🚀\n        </p>','<p class="answer__text">\n          Позову команду – вместе разберёмся! 🤝\n        </p>'],correct:0,popup:{correct:'\n          <p class="modal__text">\n            😅 Не переживай, инновации — это навык, который можно развить! Важно не бояться проблем, а искать в них возможности. Начни с малого – пробуй решать нестандартные задачи и прокачивать гибкость мышления!\n          </p>\n          \n        ',incorrect:'\n        <p class="modal__text">\n        🔥 Ты прирожденный новатор! Вместо паники ты видишь вызов и возможность придумать что-то по-настоящему уникальное. Именно такие люди двигают мир вперед и создают технологии будущего!          \n        </p>\n        \n        '}},{title:"Название, которое изменит мир",correctclass:"que4 smaller-header",description:"ВОПРОС &#8470;&nbsp;2",imgurl:"./img/b2.webp",question:"\n      <p>\n        Представь, что ты изобрёл новый гаджет. Как его назовёшь?\n      </p>\n      ",answers:['<p class="answer__text">\n          "Супер-Пупер 3000" – главное, чтобы звучало круто! 💥\n        </p>','<p class="answer__text">\n          Название должно быть логичным и понятным, например, "Умный Браслет v2". 📲\n        </p>','<p class="answer__text">\n          Придумаю нечто уникальное, чтобы это стало брендом будущего! 🔥\n        </p>','<p class="answer__text">\n          Проведу исследование рынка и выберу лучшее название по трендам. 📊\n        </p>'],correct:0,popup:{correct:'\n          <p class="modal__text">\n            😂 Ну, с оригинальностью у тебя точно всё в порядке! Но чтобы идея заиграла, нужно еще понимать тренды и целевую аудиторию. Возможно, стоит немного углубиться в маркетинг и стратегию брендинга?\n          </p>\n        ',incorrect:'\n        <p class="modal__text modal__text--w57">\n          💡 Ты точно знаешь, что инновации – это не только идея, но и её подача! Креативность и умение выделиться – важные качества для инноватора. Возможно, твое имя скоро станет легендой в мире стартапов!\n        </p>\n        '}},{title:"Любишь ли ты играть с риском?",correctclass:"que4",description:"ВОПРОС &#8470;&nbsp;3",imgurl:"./img/a3.webp",question:"\n      <p>\n       Как ты относишься к риску?\n      </p>     \n      ",answers:['<p class="answer__text">\n          Лучше без него – стабильность превыше всего. 🔵\n        </p>','<p class="answer__text">\n          Если риск оправдан – почему бы и нет? 🟡\n        </p>','<p class="answer__text">\n          Риск – двигатель прогресса! Нужно пробовать новое. 🔴\n        </p>','<p class="answer__text">\n          Главное – анализировать риски и минимизировать потери. ⚖️\n        </p>'],correct:0,popup:{correct:'\n        <p class="modal__text">\n          😌 Стабильность – это хорошо, но в инновациях она редко встречается. Попробуй выходить из зоны комфорта и тестировать новые идеи – иногда именно неожиданные решения приводят к революционным открытиям!\n        </p>\n        ',incorrect:'\n        <p class="modal__text modal__text--w57">\n          🚀 Ты настоящий первопроходец! Великие инновации рождаются там, где другие боятся рисковать. Главное – балансировать между смелостью и расчетом, и тогда успех неизбежен!\n        </p>\n        \n        '}},{title:"Если бы у тебя был 1 миллиард на стартап…",correctclass:"smaller-header",description:"ВОПРОС &#8470;&nbsp;4",imgurl:"./img/a4.webp",question:"\n      <p>\n       Тебе дают миллиард долларов на стартап. Что ты сделаешь?\n      </p>\n      ",answers:['<p class="answer__text">\n          Куплю остров и отдохну! 🏝️\n        </p>','<p class="answer__text">\n          Вложу в проверенные технологии и заработаю ещё больше. 📈\n        </p>','<p class="answer__text">\n          Придумаю прорывной проект, который изменит мир! 🌍\n        </p>','<p class="answer__text">\n          Соберу команду экспертов и разработаю стратегию развития. 🏆\n        </p>'],correct:0,popup:{correct:'\n        <p class="modal__text">\n          🏝️ Отдых – это, конечно, важно... но представь, если бы Илон Маск или Стив Джобс выбрали такой путь? Возможно, твоя идея способна сделать мир лучше – почему бы не попробовать? 😉\n        </p> \n        \n        ',incorrect:'\n        <p class="modal__text modal__text--w57">\n          🌍 Мир нуждается в таких людях, как ты! У тебя глобальное мышление и амбиции, а это именно то, что двигает человечество вперед. Остается только найти команду и начать воплощать идеи!\n        </p>\n        '}}],[{title:"Паника или план?",correctclass:"que4",description:"ВОПРОС &#8470;&nbsp;1",imgurl:"./img/b1.webp",question:"\n      <p>\n        Что ты сделаешь, если на работе внезапно сломалась вся система?\n      </p>\n      ",answers:['<p class="answer__text">\n          Позвоню в техподдержку и подожду решения. ☎️\n        </p>','<p class="answer__text">\n          Начну разбираться сам – вдруг найду причину? 🛠️\n        </p>','<p class="answer__text">\n          Использую эту ситуацию, чтобы предложить новую, более надежную систему! 💡\n        </p>','<p class="answer__text">\n          Подключу всех, кто может помочь, и организую процесс решения. 🤝\n        </p>'],correct:0,popup:{correct:'\n        <p class="modal__text">\n          😅 Ну, ждать – тоже стратегия... но не самая лучшая! В бизнес-информатике важны инициативность и проактивный подход. Попробуй в следующий раз поискать решение сам – вдруг именно ты найдешь способ улучшить систему?\n        </p>\n          \n        ',incorrect:'\n        <p class="modal__text">\n          🚀 Вот это подход! Ты не просто решаешь проблему, а ищешь возможности для улучшения. Именно так думают бизнес-информатики — не тушат пожары, а делают так, чтобы они не возникали!\n        </p>\n        \n        '}},{title:"Объясни бабушке, чем ты занимаешься",correctclass:"que4 smaller-header",description:"ВОПРОС &#8470;&nbsp;2",imgurl:"./img/b2.webp",question:'\n      <p>\n        Как бы ты описал специальность "Бизнес-информатика" простыми словами?\n      </p>\n      ',answers:['<p class="answer__text">\n          "Ну... там и бизнес, и компьютеры... сложно объяснить!" 🤷‍♂️\n        </p>','<p class="answer__text">\n          "Это человек, который помогает компаниям зарабатывать с помощью технологий." 💻💰\n        </p>','<p class="answer__text">\n          "Я создаю цифровое будущее! Представь, что ты заказываешь еду в один клик – это моя работа!" 🚀\n        </p>','<p class="answer__text">\n          "Я оптимизирую бизнес-процессы с помощью ИТ, чтобы компания работала эффективнее." 📈\n        </p>'],correct:0,popup:{correct:'\n          <p class="modal__text">\n            😂 Сложно? Может быть! Но умение объяснять – важный навык для бизнес-информатика. Ведь если ты не можешь объяснить, чем занимаешься, как же ты продашь свою идею? Попробуй потренироваться, и тебе точно станет проще!\n          </p>\n        ',incorrect:'\n        <p class="modal__text modal__text--w57">\n          💡 Ты умеешь просто объяснять сложные вещи – редкий талант! Бизнес-информатики именно этим и занимаются – делают технологии удобными для людей и помогают компаниям идти в ногу со временем!\n        </p>\n          '}},{title:"Как ты принимаешь решения?",correctclass:"",description:"ВОПРОС &#8470;&nbsp;3",imgurl:"./img/b3.webp",question:"\n      <p>\n       Какой у тебя стиль мышления?\n      </p>\n      ",answers:['<p class="answer__text">\n          Интуитивно – если чувствую, что правильно, значит, так и есть! ✨\n        </p>','<p class="answer__text">\n          Собираю максимум информации и анализирую. 📊\n        </p>','<p class="answer__text">\n          Экспериментирую и выбираю лучший вариант! 🔄\n        </p>','<p class="answer__text">\n          Провожу SWOT-анализ, считаю риски и строю стратегию. 📉📈\n        </p>'],correct:0,popup:{correct:'\n        <p class="modal__text">\n          🤔 Интуиция – это здорово, но в бизнес-информатике нужны факты! Попробуй добавить немного анализа к своим решениям – тогда твоя интуиция станет еще сильнее!\n        </p>\n        \n        ',incorrect:'\n        <p class="modal__text">\n          📊 Вот это уровень! Аналитический подход – основа бизнес-информатики. Если ты умеешь продумывать всё наперёд, значит, у тебя уже есть один из ключевых навыков успешного специалиста!\n        </p>\n        \n        '}},{title:"Чего ты ждёшь от работы?",correctclass:"smaller-header que1",description:"ВОПРОС &#8470;&nbsp;4",imgurl:"./img/b4.webp",question:"\n      <p>\n        Что для тебя важнее всего в профессии?\n      </p>\n      ",answers:['<p class="answer__text">\n          Стабильность и понятные задачи. 🔵\n        </p>','<p class="answer__text">\n          Возможность постоянно учиться новому. 📚\n        </p>','<p class="answer__text">\n          Влияние на развитие бизнеса и технологий. 🚀\n        </p class="answer__text">','<p class="answer__text">\n          Управление процессами и командами. 🏆\n        </p>'],correct:0,popup:{correct:'\n        <p class="modal__text">\n          😊 Стабильность – это хорошо, но в мире технологий всё постоянно меняется! Если ты хочешь стать крутым специалистом, попробуй выходить за рамки привычного – бизнес-информатика любит тех, кто готов учиться и меняться вместе с миром!\n        </p>\n        ',incorrect:'\n        <p class="modal__text modal__text--w50">\n          🔥 Ты – двигатель прогресса! Бизнес-информатика – это про влияние и развитие. Если тебе важно не просто работать, а менять правила игры, то ты выбрал правильное направление!\n        </p>\n        '}}]];const d=document.querySelector(".main");function p(t,e){d.classList.remove(t),d.classList.add(e)}const u={0:"A",1:"B",2:"C",3:"D"},m=""+new URL("maintheme-2b0916e7.mp3",import.meta.url).href,h=""+new URL("button-634d74f8.mp3",import.meta.url).href,f=""+new URL("correct-217f32e3.mp3",import.meta.url).href,w=""+new URL("incorrect-14ca96c6.mp3",import.meta.url).href,_=""+new URL("win-07b6916b.mp3",import.meta.url).href,b=new Audio(m);b.volume=.2,b.load();const v=new Audio(h);v.volume=.8,v.load();const g=new Audio(f);g.volume=.6,g.load();const y=new Audio(w);y.volume=.8,y.load();const E=new Audio(_);E.volume=.8,E.load();const S={main:b,button:v,correct:g,incorrect:y,win:E,soundBtnCheck:function(){document.querySelectorAll("#soundBtn").forEach((t=>t.addEventListener("click",(()=>{window.appState.muted=!window.appState.muted,window.appState.muted?(b.pause(),t.classList.add("muted")):(b.play(),t.classList.remove("muted"))}))))}};function k(){const t=document.querySelector(".main");4===window.appState.currentScreen?(p("gameplayback","finalback"),t.innerHTML='\n  <div class="final">\n    <img class="final__img" src="./img/final-earth.png" alt="">\n    <h2 class="main-header final__header">✨ Подсчет результатов</h2>\n    <div class="final__desc">\n      <p id="quiz-result">Тебе нравится комфорт и стабильность, но бизнес-информатика требует гибкости!</p>\n      <p>Теперь ты можешь сохранить полезные материалы по направлению подготовки <span id="quiz-disclaimer"></span>! 📚🚀</p>\n    </div>\n    <div class="final__btns">\n      <button id="downloadDoc" class="btn green-btn final__btn">Скачать памятку</button>\n      <button id="startgame" class="btn orange-btn final__btn">Вернуться в&nbsp;начало</button>\n    </div>\n  </div>\n',function(t){const e=document.querySelector(".main"),n=document.querySelector("#downloadDoc"),a=document.querySelector("#startgame");!function(t){const e=Object.keys(window.appState.counts).reduce(((t,e)=>window.appState.counts[t]>window.appState.counts[e]?t:e));let n,a;0===t?(n={A:"Ты обожаешь комфорт, но инновации требуют гибкости!",B:"Ты прагматик – можешь быть крутым менеджером в инноватике!",C:"Ты прирожденный новатор! 🚀 Добро пожаловать в будущее!",D:"Ты стратег, который делает инновации реальными!"},a="Инноватика"):(n={A:"Ты любишь комфорт и стабильность, но бизнес-информатика требует гибкости!",B:"Ты аналитик по натуре, а значит, тебе точно подойдет эта специальность!",C:"Ты инноватор! В бизнес-информатике такие люди создают будущее.",D:"Ты прирожденный стратег и управленец – бизнес-информатика твой путь!"},a="Бизнес-информатика"),document.getElementById("quiz-result").textContent=n[e],document.getElementById("quiz-disclaimer").textContent=a}(t),n.addEventListener("click",(e=>{e.preventDefault();const n=document.createElement("a");0===t?(n.href="./docs/innovation.pdf",n.download="innovation.pdf"):(n.href="./docs/business.pdf",n.download="business.pdf"),n.click(),window.appState.muted||S.button.play()}),{once:!0}),a.addEventListener("click",(t=>{t.preventDefault(),e.innerHTML='\n  <div class="start">\n    <h2 class="main-header start__header">\n      Твое будущее в IT начинается здесь\n    </h2>\n    <div class="start__desc">\n      <p class="start__text">\n        🔥 Поступай на специальность <span class="nowrap">Бизнес-информатика и Инноватика</span> в ДонГУ <span\n          class="nowrap">и открой для</span> себя мир цифровых технологий!\n      </p>\n    </div>\n    <button class="btn green-btn start__btn" id="start-btn">\n      Начать игру\n    </button>\n    <p class="typewriter"><span class="typed-text"></span><span class="cursor blink">&nbsp;</span></p>\n  </div>\n  <div class="bottom">\n    <div class="social-bar">\n      <a href="https://t.me/voity_v_IT_2025" class="social-link" target="_blank">\n        <img src="/public/img/tg.png" alt="">\n      </a>\n      <a href="https://vk.com/business_inform_donnu" class="social-link" target="_blank">\n        <img src="/public/img/vk.png" alt="">\n      </a>\n    </div>\n    <div class="bottom__desc2">\n      <div class="bottom__address">\n        <p>Кафедра Бизнес-Информатики</p>\n        <p>г. Донецк, ул. Челюскинцев, 198а</p>\n        <a href="tel:+7(949)3178568">Тел.: +7 (949) 317 85 68</a>\n        <br>\n        <a href="mailto:info@donnu.ru" target="_blank">e-mail: kf.bi.ufin@donnu.ru</a>\n        <br>\n        <a class="bottom__link" href="https://donnu.ru/fin/bi" target="_blank">www.donnu.ru/fin/bi</a>\n      </div>\n      <div class="bottom__logo">\n        <a href="https://donnu.ru/fin/bi" target="_blank">\n          Bi\n        </a>\n        <p class="bottom__logo-desc">Business Informatics</p>\n      </div>\n    </div>\n  </div>\n',p("finalback","startback"),window.appState.muted||S.button.play(),M()}),{once:!0})}(window.appState.player),window.appState.muted||S.win.play()):(t.innerHTML=function(t,e){const n=c[t][e],a=c[t].length;return`\n    <div class="game ${n.correctclass}">\n      <h2 class="main-header game__header">\n        ${n.title}\n\n        <button class="game__sound" id="soundBtn"></button>\n        <div class="game__progressbar">\n        \n        <svg class="progressbar" width="307" height="54" viewBox="0 0 307 54" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <rect x="301.344" y="9.44531" width="35.6191" height="294.611" transform="rotate(90 301.344 9.44531)" fill="white"/>\n        <rect x="301.344" y="9.44531" width="35.6191" height="294.611" transform="rotate(90 301.344 9.44531)" fill="white"/>\n        <rect x="301.344" y="9.44531" width="35.6191" height="294.611" transform="rotate(90 301.344 9.44531)" fill="white"/>\n        ${function(){let t=[];const e=window.appState.currentScreen;for(let n=0;n<12;n++)switch(n){case 0:n<3*e?t.push('<path class="quad colored" d="M32.0063 13.4141H11.0063V41.4141H32.0063V13.4141Z" fill="#E6E5E8"/>'):t.push('<path class="quad" d="M32.0063 13.4141H11.0063V41.4141H32.0063V13.4141Z" fill="#E6E5E8"/>');break;case 1:n<3*e?t.push('<path class="quad colored" d="M56.2695 13.4141H35.2695V41.4141H56.2695V13.4141Z" fill="#E6E5E8"/>'):t.push('<path class="quad" d="M56.2695 13.4141H35.2695V41.4141H56.2695V13.4141Z" fill="#E6E5E8"/>');break;case 2:n<3*e?t.push('<path class="quad colored" d="M80.3275 13.4141H59.3275V41.4141H80.3275V13.4141Z" fill="#E6E5E8"/>'):t.push('<path class="quad" d="M80.3275 13.4141H59.3275V41.4141H80.3275V13.4141Z" fill="#E6E5E8"/>');break;case 3:n<3*e?t.push('<path class="quad colored" d="M104.386 13.4141H83.3858V41.4141H104.386V13.4141Z" fill="#E6E5E8"/>'):t.push('<path class="quad" d="M104.386 13.4141H83.3858V41.4141H104.386V13.4141Z" fill="#E6E5E8"/>');break;case 4:n<3*e?t.push('<path class="quad colored" d="M128.444 13.4141H107.444V41.4141H128.444V13.4141Z" fill="#E6E5E8"/>'):t.push('<path class="quad" d="M128.444 13.4141H107.444V41.4141H128.444V13.4141Z" fill="#E6E5E8"/>');break;case 5:n<3*e?t.push('<path class="quad colored" d="M152.502 13.4141H131.502V41.4141H152.502V13.4141Z" fill="#E6E5E8"/>'):t.push('<path class="quad" d="M152.502 13.4141H131.502V41.4141H152.502V13.4141Z" fill="#E6E5E8"/>');break;case 6:n<3*e?t.push('<path class="quad colored" d="M176.561 13.4141H155.561V41.4141H176.561V13.4141Z" fill="#E6E5E8"/>'):t.push('<path class="quad" d="M176.561 13.4141H155.561V41.4141H176.561V13.4141Z" fill="#E6E5E8"/>');break;case 7:n<3*e?t.push('<path class="quad colored" d="M200.618 13.4141H179.618V41.4141H200.618V13.4141Z" fill="#E6E5E8"/>'):t.push('<path class="quad" d="M200.618 13.4141H179.618V41.4141H200.618V13.4141Z" fill="#E6E5E8"/>');break;case 8:n<3*e?t.push('<path class="quad colored" d="M224.677 13.4141H203.677V41.4141H224.677V13.4141Z" fill="#E6E5E8"/>'):t.push('<path class="quad" d="M224.677 13.4141H203.677V41.4141H224.677V13.4141Z" fill="#E6E5E8"/>');break;case 9:n<3*e?t.push('<path class="quad colored" d="M248.735 13.4141H227.735V41.4141H248.735V13.4141Z" fill="#E6E5E8"/>'):t.push('<path class="quad" d="M248.735 13.4141H227.735V41.4141H248.735V13.4141Z" fill="#E6E5E8"/>');break;case 10:n<3*e?t.push('<path class="quad colored" d="M272.793 13.4141H251.793V41.4141H272.793V13.4141Z" fill="#E6E5E8"/>'):t.push('<path class="quad" d="M272.793 13.4141H251.793V41.4141H272.793V13.4141Z" fill="#E6E5E8"/>');break;case 11:n<3*e?t.push('<path class="quad colored" d="M296.852 13.4141H275.852V41.4141H296.852V13.4141Z" fill="#E6E5E8"/>'):t.push('<path class="quad" d="M296.852 13.4141H275.852V41.4141H296.852V13.4141Z" fill="#E6E5E8"/>')}return t.join("")}()}\n        <path d="M301.344 45.0645H6.93945V50.0645H301.344V45.0645Z" fill="#06D0A0"/>\n        <path d="M6.93945 9.44531H1.93945V45.0645H6.93945V9.44531Z" fill="#06D0A0"/>\n        <path d="M306.344 9.44531H301.344V45.0645H306.344V9.44531Z" fill="#06D0A0"/>\n        <path d="M301.344 4.44531H6.93945V9.44531H301.344V4.44531Z" fill="#06D0A0"/>\n        </svg>\n        \n        </div>\n      </h2>\n      \n      <div class="game__block">\n        <img class="game__img" \n        src="${n.imgurl}" \n        alt="Пациент в сложном состоянии">\n\n        <div class="game__question question">\n          <div class="question__text">\n\n            <div class="question__top">\n              <p class="question__desc">${n.description}</p>\n              <p class="question__number">\n                ${e+1} / ${a}\n              </p>\n            </div>\n\n            <div class="question__que">\n              ${n.question}\n            </div>\n          </div>\n\n\n\t\t\t\t\t${n.answers.map(((t,e)=>`\n          <ul class="question__vars">\n\t\t\t\t\t\t\t<li>  \n\t\t\t\t\t\t\t\t<button class="answer" id="${e}">\n\t\t\t\t\t\t\t\t\t<div class="answer__digit-border">\n\t\t\t\t\t\t\t\t\t\t<span class="answer__digit">${e+1}</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t${t}\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</li>\n           `)).join("")}\n          </ul>\n        </div>\n      </div>\n    </div>\n  `}(window.appState.player,window.appState.currentScreen),S.soundBtnCheck(),document.querySelectorAll(".answer").forEach((t=>t.addEventListener("click",q,{once:!0}))))}function q(t){const e=document.querySelector(".popupErrorContent"),n=document.querySelector(".PopupSuccessContent");t.preventDefault();const a=t.target.closest(".answer");document.querySelectorAll(".answer").forEach((t=>{t.classList.remove("correct"),t.classList.remove("incorrect")})),function(t){const e=u[t];e&&window.appState.counts[e]++}(a.id),a.id==c[window.appState.player][window.appState.currentScreen].correct?(a.classList.add("correct"),document.querySelectorAll(".answer").forEach((t=>{t.setAttribute("disabled",!0)})),window.appState.muted||S.incorrect.play(),x(),n.innerHTML=c[window.appState.player][window.appState.currentScreen].popup.correct,MicroModal.show("modal-success"),window.appState.currentScreen+=1):(a.classList.add("correct"),window.appState.muted||S.correct.play(),x(),e.innerHTML=c[window.appState.player][window.appState.currentScreen].popup.incorrect,MicroModal.show("modal-error"),window.appState.currentScreen+=1)}function x(){const t=document.querySelectorAll(".quad");let e=0;for(let n=3*window.appState.currentScreen;n<3*window.appState.currentScreen+3;n++)e+=300,setTimeout((()=>{t[n].classList.add("colored")}),e)}function M(){window.appState={player:0,currentScreen:0,muted:!1,counts:{A:0,B:0,C:0,D:0}},function(){document.querySelector("body").innerHTML+='\n  <div class="modal micromodal-slide" id="modal-error" aria-hidden="true">\n\t\t<div class="modal__overlay" tabindex="-1">\n\t\t\t<div class="modal__container">\n\t\t\t\t<div class="modal__head">\n\t\t\t\t\t<div class="modal__close error"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="modal__content">\t\t\t\t\t\n\t\t\t\t\t<div class="popupErrorContent modal__message"></div>\n\t\t\t\t\t<button class="modal__button btn green-btn error">Понятно</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class="modal micromodal-slide" id="modal-success" aria-hidden="true">\n\t\t<div class="modal__overlay" tabindex="-1">\n\t\t\t<div class="modal__container">\n\t\t\t\t<div class="modal__head">\n\t\t\t\t\t<div class="modal__close success"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="modal__content">\n\t\t\t\t\t<div class="PopupSuccessContent modal__message"></div>\n\t\t\t\t\t<button class="modal__button btn green-btn success">Понятно</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  ';const t=document.querySelectorAll(".success"),e=document.querySelectorAll(".error");function n(){l.close("modal-success"),window.appState.muted||S.button.play(),k()}function a(){l.close("modal-error"),window.appState.muted||S.button.play(),k()}t.forEach((t=>t.addEventListener("click",n))),e.forEach((t=>t.addEventListener("click",a)))}(),function(){const t=document.querySelector(".typed-text"),e=document.querySelector(".cursor"),n=["00101101110001001","typedText.textContent = 0","Web Development","Business","Innovations"];let a=0,s=0;const o=()=>{s>0?(e.classList.remove("blink"),t.textContent=n[a].slice(0,s-1),s--,setTimeout(o,80)):(e.classList.add("blink"),a++,a>n.length-1&&(a=0),setTimeout(r,1e3))},r=()=>{s<=n[a].length-1?(e.classList.remove("blink"),t.textContent+=n[a].charAt(s),s++,setTimeout(r,120)):(e.classList.add("blink"),setTimeout(o,1e3))};r()}(),document.querySelector("#start-btn").addEventListener("click",H,{once:!0})}function H(t){t.preventDefault(),window.appState.muted||(S.button.play(),S.main.play()),document.querySelector(".main").innerHTML='\n  <div class="player">\n    <button class="player__sound" id="soundBtn"></button>\n    <h2 class="main-header player__header">\n      Какой специальности ты подходишь больше всего?\n    </h2>\n    <div class="player__desc">\n      Вам предстоит пройти тест, который поможет тебе определиться с выбором.\n    </div>\n    <div class="player__choose">\n      <button id="player1" class="btn-playerchoose player__card card player1">\n        <img class="player__back" src="/public/img/player_1.png" alt="Инноватика">\n      </button>\n      <button id="player2" class="btn-playerchoose player__card card player2">\n        <img class="player__back" src="/public/img/player_2.png" alt="Бизнес-информатика">\n      </button>\n    </div>\n  </div>\n',S.soundBtnCheck(),p("startback","gameplayback");const e=document.querySelector("#player1"),n=document.querySelector("#player2");e.addEventListener("click",L,{once:!0}),n.addEventListener("click",L,{once:!0})}function L(t){window.appState.muted||S.button.play();const e=t.target.closest(".btn-playerchoose");"player1"===e.id&&(window.appState.player=0),"player2"===e.id&&(window.appState.player=1),k()}l.init(),window.document.addEventListener("keydown",(t=>{"Escape"==t.code&&(t.stopPropagation(),t.preventDefault(),t.stopImmediatePropagation())})),function(){let e=0;const n={};t.forEach((a=>{const s=new Image;s.src=a,s.onload=()=>{n[a]=s,e++,e===t.length&&M()},s.onerror=()=>{!function(t,e){const n=document.querySelector("#start-btn"),a=document.querySelector(".typed-text");n.disabled=!0,a.innerHTML="Ошибка загрузки =(",console.error(`Ошибка загрузки: ${e}`)}(0,a)}}))}();
