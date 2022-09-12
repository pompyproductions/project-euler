"use strict";
console.log("script.js: flotation device");

function getRecurringCycles(num) {
    let r = 1;
    let remainders = [];
    while (r !== 0) {
        while (r <= num) {
            r *= 10;
        }
        r = Math.trunc(r);
        r %= num;
        console.log(r);
        if (remainders.some(a => a === r)) return remainders.length;
        remainders.push(r);
    }
    return 0;

}
// console.time("Function 1");
// console.timeEnd("Function 1");