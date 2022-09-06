"use strict";
console.log("script.js: flotation device");


function* sequenceGen(input, length, callback, start=0) {
    // callback always accepts 1 value and checks if it passes the test
    if (!callback) callback = x=>true;

    for (let i = start; i < input.length - (length - 1); i++) {
        if (callback(input.substr(i, length))) {
            yield input.substr(i, length);
        } else {
            console.log("found 0, skip");
            i += length - 1;
        }
    }
    
}

let generator = sequenceGen(PROBLEM_INPUT, 4, (val) => {
    return !val.includes("0"); // discard values with 0 in them
});

let currentIter = generator.next();
while (!currentIter.done) {
    console.log(currentIter.value);
    currentIter = generator.next();
}