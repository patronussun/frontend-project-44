import readlineSync from 'readline-sync';

import {
  checkIsWin,
  askQuestion,
  isCorrect,
} from '../index.js';

import { generateNumbers, calculateResult } from '../gcd.js';

import greetingUser from '../cli.js';

console.log('Welcome to the Brain Games!');
const userName = greetingUser();

const gcdGame = () => {
  askQuestion('Find the greatest common divisor of given numbers.');
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
