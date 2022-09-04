"use strict";
console.log("script.js: flotation device");

function* fibonacciGen(max, div=1) {
    if (div <= 0) throw new Error("Second parameter must be greater than 0"); 

    let current = 1;
    let next = 2;
    
    while (current < max) {
        if (!(current % div)) yield current;
        [current, next] = [next, next + current];
    }
}

let generator = fibonacciGen(4000000, 2);
let numArray = [];

// alternative method to "div=1" parameter would be to check (item % 2) here
for (let item of generator) {
    numArray.push(item);
}

console.log(numArray);