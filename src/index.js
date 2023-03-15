const incorrectAnswer = (answer, correctAnswer, userName) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
};

const checkIsWin = (count, userName) => {
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

const askQuestion = (question) => {
  console.log(question);
};

const isCorrect = (correctAnswer, answer, count, userName) => {
  const result = count;
  if (answer === correctAnswer) {
    console.log('Correct!');
    return result + 1;
  }

  incorrectAnswer(answer, correctAnswer, userName);
  return false;
};

const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

export {
  checkIsWin, askQuestion, isCorrect, getRandomInt,
};
