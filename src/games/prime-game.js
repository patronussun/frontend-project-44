import runGame from '../index.js';
import getRandomInt from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const setupGame = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(gameDescription, setupGame);
};
