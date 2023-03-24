import readlineSync from 'readline-sync';

const runGame = (gameDescription, setupGame) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  const countFortWin = 3;
  let countRightAnswers = 0;

  while (countRightAnswers < countFortWin && countRightAnswers !== false) {
    const [question, correctAnswer] = setupGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
      countRightAnswers += 1;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`,
      );
      countRightAnswers = false;
    }
  }

  if (countRightAnswers === countFortWin) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default runGame;
