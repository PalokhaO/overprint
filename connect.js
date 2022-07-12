import { SerialPort } from "serialport"
import * as readline from "readline";

const port = new SerialPort({
    path: process.argv[2],
    baudRate: 115200,
    endOnClose: false,
});

const rl = readline.createInterface(port);
rl.on("line", console.log);
