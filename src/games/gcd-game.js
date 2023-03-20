import runGame from '../index.js';
import getRandomInt from '../utils.js';

const DEFAULT_RESULT = 1;

const generateNumbers = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  return [firstNumber, secondNumber].join(' ');
};

const calculateResult = (numbers) => {
  const [first, second] = numbers.split(' ');
  const isFirstBigger = Number(first) > Number(second);
  const smallNumber = isFirstBigger ? Number(second) : Number(first);
  const bigNumber = isFirstBigger ? Number(first) : Number(second);

  for (let i = smallNumber; i > 0; i -= 1) {
    if ((bigNumber % i === 0) && (smallNumber % i === 0)) {
      return i;
    }
  }

  return DEFAULT_RESULT;
};

const setupGame = () => {
  const question = generateNumbers();
  const correctAnswer = calculateResult(question).toString();

  return [question, correctAnswer];
};

const gcdGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  runGame(gameDescription, setupGame);
};

export default gcdGame;
