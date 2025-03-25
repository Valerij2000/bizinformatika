import { startScreen } from '../templates/startScreen';
import { updateFinalResult } from './quizTracker';
import { changeBackground } from './utils';
import { startgame } from './startgame';
import { sounds } from '../sounds';

export function final(player) {
  const mainSection = document.querySelector('.main'); 

  const downloadBtn = document.querySelector('#downloadDoc');
  const startAgainBtn = document.querySelector('#startgame');

  updateFinalResult(player);

  downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    if (player === 0) {
      link.href = './docs/innovation.pdf';
      link.download = 'innovation.pdf';
    } else {
      link.href = './docs/business.pdf';
      link.download = 'business.pdf';
    }   
    link.click(); 
    if (!window.appState.muted) {
      sounds.button.play();
    }
  }, {once: true});

  startAgainBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mainSection.innerHTML = startScreen;
    changeBackground('finalback', 'startback');
    if (!window.appState.muted) {
      sounds.button.play();
    }
    startgame();
  }, {once: true});
}