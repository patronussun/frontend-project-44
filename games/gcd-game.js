import {
  getAnswer,
  checkIsWin,
  askQuestion,
  isCorrect,
} from '../src/index.js';

import { generateNumbers, calculateResult } from '../src/gcd.js';

const gcdGame = (userName) => {
  askQuestion('Find the greatest common divisor of given numbers.');
  let count = 0;

  while (count < 3 && count !== false) {
    const numbers = generateNumbers();
    console.log(`Question: ${numbers[0]} ${numbers[1]}`);

    const correctAnswer = calculateResult(numbers);
    const answer = Number(getAnswer('Your answer: '));
    count = isCorrect(correctAnswer, answer, count, userName);
  }
  checkIsWin(count, userName);
};

export default gcdGame;
