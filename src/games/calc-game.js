import runGame from '../index.js';
import getRandomInt from '../utils.js';

const chooseMaths = () => {
  const maths = ['+', '-', '*'];
  const indexRandomMath = getRandomInt(maths.length);
  return maths[indexRandomMath];
};

const generateExpression = () => {
  const firstNumber = getRandomInt(10);
  const secondNumber = getRandomInt(10);
  const choosenMath = chooseMaths();
  const expression = `${firstNumber} ${choosenMath} ${secondNumber}`;
  return expression;
};

const calculateResult = (expression) => {
  const [firstNumber, choosenMath, secondNumber] = expression.split(' ');
  let result;

  if (choosenMath === '+') {
    result = Number(firstNumber) + Number(secondNumber);
  }
  if (choosenMath === '-') {
    result = Number(firstNumber) - Number(secondNumber);
  }
  if (choosenMath === '*') {
    result = Number(firstNumber) * Number(secondNumber);
  }
  return result.toString();
};

const setupGame = () => {
  const question = generateExpression();
  const correctAnswer = calculateResult(question);

  return [question, correctAnswer];
};

const calcGame = () => {
  const gameDescription = 'What is the result of the expression?';
  runGame(gameDescription, setupGame);
};

export default calcGame;
