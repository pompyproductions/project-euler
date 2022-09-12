"use strict";
console.log("script.js: flotation device");

function alphabetSort(a, b, isSameLength=false) {
    let shortest = a.length;
    // just to skip this test
    if (!isSameLength) {
        if (b.length < shortest) shortest = b.length;
    }
    
    for (let i = 0; i < shortest; i++) {
        // console.log(a.charCodeAt(i), b.charCodeAt(i));
        if (a.charCodeAt(i) - b.charCodeAt(i)) {
            return a.charCodeAt(i) - b.charCodeAt(i)
        };
    }
    return a.length - b.length
}

function getLexiPerm(alphabet) {
    // assuming alphabet is sorted and is an array for now
    if (alphabet.length === 1) return [alphabet];

    let permutations = [];
    for (let i = 0; i < alphabet.length; i++) {
        let subPerm = [...alphabet];
        subPerm.splice(i, 1);
        for (let item of getLexiPerm(subPerm)) {
            let current = [alphabet[i]];
            item.forEach(element => {
                current.push(element)
            });
            permutations.push(current);
        }
    }
    return permutations;
}

console.time("Function 1");
const ALPHABET = "0123456789";
console.log(getLexiPerm(ALPHABET.split(""))[999999].join(""));
console.timeEnd("Function 1");

