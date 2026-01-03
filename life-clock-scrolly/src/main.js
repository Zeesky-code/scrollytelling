import '../src/styles/main.scss';
import { initClock, updateClock } from './components/clock.js';
import { initScrolly } from './components/scrolly.js';
import { clockData } from '../data/time-use.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize D3 Clock
  const clockInstance = initClock('#clock');

  // Initial Render (Global)
  updateClock(clockInstance, clockData.global);
  clockInstance.centerLabel.text("GLOBAL");

  // Initialize Scroll triggers
  initScrolly(clockInstance);
});
