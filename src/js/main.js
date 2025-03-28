import '../scss/style.scss';

import DisableDevtool from 'disable-devtool';
import { preloadImages } from './preload';
import { startgame } from './gameplay/startgame';

preloadImages((loadedImages) => {
  startgame();
});

// DisableDevtool({
//   ondevtoolopen: () => {
//     window.location.replace('https://t.me/voity_v_IT_2025');
//   }
// });