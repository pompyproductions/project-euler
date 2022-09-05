"use strict";
console.log("script.js: flotation device");

function isPalindrome(num) {
    // accepts string and number, negatives too
    // bug: accepts and ignores comma for some reason
    if (isNaN(parseInt(num))) throw new Error("Not a number");
    if (!num) return true; // 0 is palindromic
    if (num % 1) return false; // non-integers are not palindromic

    num = Math.abs(num).toString();
    while (num.length > 1) {
        if (num.substr(0, 1) === num.substr(-1, 1)) {
            num = num.substr(1, num.length - 2); 
            console.log(num);
        } else {
            return false
        }
    }
    return true;
}


function findPalindromeProduct(num, ...args) {
    // takes one number and the following args, in order:
    // from, to, step
}
