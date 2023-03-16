const checkIsWin = (count, userName) => {
  if (count === 3) {
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

export {
  checkIsWin, isCorrect,
};
