"use strict";
console.log("script.js: flotation device");

function getPythagorean(a) {
    let [b, c] = [a + 1, a + 2];
    while (c*c !== a*a + b*b) {
        while (c*c < a*a + b*b) {
            c++;
        }
        if (c === b + 1) return false;
        b++;
    }

    return [a,b,c]
}

console.log(getPythagorean(1));