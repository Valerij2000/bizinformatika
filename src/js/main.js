import '../scss/style.scss';

import { preloadImages } from './preload';
import { startgame } from './gameplay/startgame';

preloadImages((loadedImages) => {
  startgame();
});