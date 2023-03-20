import readlineSync from 'readline-sync';
import greetingUser from './cli.js';

const checkIsWin = (count, userName) => {
  const countWins = 3;
  if (count === countWins) {
    console.log(`Congratulations, ${userName}!`);
  }
};

const isCorrect = (correctAnswer, answer, count, userName) => {
  const result = count;
  if (answer === correctAnswer) {
    console.log('Correct!');
    return result + 1;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
  return false;
};

const runGame = (gameDescription, setupGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = greetingUser();
  console.log(gameDescription);
  let countRightAnswers = 0;

  while (countRightAnswers < 3 && countRightAnswers !== false) {
    const [question, correctAnswer] = setupGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    countRightAnswers = isCorrect(correctAnswer, answer, countRightAnswers, userName);
  }
  checkIsWin(countRightAnswers, userName);
};

export default runGame;
