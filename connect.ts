const port = Deno.args[0];


const output = await Deno.open(port);
const decoder = new TextDecoderStream();
output.readable.pipeTo(decoder.writable);
for await (const data of output.readable) {
    Deno.write(0, data);
}
