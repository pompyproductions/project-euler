"use strict";
console.log("script.js: flotation device");


function* sequenceGen(input, length, callback, start=0) {
    if (!callback) {
        callback = function() {
            console.log("Callback!");
        }
    }
    for (let i = start; i < input.length - (length - 1); i++) {
        if (!(input.substr(i, length).includes("0"))) {
            yield input.substr(i, length);
        } else {
            console.log("found 0, skip");
            i += length - 1;
        }
    }
    
}

let generator = sequenceGen(PROBLEM_INPUT, 4);
generator.next();