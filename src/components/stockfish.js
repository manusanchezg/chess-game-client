var wasmSupported =
  typeof WebAssembly === "object" &&
  WebAssembly.validate(
    Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00)
  );

var stockfish = new Worker(
  wasmSupported ? "stockfish.wasm.js" : "stockfish.js"
);

stockfish.postMessage('go depth 15')

stockfish.onmessage = function(event) {
  console.log(event.data);
};

stockfish.addEventListener("message", function (e) {
  console.log(e.data);
});