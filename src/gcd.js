import { generateRandomNumber } from './index.js';

const DEFAULT_RESULT = 1;

const generateNumbers = () => {
  const firstNumber = generateRandomNumber(100);
  const secondNumber = generateRandomNumber(100);
  return [firstNumber, secondNumber];
};

const calculateResult = ([first, second]) => {
  const isFirstBigger = first > second;
  const smallNumber = isFirstBigger ? second : first;
  const bigNumber = isFirstBigger ? first : second;

  for (let i = smallNumber; i > 0; i -= 1) {
    if ((bigNumber % i === 0) && (smallNumber % i === 0)) {
      return i;
    }
  }

  return DEFAULT_RESULT;
};

export { generateNumbers, calculateResult };
