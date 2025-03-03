import mainthemeUrl from '/sounds/maintheme.mp3';
import buttonUrl from '/sounds/button.mp3';
import correctUrl from '/sounds/correct.mp3';
import incorrectUrl from '/sounds/incorrect.mp3';
import winUrl from '/sounds/win.mp3';

const main = new Audio(mainthemeUrl);
main.volume = 0.2;
main.load();

const button = new Audio(buttonUrl);
button.volume = .8;
button.load();

const correct = new Audio(correctUrl);
correct.volume = .6;
correct.load();

const incorrect = new Audio(incorrectUrl);
incorrect.volume = .8;
incorrect.load();

const win = new Audio(winUrl);
win.volume = 0.8;
win.load();

export const sounds = {
  main,
  button,
  correct, 
  incorrect,
  win,
  soundBtnCheck
}

function soundBtnCheck() {
  
  const soundBtns = document.querySelectorAll('#soundBtn');
  soundBtns.forEach(btn => btn.addEventListener('click', () => {
    window.appState.muted = !window.appState.muted;
    if (!window.appState.muted) {
      main.play();
      btn.classList.remove('muted');
    } else {
      main.pause();
      btn.classList.add('muted');
    }
  }))
}