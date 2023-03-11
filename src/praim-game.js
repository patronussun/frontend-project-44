import {
  getAnswer,
  checkIsWin,
  askQuestion,
  isCorrect,
  getRandomInt,
} from './index.js';

const isPrime = (number) => {
  if (number === 1) {
    return 'yes';
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const primeGame = (userName) => {
  askQuestion('Find the greatest common divisor of given numbers.');
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
