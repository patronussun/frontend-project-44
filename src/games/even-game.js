import runGame from '../index.js';
import getRandomInt from '../utils.js';

const checkIsEven = (number) => (number % 2 === 0);

const setupGame = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = checkIsEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  runGame(gameDescription, setupGame);
};
