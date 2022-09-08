"use strict";
console.log("script.js: flotation device");


function* triangleGen(max=Infinity) {
    let curr = 0;
    for (let i=1; i<=max; i++) {
        curr += i;
        yield curr;
    }
}

function getDivisors(num) {
    let arr = [];
    for (let i=1; i <= num / 2; i++) {
        if (num % i === 0) arr.push(i);
    }
    arr.push(num);
    return arr;
}

const generator = triangleGen();
let current = generator.next();

console.time();
for (let i = 1; i <= 2000; i++) {
    // console.log(getDivisors(current.value));
    // console.log(getDivisors(current.value).length);
    current = generator.next();
    if (getDivisors(current.value).length >= 400) {
        console.log(`Found solution in ${i} steps`);
        break;
    }
}
console.log(getDivisors(current.value));
console.log(getDivisors(current.value).length);
console.timeEnd();