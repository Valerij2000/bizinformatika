import { gameScreen } from '../templates/gameScreen';
import { finalScreen } from '../templates/finalScreen';
import { changeBackground } from './utils';
import { data } from '../bd';
import { final } from './final';
import { sounds } from '../sounds';



export function gameplay() {
  
  const mainSection = document.querySelector('.main'); 
  
  // не выиграли ли мы
  if (window.appState.currentScreen === 4) {
    // console.log('win!');
    changeBackground('gameplayback', 'finalback');
    mainSection.innerHTML = finalScreen;
    final();
    if (!window.appState.muted) {
      sounds.win.play();
    }

  } else {
    // отрисовываем экран
    mainSection.innerHTML = gameScreen(window.appState.player, window.appState.currentScreen);
    sounds.soundBtnCheck();
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => answer.addEventListener('click', answerBtnHandler, {once: true}));
  }
}

function answerBtnHandler(e) {
  const popupErrorContent = document.querySelector('.popupErrorContent');
  const PopupSuccessContent = document.querySelector('.PopupSuccessContent');


  e.preventDefault();
  
  const answer = e.target.closest('.answer');
  clearAnswers();

  if (answer.id == data[window.appState.player][window.appState.currentScreen].correct) {    
    answer.classList.add('correct');
    // block
    disableAnswers();


    if (!window.appState.muted) {
      sounds.correct.play();
    }
    svgColor();

    setTimeout(() => {      
      PopupSuccessContent.innerHTML = data[window.appState.player][window.appState.currentScreen].popup.correct;
      MicroModal.show("modal-success");
      window.appState.currentScreen += 1;
    }, 900);


  } else {

    answer.classList.add('incorrect');
    if (!window.appState.muted) {
      sounds.incorrect.play();
    }
    popupErrorContent.innerHTML = data[window.appState.player][window.appState.currentScreen].popup.incorrect;
    MicroModal.show("modal-error");
  }
}

function clearAnswers() {
  const answers = document.querySelectorAll('.answer');
  answers.forEach(answer => {
    answer.classList.remove('correct');
    answer.classList.remove('incorrect');
  })
}

function disableAnswers() {
  const answers = document.querySelectorAll('.answer');
  answers.forEach(answer => {
    answer.setAttribute('disabled', true);
  })
}

function svgColor() {
  const quads = document.querySelectorAll('.quad');
  
  let time = 0;
  
  for (let i = window.appState.currentScreen * 3; i < window.appState.currentScreen * 3 + 3; i++) {
    time += 300;
    setTimeout(() => {
      quads[i].classList.add('colored');
    }, time);
  }
    
}

