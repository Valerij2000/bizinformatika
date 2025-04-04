import { playerScreen } from '../templates/playerScreen';
import { modals } from './modals';
import { gameplay } from './gameplay';
import { changeBackground, typewriter } from './utils';
import { sounds } from '../sounds';

export function startgame() {

  window.appState = {
    player: 0,
    currentScreen: 0,
    muted: false,
    counts: {
      A: 0,
      B: 0,
      C: 0,
      D: 0
    },
    telegramJoined: false
  }

  modals();
  typewriter();
  const startbtn = document.querySelector('#start-btn');
  startbtn.addEventListener('click', startbtnHandler, {once: true});

}

function startbtnHandler(e) {

  e.preventDefault();
  if (!window.appState.muted) {
    sounds.button.play();
    sounds.main.play();
  }

  const mainSection = document.querySelector('.main'); 
  mainSection.innerHTML = playerScreen;
  sounds.soundBtnCheck();
  changeBackground('startback', 'gameplayback');

  const choosePlayerOne = document.querySelector('#player1');
  const choosePlayerTwo = document.querySelector('#player2');

  choosePlayerOne.addEventListener('click', playerBtnHandler, {once: true});
  choosePlayerTwo.addEventListener('click', playerBtnHandler, {once: true});
}

function playerBtnHandler(e) {
  if (!window.appState.muted) {
    sounds.button.play();    
  }

  const btn = e.target.closest('.btn-playerchoose');

  if (btn.id==='player1') {
    window.appState.player = 0;
  }

  if (btn.id==='player2') {
    window.appState.player = 1;
  }

  gameplay();
}

