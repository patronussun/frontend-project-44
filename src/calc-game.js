import {
  generateRandomNumber,
  getAnswer,
  checkIsWin,
  askQuestion,
  isCorrect,
} from './index.js';

const chooseMaths = () => {
  const maths = ['+', '-', '*'];
  const random = generateRandomNumber(3);
  return maths[random];
};

const generateExpression = () => {
  const firstNumber = generateRandomNumber(10);
  const secondNumber = generateRandomNumber(10);
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

const calcGame = (userName) => {
  askQuestion('What is the result of the expression?');
  let count = 0;

  while (count < 3 && count !== false) {
    const expression = generateExpression();
    console.log(`Question: ${expression}`);

    const correctAnswer = calculateResult(expression);
    const answer = Number(getAnswer('Your answer: '));
    count = isCorrect(correctAnswer, answer, count, userName);
  }
  checkIsWin(count, userName);
};

export default calcGame;
