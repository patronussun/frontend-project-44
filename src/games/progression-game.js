import readlineSync from 'readline-sync';

import {
  checkIsWin,
  askQuestion,
  isCorrect,
} from '../index.js';

import {
  generateProgression,
  skipNumber,
} from '../progressions.js';

import generateRandomNumber from '../utils.js';
import greetingUser from '../cli.js';

console.log('Welcome to the Brain Games!');
const userName = greetingUser();

const progressionGame = () => {
  askQuestion('What number is missing in the progression?');
  let count = 0;

  while (count < 3 && count !== false) {
    const progression = generateProgression();
    const skipIndex = generateRandomNumber(progression.length);
    const correctAnswer = progression[skipIndex];

    const skipped = skipNumber(skipIndex, progression);
    console.log(`Question: ${skipped}`);

    const answer = Number(readlineSync.question('Your answer: '));
    count = isCorrect(correctAnswer, answer, count, userName);
  }
  checkIsWin(count, userName);
};

export default progressionGame;
