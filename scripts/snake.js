export const SNAKE_SPEED = 2; // Snake will move 2 times per/sec
const snakeBody = [{ x: 11, y: 11 }]; // position snake in the middle of the screen

export const update = () => {
  console.log('update snake')
} 

export const draw = (gameBoard) => {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.x;
    snakeElement.style.gridColumnStart = segment.y;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  })
} 