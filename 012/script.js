"use strict";
console.log("script.js: flotation device");
console.time();
console.timeEnd();

function* triangleGen(max=Infinity) {
    let curr = 0;
    for (let i=1; i<=max; i++) {
        curr += i;
        yield curr;
    }
}

function getDivisors(num) {
    let arr = [1];
    for (let i=2; i <= num / 2; i++) {
        if (num % i === 0) arr.push(i);
    }
    arr.push(num);
    return arr;
}

const generator = triangleGen(5);
let current = generator.next();
console.log(getDivisors(5));
console.log(getDivisors(6));
console.log(getDivisors(36));

// while (current.value)