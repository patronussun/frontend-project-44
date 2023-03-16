import readlineSync from 'readline-sync';

import {
  checkIsWin, isCorrect,
} from '../index.js';

import getRandomInt from '../utils.js';
import greetingUser from '../cli.js';

console.log('Welcome to the Brain Games!');
const userName = greetingUser();

const checkIsEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;

  while (count < 3 && count !== false) {
    const randomNumber = getRandomInt(100);
    console.log(`Question: ${randomNumber}`);

    const correctAnswer = checkIsEven(randomNumber);
    const answer = readlineSync.question('Your answer: ');
    count = isCorrect(correctAnswer, answer, count, userName);
  }
  checkIsWin(count, userName);
};

export default evenGame;
