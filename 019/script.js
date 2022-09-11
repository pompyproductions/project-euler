"use strict";
console.log("script.js: flotation device");

const DAYS = [
    "mon", "tue", "wed", "thu",
    "fri", "sat", "sun"
]
const MONTHS = [
    31, 28, 31, 30, 31, 30, 
    31, 31, 30, 31, 30, 31
]

function isLeapYear(year) {
    if (!(year % 4)) {

        if (!(year % 100)) {
            if (!(year % 400)) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

// function skipMonth(year, prevMonth) {
//     if (prevMonth === 2 && ) 
//     if 
//     return [year, prevMonth + 1];
// }

let currentDate = [1900, 1];
// currentDate = skipMonth(...currentDate);


console.time();
console.timeEnd();