import * as readline from 'node:readline';
import { stdin, stdout, argv } from 'node:process';
import { createReadStream } from 'node:fs';

const port = argv[2];

const rl = readline.createInterface({input: createReadStream(port).resume() });
rl.on('line', line => console.log(line));
