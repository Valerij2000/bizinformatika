const mainSection = document.querySelector('.main'); 

export function changeBackground(prev, next) {
  mainSection.classList.remove(prev);
  mainSection.classList.add(next);
}