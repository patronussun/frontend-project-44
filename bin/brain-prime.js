#!/usr/bin/env node

import greetingUser from '../src/cli.js';
import primeGame from '../games/praim-game.js';

console.log('Welcome to the Brain Games!');
const userName = greetingUser();

primeGame(userName);
