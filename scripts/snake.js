export const SNAKE_SPEED = 2; // Snake will move 2 times per/sec

const snakeBody = [
  { x: 15, y: 15 },
  { x: 16, y: 15 },
  { x: 17, y: 15 },
  { x: 18, y: 15 },
  { x: 19, y: 15 },
]; // position snake in the middle of the screen

/*
 * Add 1 to x to move up
 */
export const update = () => {
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    // take the last element and assign it to the current position.
    // move snake to the position of it's parent
    snakeBody[i + 1] = { ...snakeBody[i] }; // spreading the array will create a duplicate of the snake at i and set it to i+1
    console.log(snakeBody[i + 1]);
  }

  snakeBody[0].x += 0;
  snakeBody[0].y += 1;
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