"use strict";
console.log("script.js: flotation device");

function range(start, end, step=1) {
    for (let item of arguments) {
        if (item < 0) throw new Error("Negative number in range function");
    }

    let isReverse = false;
    if (end == null) {
        end = start;
        start = 0;
    } else if (end < start) {
        [start, end] = [end, start]; // ES6 destructuring instead of creating temp value
        isReverse = true;
    }

    let arr = [];
    while (start < end) {
        arr.push(start);
        start += step;
    }

    return isReverse ? arr.reverse() : arr;
}

let squareSum = range(1,101);
let sumSquare = squareSum.map(item => item * item);
console.log(Math.abs(
    sumSquare.reduce((acc, val) => val + acc, 0) - 
    Math.pow(squareSum.reduce((acc, val) => val + acc, 0), 2)
));