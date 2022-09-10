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
    // let decimalPlaces = getDecimalPlaces(num);
    if (num < 0) {  
        let word = "minus";
        word = word.concat(" ", numberToWord(num * -1));
        return word;
    
    } if (num < 10) {
        return WORDS[0][num];

    } if (num < 20) {
        return WORDS[1][num - 10];

    } if (num < 100) {
        let word = WORDS[2][Math.trunc(num / 10) - 2];
        word = word.concat(
            num % 10 ? "-" : "",
            numberToWord(num % 10)
        );
        return word;

    } if (num < 1000) {
        let word = WORDS[0][Math.trunc(num / 100)].concat(
            " hundred",
            num % 100 ? " and ".concat(numberToWord(num % 100)) : ""
        );
        return word;
    }

    return "limit reached"
    // let word = numberToWord(Math.trunc(num / 10));
}



console.time();
console.timeEnd();
