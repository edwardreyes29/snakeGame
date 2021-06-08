import { 
  update as updateSnake, 
  draw as drawSnake,
  SNAKE_SPEED 
} from './snake.js';

import { update as updateFood, draw as drawFood } from './food.js';
/* 
  Set up Game loop 
*/
let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

const main = currentTime => {

  // Requests a new frame 2 times per second
  window.requestAnimationFrame(main);

  // Get the seconds after the last render time.
  const secondsAfterLastRender = (currentTime - lastRenderTime) / 1000;

  // Check if seconds after the last render is less than the time between renders
  if (secondsAfterLastRender < (1 / SNAKE_SPEED)) return;

  console.log(secondsAfterLastRender);

  // Get the last render time
  lastRenderTime = currentTime;

  update(); // update logic for game
  draw(); // draw everything on screen
}

// Calls the main function to update an animation before the next repaint.
window.requestAnimationFrame(main);

const update = () => {
  updateSnake();
  updateFood();
}

const draw = () => {
  gameBoard.innerHTML = ''; // clear gameboard
  drawSnake(gameBoard);
  drawFood(gameBoard);
}