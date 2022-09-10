"use strict";
console.log("script.js: flotation device");

console.log(PROBLEM_INPUT);

class Pyramid {
    constructor(input) {
        this.floors = input;
        // this.currentFloor = this.floors.pop();
    }
}



// const path = [PROBLEM_INPUT[0][0]];
// let lastIndex = 0;

// // find biggest possible path:
// for (let i=1; i<PROBLEM_INPUT.length; i++) {
//     let choice = PROBLEM_INPUT[i][lastIndex];
//     if (PROBLEM_INPUT[i][lastIndex+1] > choice) {
//         choice = PROBLEM_INPUT[i][lastIndex+1];
//         lastIndex++;
//     }
//     path.push(choice);
// }
// console.log(path.reduce((acc, val) => acc + val, 0));


console.time();
console.timeEnd();
