const images = [
  "/img/a3.webp",
  "/img/a4.webp",
  "/img/b1.webp",
  "/img/b2.webp",
  "/img/b3.webp",
  "/img/b4.webp",
  "/img/final-earth.png",
  "/img/player_1.png",
  "/img/player_2.png",
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