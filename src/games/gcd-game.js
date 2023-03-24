import runGame from '../index.js';
import getRandomInt from '../utils.js';

const getGCD = (first, second) => {
  const isFirstBigger = first > second;
  const smallNumber = isFirstBigger ? second : first;
  const bigNumber = isFirstBigger ? first : second;
  const rem = bigNumber % smallNumber;

  if (rem % smallNumber !== 0) {
    return getGCD(rem, smallNumber);
  }
  return smallNumber;
};

const setupGame = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const question = [firstNumber, secondNumber].join(' ');

  const correctAnswer = getGCD(firstNumber, secondNumber).toString();

  return [question, correctAnswer];
};

export default () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  runGame(gameDescription, setupGame);
};
