"use strict";
console.log("script.js: flotation device");

function* fibonacciGen(max) {
    let current = 1;
    let next = 2;
    while (current < max) {
        yield current;
        [current, next] = [next, next + current];
    }
}

let iter = fibonacciGen(20);
let numArray = [];

for (let item of iter) {
    numArray.push(item);
}