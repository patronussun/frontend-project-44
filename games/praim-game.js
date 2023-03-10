import {
  getAnswer,
  checkIsWin,
  askQuestion,
  isCorrect,
  getRandomInt,
} from '../src/index.js';

import isPrime from '../src/prime.js';

const primeGame = (userName) => {
  askQuestion('Answer "yes" if given number is prime. Otherwise answer "no".');
  let count = 0;

  while (count < 3 && count !== false) {
    const number = getRandomInt(1, 100);
    const correctAnswer = isPrime(number);

    console.log(`Question: ${number}`);

    const answer = getAnswer('Your answer: ');
    count = isCorrect(correctAnswer, answer, count, userName);
  }
  checkIsWin(count, userName);
};

export default primeGame;
