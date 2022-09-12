"use strict";
console.log("script.js: flotation device");

function countRecurringCycles(num) {
    let r = 1;
    let remainders = [];
    while (r !== 0) {
        while (r <= num) {
            r *= 10;
        }
        r %= num;
        if (remainders.some(a => a === r)) return remainders.length;
        remainders.push(r);
    }
    return 0;

}

let longest = [0, 0];
console.time("Function 1");

for (let d = 2; d < 1000; d++) {
    let count = countRecurringCycles(d);
    if (count > longest[1]) {
        longest = [d, count]
    };
}

console.timeEnd("Function 1");
console.log(longest);

