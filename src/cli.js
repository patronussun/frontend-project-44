import readlineSync from 'readline-sync';

const greetingUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default greetingUser;
