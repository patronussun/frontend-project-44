import {
  generateRandomNumber,
  getAnswer,
  checkIsWin,
  askQuestion,
  isCorrect,
} from './index.js';

const generateNumbers = () => {
  const firstNumber = generateRandomNumber(100);
  const secondNumber = generateRandomNumber(100);
  return [firstNumber, secondNumber];
};

const calculateResult = (numbers) => {
  let bigNumber = 0;
  let smallNumber = 0;
  if (numbers[0] > numbers[1]) {
    [bigNumber, smallNumber] = numbers;
  }
  if (numbers[0] <= numbers[1]) {
    [smallNumber, bigNumber] = numbers;
  }

  if (bigNumber % smallNumber === 0) {
    return smallNumber;
  }
  for (let i = smallNumber; i > 0; i -= 1) {
    if ((bigNumber % i === 0) && (smallNumber % i === 0)) {
      return i;
    }
  }
  return 1;
};

const gcdGame = (userName) => {
  askQuestion('Find the greatest common divisor of given numbers.');
  let count = 0;

  while (count < 3 && count !== false) {
    const numbers = generateNumbers();
    console.log(`Question: ${numbers}`);

    const correctAnswer = calculateResult(numbers);
    const answer = Number(getAnswer('Your answer: '));
    count = isCorrect(correctAnswer, answer, count, userName);
  }
  checkIsWin(count, userName);
};

export default gcdGame;