import { appendFileSync, createReadStream, writeFileSync, writeSync } from "fs";

const port = process.argv[2];

const stream = createReadStream(port, {
    autoClose: false,
});

stream.on("data", data => writeSync(0, data));

appendFileSync(port, "M105");
