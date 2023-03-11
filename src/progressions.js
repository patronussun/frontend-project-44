import {
  generateRandomNumber,
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
  return copy.join(' ');
};

export { generateProgression, skipNumber };
