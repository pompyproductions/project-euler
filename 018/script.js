"use strict";
console.log("script.js: flotation device");

console.log(PROBLEM_INPUT);

const path = [PROBLEM_INPUT[0][0]];
let lastIndex = 0;
for (let i=1; i<PROBLEM_INPUT.length; i++) {
    let choice = PROBLEM_INPUT[i][lastIndex];
    if (PROBLEM_INPUT[i][lastIndex+1] > choice) {
        choice = PROBLEM_INPUT[i][lastIndex+1];
        lastIndex++;
    }
    path.push(choice);
}
console.log(path);


console.time();
console.timeEnd();
