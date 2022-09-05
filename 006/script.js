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