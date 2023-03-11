import {
  generateRandomNumber,
  getAnswer,
  checkIsWin,
  askQuestion,
  isCorrect,
} from '../src/index.js';

import {
  generateProgression,
  skipNumber,
} from '../src/progressions.js';

const progressionGame = (userName) => {
  askQuestion('What number is missing in the progression?');
  let count = 0;

  while (count < 3 && count !== false) {
    const progression = generateProgression();
    const skipIndex = generateRandomNumber(progression.length);
    const correctAnswer = progression[skipIndex];

    const skipped = skipNumber(skipIndex, progression);
    console.log(`Question: ${skipped}`);

    const answer = Number(getAnswer('Your answer: '));
    count = isCorrect(correctAnswer, answer, count, userName);
  }
  checkIsWin(count, userName);
};

export default progressionGame;
