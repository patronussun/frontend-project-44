import readlineSync from 'readline-sync';
import greetingUser from '../cli.js';

import {
  checkIsWin,
  isCorrect,
} from '../index.js';

import getRandomInt from '../utils.js';

const DEFAULT_RESULT = 1;

const generateNumbers = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  return [firstNumber, secondNumber];
};

const calculateResult = ([first, second]) => {
  const isFirstBigger = first > second;
  const smallNumber = isFirstBigger ? second : first;
  const bigNumber = isFirstBigger ? first : second;

  for (let i = smallNumber; i > 0; i -= 1) {
    if ((bigNumber % i === 0) && (smallNumber % i === 0)) {
      return i;
    }
  }

  return DEFAULT_RESULT;
};

console.log('Welcome to the Brain Games!');
const userName = greetingUser();

const gcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let count = 0;

  while (count < 3 && count !== false) {
    const numbers = generateNumbers();
    console.log(`Question: ${numbers[0]} ${numbers[1]}`);

    const correctAnswer = calculateResult(numbers);
    const answer = Number(readlineSync.question('Your answer: '));
    count = isCorrect(correctAnswer, answer, count, userName);
  }
  checkIsWin(count, userName);
};

export default gcdGame;
