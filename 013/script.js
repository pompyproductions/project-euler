"use strict";
console.log("script.js: flotation device");


console.log(PROBLEM_INPUT);
console.log(PROBLEM_INPUT[0] / Math.pow(10, 5));


let sum;


console.time("Integer addition");
sum = PROBLEM_INPUT.reduce((acc, val) => acc + val, 0);
console.log(sum)
console.timeEnd("Integer addition");

let arr = PROBLEM_INPUT.map(x => x / Math.pow(10, 5));
console.time("Float addition");
sum = arr.reduce((acc, val) => acc + val, 0);
console.timeEnd("Float addition");
