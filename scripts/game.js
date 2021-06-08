import { 
  update as updateSnake, 
  draw as drawSnake,
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersection
} from './snake.js';

import { update as updateFood, draw as drawFood } from './food.js';

import {outsideGrid } from './grid.js';
/* 
  Set up Game loop 
*/
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

const main = currentTime => {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location = 'https://edwardreyes29.github.io/snakeGame/'; // refresh the page
    }
    return;
  }
  // Requests a new frame 2 times per second
  window.requestAnimationFrame(main);

  // Get the seconds after the last render time.
  const secondsAfterLastRender = (currentTime - lastRenderTime) / 1000;

  // Check if seconds after the last render is less than the time between renders
  if (secondsAfterLastRender < (1 / SNAKE_SPEED)) return;

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
  checkDeath();
}

const draw = () => {
  gameBoard.innerHTML = ''; // clear gameboard
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

const checkDeath = () => {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}