"use strict";
console.log("script.js: flotation device");

function* fibonacciGen(max=Infinity) {
    yield 1;
    yield 1;
    const allFibos = [1, 1];

    for (let i = 0; i < max; i++) {
        let fibo = allFibos[i] + allFibos[i + 1];
        allFibos.push(fibo);
        yield fibo;
    }
}

for (let fibo of fibonacciGen(20)) {
    console.log(fibo);
}

// console.time("Function 1");
// console.timeEnd("Function 1");