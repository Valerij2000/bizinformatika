const main = new Audio('../sounds/maintheme.mp3');
main.volume = 0.2;
main.load();

const button = new Audio('../sounds/button.mp3');
button.volume = .8;
button.load();

const correct = new Audio('../sounds/correct.mp3');
correct.volume = .6;
correct.load();

const incorrect = new Audio('../sounds/incorrect.mp3');
incorrect.volume = .8;
incorrect.load();

const win = new Audio('../sounds/win.mp3');
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