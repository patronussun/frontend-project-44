import readlineSync from 'readline-sync';

import {
  checkIsWin,
  askQuestion,
  isCorrect,
} from '../index.js';

import {
  generateExpression,
  calculateResult,
} from '../calculations.js';

import greetingUser from '../cli.js';

console.log('Welcome to the Brain Games!');
const userName = greetingUser();

const calcGame = () => {
  askQuestion('What is the result of the expression?');
  let count = 0;

  while (count < 3 && count !== false) {
    const expression = generateExpression();
    console.log(`Question: ${expression}`);

    const correctAnswer = calculateResult(expression);
    const answer = Number(readlineSync.question('Your answer: '));
    count = isCorrect(correctAnswer, answer, count, userName);
  }
  checkIsWin(count, userName);
};

export default calcGame;
