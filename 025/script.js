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

function getDigitCount(num) {
    num = BigInt(Math.trunc(Math.abs(num)));
    let i = 0;
    while (num >= 1n) {
        i++;
        num /= 10n;
    }
    return i;
}

let generator = fibonacciGen();
let i = 0;
for (; i < 1400; i++) {
    let fibo = generator.next().value;
    // console.log(`${fibo}: ${getDigitCount(fibo)} digits`);
    if (getDigitCount(fibo) === 1000) {
        console.log(`found: ${fibo}`);
    }
}
console.log(i);

// console.time("Function 1");
// console.timeEnd("Function 1");