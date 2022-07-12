import { createReadStream, writeFileSync, writeSync } from "fs";

const port = process.argv[2];

const stream = createReadStream(port);

stream.on("data", data => writeSync(0, data));

writeFileSync(port, "M105");
