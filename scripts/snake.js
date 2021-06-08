import { getInputDirection } from "./input.js";
export const SNAKE_SPEED = 3; // Snake will move 2 times per/sec

const snakeBody = [
  { x: 15, y: 15 }
]; // position snake in the middle of the screen

/*
 * Add 1 to y to move down
 * Add -1 to y to move up
 * Add 1 to x to move right
 * Add -1 to x to move left
 */
export const update = () => {
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    // take the last element and assign it to the current position.
    // move snake to the position of it's parent
    snakeBody[i + 1] = { ...snakeBody[i] }; // spreading the array will create a duplicate of the snake at i and set it to i+1
    console.log(snakeBody[i + 1]);
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
} 

export const draw = (gameBoard) => {
  // for every dimension of the snake, create a new div
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  })
} 