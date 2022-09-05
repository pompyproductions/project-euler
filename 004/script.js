"use strict";
console.log("script.js: flotation device");

function isPalindrome(num) {
    // accepts string and number, negatives too
    if (isNaN(parseInt(num))) throw new Error("Not a number");
    if (!num) return true;
    if (num % 1) return false;

    num = Math.abs(num).toString();
    
    return num;
}


function findPalindromeProduct(num, ...args) {
    // takes one number and the following args, in order:
    // from, to, step
}