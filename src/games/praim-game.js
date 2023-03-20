import runGame from '../index.js';
import getRandomInt from '../utils.js';

const isPrime = (number) => {
  if (number === 1) {
    return 'yes';
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getRandomNumber = () => getRandomInt(1, 100);

const primeGame = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(gameDescription, getRandomNumber, isPrime);
};

export default primeGame;
