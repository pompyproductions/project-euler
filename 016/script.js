"use strict";
console.log("script.js: flotation device");

let exp = 1;
let val = 2;

while (val < Number.MAX_SAFE_INTEGER) {
    val *= 2;
    exp++;
}
console.log(exp);

val = BigInt(val);

while (exp < 1000) {
    val = val * 2n;
    exp++;
}
console.log(exp);
console.log(val);

// console.time("Function 1")
// console.timeEnd("Function 1");