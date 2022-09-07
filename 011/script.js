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

console.log(PROBLEM_INPUT);

let largest = [];

// check horizontals
for (let y = 0; y < PROBLEM_INPUT.length; y++) {
    for (let x = 0; x <= PROBLEM_INPUT[y].length - 4; x++) {
        console.log(getLine(PROBLEM_INPUT, x, y, "h"));
    }
}
for (let y = 0; y <= PROBLEM_INPUT.length - 4; y++) {
    for (let x = 0; x < PROBLEM_INPUT[y].length; x++) {
        console.log(getLine(PROBLEM_INPUT, x, y, "v"));
    }
}
for (let y = 0; y <= PROBLEM_INPUT.length - 4; y++) {
    for (let x = 0; x <= PROBLEM_INPUT[y].length - 4; x++) {
        console.log(getLine(PROBLEM_INPUT, x, y, "d"));
    }
}




// console.log(getLine(PROBLEM_INPUT, 0, 0, "h"));
// console.log(getLine(PROBLEM_INPUT, 0, 0, "v"));
// console.log(getLine(PROBLEM_INPUT, 0, 0, "d"));
// console.log(getLine(PROBLEM_INPUT, 0, 0));

// console.time();
// console.timeEnd();

// for (let y; y < arr.length, y++) {
//     for (let x)
// }