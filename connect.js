import { SerialPort } from "serialport"
import * as readline from "readline";

const port = new SerialPort({
    path: process.argv[2],
    baudRate: 115200,
    autoOpen: false,
    parity: "none",
    xoff: false,
    xon: false,
    rtsMode: "handshake",
    dataBits: 8,
    stopBits: 1,
});

port.open(() => {
    const rl = readline.createInterface(port);
    rl.on("line", console.log);
    port.write("M105\n");
});
