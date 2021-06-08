import { onSnake, growSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
const GROWTH_RATE = 1;
let food = {};

const getRandomFoodPosition = () => {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
food = getRandomFoodPosition(); // 0 is out of grid. CSS grid starts at 1.

export const update = () => {
  if (onSnake(food)) {
    growSnake(GROWTH_RATE);
    food = getRandomFoodPosition();
  }
}

export const draw = (gameBoard) => {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}