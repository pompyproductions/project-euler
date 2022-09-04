"use strict";
console.log("script.js: flotation device");

function range(start, end, step=1) {
    let isReverse = false;
    for (let item of arguments) {
        if (item < 0) throw new Error("Negative number in range function");
    }
    let arr = [];
    if (end == null) {
        console.log("hey");
        end = start;
        start = 0;
    } else if (end < start) {
        [start, end] = [end, start]; // ES6 destructuring instead of creating temp value

        isReverse = true;
    }
    while (start < end) {
        arr.push(start);
        start += step;
    }
    return isReverse ? arr.reverse() : arr;
}

console.log(range(5, 0));