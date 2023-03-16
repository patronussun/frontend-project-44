import readlineSync from 'readline-sync';

import {
  checkIsWin,
  isCorrect,
} from '../index.js';

import getRandomInt from '../utils.js';
import greetingUser from '../cli.js';

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

const skipNumber = (skipIndex, progression) => {
  const copy = [...progression];
  copy[skipIndex] = '..';
  return copy.join(' ');
};

console.log('Welcome to the Brain Games!');
const userName = greetingUser();

const progressionGame = () => {
  console.log('What number is missing in the progression?');
  let count = 0;

  while (count < 3 && count !== false) {
    const progression = generateProgression();
    const skipIndex = getRandomInt(progression.length);
    const correctAnswer = progression[skipIndex];

    const skipped = skipNumber(skipIndex, progression);
    console.log(`Question: ${skipped}`);

    const answer = Number(readlineSync.question('Your answer: '));
    count = isCorrect(correctAnswer, answer, count, userName);
  }
  checkIsWin(count, userName);
};

export default progressionGame;
