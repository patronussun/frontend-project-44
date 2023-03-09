import readlineSync from 'readline-sync';

const getAnswer = (text) => {
  const answer = readlineSync.question(text);
  return answer;
};

const generateRandomNumber = (max = 100) => Math.floor(Math.random() * max);

const isCorrect = (number, answer, count, userName) => {
  const result = count;
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct!');
    return result + 1;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
  return false;
};

const checkIsWin = (count, userName) => {
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

const evenGame = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;

  while (count < 3 && count !== false) {
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);

    const answer = getAnswer('Your answer: ');
    count = isCorrect(randomNumber, answer, count, userName);
  }

  checkIsWin(count, userName);
};

export default evenGame;
