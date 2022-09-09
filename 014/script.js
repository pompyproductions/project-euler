"use strict";
console.log("script.js: flotation device");


function* collatzGen(num) {
    // assuming all sequences end with 1
    yield num;
    while (num !== 1) {
        num = num%2===0 ? num/2 : 3*num+1;
        yield num;
    }
}

let generator;
let longest = [1, 1];

console.time("Function 1");
for (let i = 2; i < 1000000; i++) {
    generator = collatzGen(i);
    let count = -1;
    for (let step of generator) {
        count++;
    }
    // console.log(`${count} steps taken for ${i}`);
    if (count > longest[1]) longest = [i, count];
}
console.timeEnd("Function 1");
console.log(longest)