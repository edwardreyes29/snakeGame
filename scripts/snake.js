import { getInputDirection } from "./input.js";
export const SNAKE_SPEED = 5; // Snake will move 2 times per/sec
let newSegments = 0;

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
  addSegments();
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

export const growSnake = amount => {
  newSegments += amount;
}

export const onSnake = (position, {ignoreHead = false } = {}) => {
  return snakeBody.some(((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(segment, position);
  }));
}

export const getSnakeHead = () => {
  return snakeBody[0];
}

export const snakeIntersection = () => {
  return onSnake(snakeBody[0], {ignoreHead: true })
}
const equalPositions = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

const addSegments = () => {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0;
}