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

const generator = triangleGen(5);

for (let num of generator) {
    console.log(num);
}