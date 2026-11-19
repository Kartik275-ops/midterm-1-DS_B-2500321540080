
console.log("1. Start");

setTimeout(() => {
    console.log("2. SetTimeout");
}, 0);

setImmediate(() => {
    console.log("3. SetImmediate");
});

process.nextTick(() => {
    console.log("4. Process NextTick");
});

console.log("5. End");
