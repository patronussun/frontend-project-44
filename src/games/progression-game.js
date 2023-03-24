import runGame from '../index.js';
import getRandomInt from '../utils.js';

const generateProgression = (firstNumber, step, progressionLength) => {
  let result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const nextNumber = firstNumber + i * step;
    result = [...result, nextNumber];
  }

  return result;
};

const skipNumberInProgression = (progression, skipIndex) => {
  const copy = [...progression];
  copy[skipIndex] = '..';
  return copy.join(' ');
};

const setupGame = () => {
  const firstNumber = getRandomInt(20);
  const step = getRandomInt(1, 10);
  const progressionLength = getRandomInt(5, 11);

  const progression = generateProgression(firstNumber, step, progressionLength);
  const skipIndex = getRandomInt(progression.length);

  const correctAnswer = progression[skipIndex].toString();
  const question = skipNumberInProgression(progression, skipIndex);

  return [question, correctAnswer];
};

export default () => {
  const gameDescription = 'What number is missing in the progression?';
  runGame(gameDescription, setupGame);
};
