import runGame from '../index.js';
import getRandomInt from '../utils.js';

const checkIsEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const setupGame = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = checkIsEven(question);

  return [question, correctAnswer];
};

const evenGame = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  runGame(gameDescription, setupGame);
};

export default evenGame;
