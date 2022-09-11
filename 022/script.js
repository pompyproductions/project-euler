"use strict";
console.log("script.js: flotation device");

function alphabetSort(a, b) {
    let shortest = a.length;
    if (b.length < shortest) shortest = b.length;
    for (let i = 0; i < shortest; i++) {
        // console.log(a.charCodeAt(i), b.charCodeAt(i));
        if (a.charCodeAt(i) - b.charCodeAt(i)) {
            return a.charCodeAt(i) - b.charCodeAt(i)
        };
    }
    return a.length - b.length
}

function getLettersSum(str, alphabet=ALPHABET) {
    str = str.toLowerCase();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += alphabet.indexOf(str.charAt(i)) + 1;
    }
    return sum;
}

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

console.time("Function 1");
let sortedInput = PROBLEM_INPUT.sort(alphabetSort);

let total = 0;
for (let i = 0; i < sortedInput.length; i++) {
    total += (i + 1) * getLettersSum(sortedInput[i])
}

console.timeEnd("Function 1");