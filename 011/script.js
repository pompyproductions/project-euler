"use strict";
console.log("script.js: flotation device");


function getLine(arr, x, y, mode, len=4) {
    const line = [];
    for (let i = 0; i < len; i++) {
        line.push(arr[y][x]);
        if (mode === "h") x++
        else if (mode === "v") y++
        else if (mode === "d") {x++; y++}
        else {return line};
    }
    return line
}

let largest = [];

console.log(PROBLEM_INPUT);
// console.log(getLine(PROBLEM_INPUT, 0, 0, "h"));
// console.log(getLine(PROBLEM_INPUT, 0, 0, "v"));
// console.log(getLine(PROBLEM_INPUT, 0, 0, "d"));
// console.log(getLine(PROBLEM_INPUT, 0, 0));

// console.time();
// console.timeEnd();

// for (let y; y < arr.length, y++) {
//     for (let x)
// }