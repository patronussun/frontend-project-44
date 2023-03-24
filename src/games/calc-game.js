import runGame from '../index.js';
import getRandomInt from '../utils.js';

const calculateResult = (firstNumber, randomMath, secondNumber) => {
  switch (randomMath) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return 'something went wrong';
  }
};

const setupGame = () => {
  const maths = ['+', '-', '*'];
  const indexRandomMath = getRandomInt(maths.length);
  const randomMath = maths[indexRandomMath];

  const firstNumber = getRandomInt(10);
  const secondNumber = getRandomInt(10);
  const question = `${firstNumber} ${randomMath} ${secondNumber}`;

  const correctAnswer = calculateResult(firstNumber, randomMath, secondNumber);

  return [question, correctAnswer.toString()];
};

export default () => {
  const gameDescription = 'What is the result of the expression?';
  runGame(gameDescription, setupGame);
};
