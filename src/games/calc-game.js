import readlineSync from 'readline-sync';
import greetingUser from '../cli.js';
import {
  checkIsWin,
  isCorrect,
} from '../index.js';
import getRandomInt from '../utils.js';

console.log('Welcome to the Brain Games!');
const userName = greetingUser();

const chooseMaths = () => {
  const maths = ['+', '-', '*'];
  const random = getRandomInt(3);
  return maths[random];
};

const generateExpression = () => {
  const firstNumber = getRandomInt(10);
  const secondNumber = getRandomInt(10);
  const expression = `${Number(firstNumber)} ${chooseMaths()} ${Number(secondNumber)}`;
  return expression;
};

const calculateResult = (expression) => {
  const expressionArray = expression.split(' ');
  let result;
  if (expressionArray[1] === '+') {
    result = Number(expressionArray[0]) + Number(expressionArray[2]);
  }
  if (expressionArray[1] === '-') {
    result = Number(expressionArray[0]) - Number(expressionArray[2]);
  }
  if (expressionArray[1] === '*') {
    result = Number(expressionArray[0]) * Number(expressionArray[2]);
  }
  return result;
};

const calcGame = () => {
  console.log('What is the result of the expression?');
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
