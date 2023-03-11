import {
  generateRandomNumber,
  getAnswer,
  checkIsWin,
  askQuestion,
  isCorrect,
} from './index.js';

function getRandomInt(min, max) {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

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
  askQuestion('Find the greatest common divisor of given numbers.');
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
