"use strict";
console.log("script.js: flotation device");

function isFactor(factor, number) {
    return !(number % factor);
}

function* primeGen(max) {
    let primes = [];
    let current = 2;

    while (current < max) {
        let isPrime = true;
        for (let item of primes) {
            if (isFactor(item, current)) isPrime = false;
        }
        if (isPrime) yield current;
        primes.push(current);
        current++;
    }

}

let generator = primeGen(40);
