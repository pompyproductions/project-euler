"use strict";
console.log("script.js: flotation device");

function* factorialGen(num=Infinity) {
    let prev = 1;
    for (let i=1; i < num; i++) {
        prev *= i;
        yield prev; 
    }
}

const generator = factorialGen(10);
for (let factor of generator) {
    console.log(factor);
}


// console.time("Function 1");
// console.timeEnd("Function 1");