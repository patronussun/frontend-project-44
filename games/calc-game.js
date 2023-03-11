import {
  getAnswer,
  checkIsWin,
  askQuestion,
  isCorrect,
} from '../src/index.js';

import {
  generateExpression,
  calculateResult,
} from '../src/calculations.js';

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
