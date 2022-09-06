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


let currentTriple;
// first find a pythagorean triple
for (let a = 1; !currentTriple; a++) {
    currentTriple = getPythagorean(a);
}
// then find more pythagoreans until the sum is 1000
let a = currentTriple[0];

while (currentTriple.reduce((acc, val)=>acc+val, 0) !== 1000) {
    a++;
    {
        let nextTriple = getPythagorean(a);
        if (nextTriple) {
            currentTriple = nextTriple;
        }
        console.log(currentTriple.reduce((acc, val)=>acc+val, 0));
    }
    if (a > 500) break;
}



// for (a; currentTriple.reduce((acc, val)=>acc*val, 1) !== 1000; a++) {
    
// }