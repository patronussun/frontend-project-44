import {
  generateRandomNumber,
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

export { generateExpression, calculateResult };
