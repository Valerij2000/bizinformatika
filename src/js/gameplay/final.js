import { startScreen } from '../templates/startScreen';
import { changeBackground } from './utils';
import { startgame } from './startgame';
import { sounds } from '../sounds';
import { finishedPatientOneAnalitics, finishedPatientTwoAnalitics } from '../analitics';


export function final() {
  const mainSection = document.querySelector('.main'); 
  if (window.appState.player == 0) finishedPatientOneAnalitics();
  if (window.appState.player == 1) finishedPatientTwoAnalitics();

  const downloadBtn = document.querySelector('#downloadDoc');
  const startAgainBtn = document.querySelector('#startgame');

  downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = './docs/A5.pdf';
    link.download = 'gastro.pdf';
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