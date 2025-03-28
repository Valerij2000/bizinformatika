const images = [
  "/public/img/a3.webp",
  "/public/img/a4.webp",
  "/public/img/b1.webp",
  "/public/img/b2.webp",
  "/public/img/b3.webp",
  "/public/img/b4.webp",
  "/public/img/final-earth.png",
  "/public/img/player_1.png",
  "/public/img/player_2.png",
];

function showError(errorMessage, src) {
  const startBtn = document.querySelector('#start-btn');
  const typedText = document.querySelector('.typed-text');
  startBtn.disabled = true;
  typedText.innerHTML = errorMessage;
  console.error(`Ошибка загрузки: ${src}`);
}

export function preloadImages(callback) {
  let loadedCount = 0;
  const loadedImages = {};

  images.forEach((src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      loadedImages[src] = img;
      loadedCount++;
      if (loadedCount === images.length) callback(loadedImages);
    };
    img.onerror = () => {
      showError(`Ошибка загрузки =(`, src);
    };
  });
}