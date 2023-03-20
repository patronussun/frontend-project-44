import runGame from '../index.js';
import getRandomInt from '../utils.js';

const checkIsEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const generateRandomNumber = () => getRandomInt(100);

const evenGame = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  runGame(gameDescription, generateRandomNumber, checkIsEven);
};

export default evenGame;
