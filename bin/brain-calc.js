#!/usr/bin/env node

import greetingUser from '../src/cli.js';
import calcGame from '../src/calc-game.js';

console.log('Welcome to the Brain Games!');
const userName = greetingUser();

calcGame(userName);
