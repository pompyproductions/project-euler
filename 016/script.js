"use strict";
console.log("script.js: flotation device");

let exp = 1;
let val = 2;

console.time("Find 2^1000");

while (val <= Number.MAX_SAFE_INTEGER / 2) {
    val *= 2;
    exp++;
}
console.log(exp);

val = BigInt(val);

while (exp < 1000) {
    val *= 2n;
    exp++;
}
console.log(exp);
console.log(val);

console.timeEnd("Find 2^1000");
console.time("Count digits");

let count = 0;
while (val > Number.MAX_SAFE_INTEGER) {
    count += Number(val % 10n);
    val /= 10n;
}

val = Number(val);
while (val >= 1) {
    count += val % 10;
    val = Math.trunc(val / 10);
}

console.log(count);
console.timeEnd("Count digits");

// console.timeEnd("Function 1");