import MicroModal from 'micromodal';
import { gameplay } from './gameplay';
import { sounds } from '../sounds';

MicroModal.init();
// MicroModal.show("modal-success");
// MicroModal.show("modal-error");
// MicroModal.show("modal-winner");
// MicroModal.show("modal-ai");

// <img class="modal__ico" src="./img/ico-incorrect.svg" alt="Неправильно">
// <h3 class="modal__header header-incorrect">Неверно!</h3>

// <img class="modal__ico" src="./img/ico-correct.svg" alt="Правильно">
// <h3 class="modal__header header-correct">Верно!</h3>


export function modals() {
  const html = document.querySelector('body');
  html.innerHTML += `
  <div class="modal micromodal-slide" id="modal-error" aria-hidden="true">
		<div class="modal__overlay" tabindex="-1">
			<div class="modal__container">
				<div class="modal__head">
					<div class="modal__close error"></div>
				</div>
				<div class="modal__content">					
					<div class="popupErrorContent modal__message"></div>
					<button class="modal__button btn green-btn error">Понятно</button>
				</div>
			</div>
		</div>
	</div>

	<div class="modal micromodal-slide" id="modal-success" aria-hidden="true">
		<div class="modal__overlay" tabindex="-1">
			<div class="modal__container">
				<div class="modal__head">
					<div class="modal__close success"></div>
				</div>
				<div class="modal__content">
					<div class="PopupSuccessContent modal__message"></div>
					<button class="modal__button btn green-btn success">Понятно</button>
				</div>
			</div>
		</div>
	</div>

  <div class="modal micromodal-slide" id="modal-winner" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1">
      <div class="modal__container">
        <div class="modal__head">
          <div class="modal__close winner"></div>
        </div>
        <div class="modal__content">
          <div class="modal__message">
            <h2 class="modal__header">Ты почти чемпион!</h2>
            <p class="modal__text">
              🎁 Уже в Telegram? Там чек-лист, советы и 🔑 закрытые инсайды по поступлению в IT
            </p>
            <ul class="modal__list">
              <li class="w60">🔑 Секретные материалы по поступлению</li>
              <li class="w40">🎁 Подарок - чек-лист "5 шагов к успеху в IT"</li>
              <li class="w60">💬 Эксклюзивные советы от студентов</li>
              <li class="w60">🚀 Инсайды от практикующих разработчиков</li>
            </ul>
            <div class="modal__buttons">
              <a href="https://t.me/voity_v_IT_2025" target="_blank" class="btn orange-btn pulse">
                Забрать чек-лист
              </a>
              <button class="modal__button btn green-btn winner">Вернусь позже</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal micromodal-slide" id="modal-ai" aria-hidden="true">
		<div class="modal__overlay" tabindex="-1">
			<div class="modal__container">
				<div class="modal__head">
					<div class="modal__close ai"></div>
				</div>
				<div class="modal__content">
					<iframe class="modal-ai" src="https://www.chatbase.co/chatbot-iframe/LkSoXOrBZdlR67cW0C6aV" width="100%"
			    frameborder="0" allow="microphone"></iframe>
				</div>
			</div>
		</div>
	</div>
  `;

  const modalsSuccess = document.querySelectorAll('.success');  
  const modalsError = document.querySelectorAll('.error');
  const modalsWinner = document.querySelectorAll('.winner');
  const modalsAi = document.querySelectorAll('.ai');

  // modalsSuccess.forEach(success => success.removeEventListener('click', modalSuccessHandler));
  // modalsError.forEach(error => error.removeEventListener('click', modalErrorHandler));


  // getEventListeners

  modalsSuccess.forEach(success => success.addEventListener('click', modalSuccessHandler));
  modalsError.forEach(error => error.addEventListener('click', modalErrorHandler));
  modalsWinner.forEach(winner => winner.addEventListener('click', modalWinnerHandler));
  modalsAi.forEach(ai => ai.addEventListener('click', modalAiHandler));

  function modalSuccessHandler() {        
    MicroModal.close("modal-success");
    if (!window.appState.muted) {
      sounds.button.play();
    }
    // console.log('gameplay');
    gameplay();
  }

  function modalErrorHandler() {
    MicroModal.close("modal-error");
    if (!window.appState.muted) {
      sounds.button.play();
    }
    gameplay();
  }

  function modalWinnerHandler() {
    MicroModal.close("modal-winner");
    if (!window.appState.muted) {
      sounds.button.play();
    }
  }

  function modalAiHandler() {
    MicroModal.close("modal-ai");
    if (!window.appState.muted) {
      sounds.button.play();
    }
  }

}


window.document.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
