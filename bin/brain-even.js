#!/usr/bin/env node

import greetingUser from '../src/cli.js';
import evenGame from '../src/even-game.js';

console.log('Welcome to the Brain Games!');
const userName = greetingUser();

evenGame(userName);
