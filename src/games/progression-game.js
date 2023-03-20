import runGame from '../index.js';
import getRandomInt from '../utils.js';

const generateProgression = () => {
  const firstNumber = getRandomInt(20);
  const step = getRandomInt(1, 10);
  const progressionLength = getRandomInt(5, 11);
  let result = [firstNumber];

  for (let i = 1; i < progressionLength; i += 1) {
    const nextNumber = result[i - 1] + step;
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
  const progression = generateProgression();
  const skipIndex = getRandomInt(progression.length);

  const correctAnswer = progression[skipIndex].toString();
  const question = skipNumberInProgression(progression, skipIndex);

  return [question, correctAnswer];
};

const progressionGame = () => {
  const gameDescription = 'What number is missing in the progression?';
  runGame(gameDescription, setupGame);
};

export default progressionGame;
