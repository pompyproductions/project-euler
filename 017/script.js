"use strict";
console.log("script.js: flotation device");

const WORDS = [
    [
        "", "one", "two", "three", "four", "five", "six",
        "seven", "eight", "nine", 
    ],
    [
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", 
        "sixteen", "seventeen", "eighteen", "nineteen"

    ],
    [
        "twenty", "thirty", "forty", "fifty", "sixty",
        "seventy", "eighty", "ninety"
    ],
    [
        "hundred", "thousand", "million", "billion", "trillion"
    ]
]

function getDecimalPlaces(num) {
    num = Math.abs(num);
    let count = 0;
    while (num >= 1) {
        count += 1;
        num = Math.trunc(num / 10);
    }
    return count;
}

function numberToWord(num) {
    let decimalPlaces = getDecimalPlaces(num);
    if (num < 20) return WORDS[0][num-1];
    if (num < 100) {
        let word = "";
        word.concat(numberToWord())
    }
}



console.time();
console.timeEnd();
