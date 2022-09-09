"use strict";
console.log("script.js: flotation device");

let sum;
let arr = PROBLEM_INPUT.map(x => x / Math.pow(10, 50));

console.time("Float addition");
sum = arr.reduce((acc, val) => acc + val, 0);
console.timeEnd("Float addition");

console.log((sum * Math.pow(10, 10 - sum.toFixed(0).length)).toFixed(0))