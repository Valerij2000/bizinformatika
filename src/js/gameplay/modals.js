import MicroModal from 'micromodal';
import { gameplay } from './gameplay';
import { sounds } from '../sounds';

MicroModal.init();
// MicroModal.show("modal-success");
// MicroModal.show("modal-error");


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
					<img class="modal__ico" src="./img/ico-incorrect.svg" alt="Неправильно">
					<h3 class="modal__header header-incorrect">Неверно!</h3>
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
					<img class="modal__ico" src="./img/ico-correct.svg" alt="Правильно">
					<h3 class="modal__header header-correct">Верно!</h3>
					<div class="PopupSuccessContent modal__message"></div>
					<button class="modal__button btn green-btn success">Понятно</button>
					
				</div>
				
			</div>
		</div>
	</div>
  `;

  const modalsSuccess = document.querySelectorAll('.success');  
  const modalsError = document.querySelectorAll('.error');

  // modalsSuccess.forEach(success => success.removeEventListener('click', modalSuccessHandler));
  // modalsError.forEach(error => error.removeEventListener('click', modalErrorHandler));


// getEventListeners

  modalsSuccess.forEach(success => success.addEventListener('click', modalSuccessHandler));
  modalsError.forEach(error => error.addEventListener('click', modalErrorHandler));

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
  }

}


window.document.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
