#!/usr/bin/env node

import greetingUser from '../src/cli.js';
import progressionGame from '../games/progression-game.js';

console.log('Welcome to the Brain Games!');
const userName = greetingUser();

progressionGame(userName);
