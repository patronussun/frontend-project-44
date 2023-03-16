import readlineSync from 'readline-sync';

import {
  checkIsWin,
  isCorrect,
} from '../index.js';

import getRandomInt from '../utils.js';
import greetingUser from '../cli.js';

console.log('Welcome to the Brain Games!');
const userName = greetingUser();

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

const primeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let count = 0;

  while (count < 3 && count !== false) {
    const number = getRandomInt(1, 100);
    const correctAnswer = isPrime(number);

    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');
    count = isCorrect(correctAnswer, answer, count, userName);
  }
  checkIsWin(count, userName);
};

export default primeGame;
