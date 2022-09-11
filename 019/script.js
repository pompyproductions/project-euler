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

function skipMonth(year, month) {
    let days = MONTHS[month - 1];
    if (month === 2 && isLeapYear(year)) {
        days++;
    } else if (month === 12) {
        currentDate[0]++;
        currentDate[1] = 0;
    }
    currentDate[1]++;
    return days;


    // return [year, prevMonth + 1];
}

let currentDate = [1900, 1];
// currentDate = skipMonth(...currentDate);


console.time();
console.timeEnd();