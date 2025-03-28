export const playerScreen = `
  <div class="player">
    <button class="player__sound" id="soundBtn"></button>
    <h2 class="main-header player__header">
      Какой специальности ты подходишь больше всего?
    </h2>
    <div class="player__desc">
      Вам предстоит пройти тест, который поможет тебе определиться с выбором.
    </div>
    <div class="player__choose">
      <button id="player1" class="btn-playerchoose player__card card player1">
        <img class="player__back" src="./img/player_1.png" alt="Инноватика">
      </button>
      <button id="player2" class="btn-playerchoose player__card card player2">
        <img class="player__back" src="./img/player_2.png" alt="Бизнес-информатика">
      </button>
    </div>
  </div>
`