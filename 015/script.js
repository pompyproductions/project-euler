"use strict";
console.log("script.js: flotation device");

function* pascalGen() {
    // assuming all sequences end with 1
    yield [1];
    let prev = [1, 1];
    while (true) {
        yield prev;
        const curr = [1];
        for (let i = 1; i < prev.length; i++) {
            curr.push(prev[i-1] + prev[i]);
        }
        curr.push(1);
        prev = curr;
    }
}

const generator = pascalGen();
// console.time("Function 1");
// console.timeEnd("Function 1");