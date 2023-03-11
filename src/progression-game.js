import {
  generateRandomNumber,
  getAnswer,
  checkIsWin,
  askQuestion,
  isCorrect,
  getRandomInt,
} from './index.js';

const generateProgression = () => {
  const firstNumber = generateRandomNumber(20);
  const step = getRandomInt(1, 10);
  const progressionLength = getRandomInt(5, 11);
  let result = [firstNumber];

  for (let i = 1; i < progressionLength; i += 1) {
    const nextNumber = result[i - 1] + step;
    result = [...result, nextNumber];
  }
  return result;
};

const skipNumber = (skipIndex, progression) => {
  const copy = [...progression];
  copy[skipIndex] = '..';
  return copy;
};

const progressionGame = (userName) => {
  askQuestion('Answer "yes" if given number is prime. Otherwise answer "no".');
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
