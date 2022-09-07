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

let generator = pythagoreanGen(21);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
