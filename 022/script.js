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



// console.time("Function 1");
// console.timeEnd("Function 1");