import readlineSync from 'readline-sync';

import {
  checkIsWin, askQuestion, isCorrect,
} from '../index.js';

import generateRandomNumber from '../utils.js';
import checkIsEven from '../even.js';
import greetingUser from '../cli.js';

console.log('Welcome to the Brain Games!');
const userName = greetingUser();

const evenGame = () => {
  askQuestion('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;

  while (count < 3 && count !== false) {
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);

    const correctAnswer = checkIsEven(randomNumber);
    const answer = Number(readlineSync.question('Your answer: '));
    count = isCorrect(correctAnswer, answer, count, userName);
  }
  checkIsWin(count, userName);
};

export default evenGame;
