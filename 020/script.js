"use strict";
console.log("script.js: flotation device");

function* factorialGen(num=Infinity) {
    let prev = 1n;
    for (let i=1n; i <= num; i++) {
        prev *= i;
        yield prev; 
    }
}

const generator = factorialGen(100n);
let factorial = 1;
for (let num of generator) {
    factorial = num;
}
console.log(factorial);

let sum = 0n;
while (factorial >= 1n) {
    sum += factorial % 10n;
    factorial /= 10n;
}
console.log(sum);


// console.time("Function 1");
// console.timeEnd("Function 1");