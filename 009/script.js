"use strict";
console.log("script.js: flotation device");

function* pythagoreanGen(a) {
    // return if a+b+c > 1000
    let [b, c] = [a + 1, a + 2];
    while (a+b+c <= 1000) {
        while (c*c !== a*a + b*b) {
            while (c*c < a*a + b*b) {
                c++;
            }
            if (c === b + 1) return;
            b++;
        }
        yield [a,b,c];
        b++;
    }
    return;
}

let specialTriple;

for (let i=1; i <= (Math.floor(1000 / 3) - 2); i++) {
    let generator = pythagoreanGen(i);
    for (let triple of generator) {
        if (triple.reduce((acc, val)=>acc+val, 0) === 1000) {
            specialTriple = triple;
        }
    }
}

if (specialTriple) {console.log(
    specialTriple.reduce((acc, val) => acc * val, 1)
)}