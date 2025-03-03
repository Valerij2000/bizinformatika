import { data } from '../bd'


export function gameScreen(person, screen) {
  const screenData = data[person][screen];
  const length = data[person].length;

  return (
  `
    <div class="game ${screenData.correctclass}">
      <h2 class="main-header game__header">
        ${screenData.title}

        <button class="game__sound" id="soundBtn"></button>
        <div class="game__progressbar">
        
        <svg class="progressbar" width="307" height="54" viewBox="0 0 307 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="301.344" y="9.44531" width="35.6191" height="294.611" transform="rotate(90 301.344 9.44531)" fill="white"/>
        <rect x="301.344" y="9.44531" width="35.6191" height="294.611" transform="rotate(90 301.344 9.44531)" fill="white"/>
        <rect x="301.344" y="9.44531" width="35.6191" height="294.611" transform="rotate(90 301.344 9.44531)" fill="white"/>
        ${generatePath()}
        <path d="M301.344 45.0645H6.93945V50.0645H301.344V45.0645Z" fill="#06D0A0"/>
        <path d="M6.93945 9.44531H1.93945V45.0645H6.93945V9.44531Z" fill="#06D0A0"/>
        <path d="M306.344 9.44531H301.344V45.0645H306.344V9.44531Z" fill="#06D0A0"/>
        <path d="M301.344 4.44531H6.93945V9.44531H301.344V4.44531Z" fill="#06D0A0"/>
        </svg>
        
        </div>
      </h2>
      
      <div class="game__block">
        <img class="game__img" 
        src="${screenData.imgurl}" 
        alt="Пациент в сложном состоянии">

        <div class="game__question question">
          <div class="question__text">

            <div class="question__top">
              <p class="question__desc">${screenData.description}</p>
              <p class="question__number">
                ${screen + 1} / ${length}
              </p>
            </div>

            <div class="question__que">
              ${screenData.question}
            </div>
          </div>


					${screenData.answers.map((item, index) => `
          <ul class="question__vars">
							<li>  
								<button class="answer" id="${index}">
									<div class="answer__digit-border">
										<span class="answer__digit">${index + 1}</span>
									</div>
									${item}
								</button>
							</li>
           `).join('')}
          </ul>
        </div>
      </div>
    </div>
  `
  )
}

function generatePath() {
  let paths = [];
  
  const num = window.appState.currentScreen;
  // console.log('path screen number', num);

  for (let i = 0; i < 12; i++) {

    switch (i) {
      case 0:
        if (i < num * 3) {
          paths.push(`<path class="quad colored" d="M32.0063 13.4141H11.0063V41.4141H32.0063V13.4141Z" fill="#E6E5E8"/>`); 
        } else {
          paths.push(`<path class="quad" d="M32.0063 13.4141H11.0063V41.4141H32.0063V13.4141Z" fill="#E6E5E8"/>`); 
        } 
        break;
      case 1:
        if (i < num * 3) {
          paths.push(`<path class="quad colored" d="M56.2695 13.4141H35.2695V41.4141H56.2695V13.4141Z" fill="#E6E5E8"/>`); 
        } else {
          paths.push(`<path class="quad" d="M56.2695 13.4141H35.2695V41.4141H56.2695V13.4141Z" fill="#E6E5E8"/>`); 
        }
        break;
      case 2:
        if (i < num * 3) {
          paths.push(`<path class="quad colored" d="M80.3275 13.4141H59.3275V41.4141H80.3275V13.4141Z" fill="#E6E5E8"/>`); 
        } else {
          paths.push(`<path class="quad" d="M80.3275 13.4141H59.3275V41.4141H80.3275V13.4141Z" fill="#E6E5E8"/>`); 
        }
        break;
      case 3:
        if (i < num * 3) {
          paths.push(`<path class="quad colored" d="M104.386 13.4141H83.3858V41.4141H104.386V13.4141Z" fill="#E6E5E8"/>`); 
        } else {
          paths.push(`<path class="quad" d="M104.386 13.4141H83.3858V41.4141H104.386V13.4141Z" fill="#E6E5E8"/>`); 
        }
        break;
      case 4:
        if (i < num * 3) {
          paths.push(`<path class="quad colored" d="M128.444 13.4141H107.444V41.4141H128.444V13.4141Z" fill="#E6E5E8"/>`); 
        } else {
          paths.push(`<path class="quad" d="M128.444 13.4141H107.444V41.4141H128.444V13.4141Z" fill="#E6E5E8"/>`); 
        }
        break;
      case 5:
        if (i < num * 3) {
          paths.push(`<path class="quad colored" d="M152.502 13.4141H131.502V41.4141H152.502V13.4141Z" fill="#E6E5E8"/>`); 
        } else {
          paths.push(`<path class="quad" d="M152.502 13.4141H131.502V41.4141H152.502V13.4141Z" fill="#E6E5E8"/>`); 
        }
        break;
      case 6:
        if (i < num * 3) {
          paths.push(`<path class="quad colored" d="M176.561 13.4141H155.561V41.4141H176.561V13.4141Z" fill="#E6E5E8"/>`); 
        } else {
          paths.push(`<path class="quad" d="M176.561 13.4141H155.561V41.4141H176.561V13.4141Z" fill="#E6E5E8"/>`); 
        }
        break;
      case 7:
        if (i < num * 3) {
          paths.push(`<path class="quad colored" d="M200.618 13.4141H179.618V41.4141H200.618V13.4141Z" fill="#E6E5E8"/>`); 
        } else {
          paths.push(`<path class="quad" d="M200.618 13.4141H179.618V41.4141H200.618V13.4141Z" fill="#E6E5E8"/>`); 
        }
        break;
      case 8:
        if (i < num * 3) {
          paths.push(`<path class="quad colored" d="M224.677 13.4141H203.677V41.4141H224.677V13.4141Z" fill="#E6E5E8"/>`); 
        } else {
          paths.push(`<path class="quad" d="M224.677 13.4141H203.677V41.4141H224.677V13.4141Z" fill="#E6E5E8"/>`); 
        } 
        break;
      case 9:
        if (i < num * 3) {
          paths.push(`<path class="quad colored" d="M248.735 13.4141H227.735V41.4141H248.735V13.4141Z" fill="#E6E5E8"/>`); 
        } else {
          paths.push(`<path class="quad" d="M248.735 13.4141H227.735V41.4141H248.735V13.4141Z" fill="#E6E5E8"/>`); 
        }
        break;
      case 10:
        if (i < num * 3) {
          paths.push(`<path class="quad colored" d="M272.793 13.4141H251.793V41.4141H272.793V13.4141Z" fill="#E6E5E8"/>`); 
        } else {
          paths.push(`<path class="quad" d="M272.793 13.4141H251.793V41.4141H272.793V13.4141Z" fill="#E6E5E8"/>`); 
        }
        break;
      case 11:
        if (i < num * 3) {
          paths.push(`<path class="quad colored" d="M296.852 13.4141H275.852V41.4141H296.852V13.4141Z" fill="#E6E5E8"/>`); 
        } else {
          paths.push(`<path class="quad" d="M296.852 13.4141H275.852V41.4141H296.852V13.4141Z" fill="#E6E5E8"/>`); 
        }
        break;
    }

  }

  return paths.join('');
}
