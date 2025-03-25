const idToCategory = {
  0: "A",
  1: "B",
  2: "C",
  3: "D"
};

function handleClickTracker(id) {
  const buttonId = id;
  const category = idToCategory[buttonId]; // Переводим число в букву категории

  if (category) {
    window.appState.counts[category]++;
  }
}

function updateFinalResult(player) {
  const maxCategory = Object.keys(window.appState.counts).reduce((a, b) => window.appState.counts[a] > window.appState.counts[b] ? a : b); // Определяем самую популярную категорию
  let resultText, disclaimerText;

  if (player === 0) {
    resultText = {
      A: "Ты обожаешь комфорт, но инновации требуют гибкости!",
      B: "Ты прагматик – можешь быть крутым менеджером в инноватике!",
      C: "Ты прирожденный новатор! 🚀 Добро пожаловать в будущее!",
      D: "Ты стратег, который делает инновации реальными!"
    };
    disclaimerText = "Инноватика";
  } else {
    resultText = {
      A: "Ты любишь комфорт и стабильность, но бизнес-информатика требует гибкости!",
      B: "Ты аналитик по натуре, а значит, тебе точно подойдет эта специальность!",
      C: "Ты инноватор! В бизнес-информатике такие люди создают будущее.",
      D: "Ты прирожденный стратег и управленец – бизнес-информатика твой путь!"
    };
    disclaimerText = "Бизнес-информатика";
  }

  document.getElementById("quiz-result").textContent = resultText[maxCategory];
  document.getElementById("quiz-disclaimer").textContent = disclaimerText;
}

export {
  handleClickTracker,
  updateFinalResult
};