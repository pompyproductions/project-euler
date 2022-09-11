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

class MonthCount {
    year;
    month; 
    day;
    
    constructor(year=1900, month=1) {
        this.year = year;
        this.month = month;
        this.day = 6; // sunday is 0, makes it easier to check for truthiness
    }

    skipMonth() {
        let days = MONTHS[this.month - 1];
        if (this.month === 2 && isLeapYear(this.year)) {
            days++;
        } else if (this.month === 12) {
            this.year++;
            this.month = 0;
        }
        this.month++;
        this.day = (this.day + days) % 7;
    }
}

const a = new MonthCount();
console.time();

while (a.year < 1900 || a.month < 12) {
    a.skipMonth();
}

let sundays = 0;
while (a.year < 2000 || a.month < 12) {
    a.skipMonth();
    if (!a.day) sundays++;
}

console.log(sundays);

console.timeEnd();