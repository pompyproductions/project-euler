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

function getMultiples(range, ...args) {
    // takes any number of factors
    let result = new Set();
    console.log(args);
    // instead you can use filter
    // and check for !(num % factor1 && num % factor2)
    args.forEach((factor) => {
        console.log(factor);
        range.forEach((num) => {
            if (!(num % factor)) result.add(num);
        })
    });
    return Array.from(result).sort((a, b) => a - b);
}

console.log(getMultiples(range(1000), 3, 5));