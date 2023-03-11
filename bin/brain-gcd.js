#!/usr/bin/env node

import greetingUser from '../src/cli.js';
import gcdGame from '../src/gcd-game.js';

console.log('Welcome to the Brain Games!');
const userName = greetingUser();

gcdGame(userName);
