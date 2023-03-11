import {
  generateRandomNumber, getAnswer, checkIsWin, askQuestion, isCorrect,
} from '../src/index.js';

import checkIsEven from '../src/even.js';

const evenGame = (userName) => {
  askQuestion('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;

  while (count < 3 && count !== false) {
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);

    const correctAnswer = checkIsEven(randomNumber);
    const answer = getAnswer('Your answer: ');
    count = isCorrect(correctAnswer, answer, count, userName);
  }
  checkIsWin(count, userName);
};

export default evenGame;
