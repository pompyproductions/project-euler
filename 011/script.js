"use strict";
console.log("script.js: flotation device");


function getLine(arr, x, y, mode, len=4) {
    const line = [];
    for (let i = 0; i < len; i++) {
        line.push(arr[y][x]);
        if (mode === "h") x++
        else if (mode === "v") y++
        else if (mode === "d") {x++; y++}
        else if (mode === "-d") {x--; y++}
        else {return line};
    }
    // console.log(line);
    return line
}

// console.log(PROBLEM_INPUT);

let largest = [0, 0, 0, 0];
const multiplyAll = (acc, val) => acc * val;

let test = [1, 2, 3, 4];
console.time();

// check horizontals
for (let y = 0; y < PROBLEM_INPUT.length; y++) {
    for (let x = 0; x <= PROBLEM_INPUT[y].length - 4; x++) {
        const line = getLine(PROBLEM_INPUT, x, y, "h");
        if (line.reduce(multiplyAll, 1) > largest.reduce(multiplyAll, 1)) {
            largest = line;
        }
        // if (x === 16) {console.log(line)} // CORRECT
    }
}

// check verticals
for (let y = 0; y <= PROBLEM_INPUT.length - 4; y++) {
    for (let x = 0; x < PROBLEM_INPUT[y].length; x++) {
        const line = getLine(PROBLEM_INPUT, x, y, "v");
        if (line.reduce(multiplyAll, 1) > largest.reduce(multiplyAll, 1)) {
            largest = line;
        } 
        // if (x === 19) {console.log(line)} // CORRECT
    }
}


// check diagonals
for (let y = 0; y <= PROBLEM_INPUT.length - 4; y++) {
    for (let x = 0; x <= PROBLEM_INPUT[y].length - 4; x++) {
        const line = getLine(PROBLEM_INPUT, x, y, "d");
        if (line.reduce(multiplyAll, 1) > largest.reduce(multiplyAll, 1)) {
            largest = line;
        }
        // if (x === 16) {console.log(line)} // CORRECT
    }
}
for (let y = 0; y <= PROBLEM_INPUT.length - 4; y++) {
    for (let x = 3; x < PROBLEM_INPUT.length; x++) {
        const line = getLine(PROBLEM_INPUT, x, y, "-d");
        if (line.reduce(multiplyAll, 1) > largest.reduce(multiplyAll, 1)) {
            largest = line;
        }
        if (x === 19) {console.log(line)} // SOMETHING WRONG
    } 
}
// can definitely tidy up the above, just wrote it in a hurry
// for example, the content of each for loop, apart from "const line = ..." can be put into one function


console.timeEnd();
console.log(largest);
console.log(largest.reduce(multiplyAll, 1));
