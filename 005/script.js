"use strict";
console.log("script.js: flotation device");

function isFactor(factor, number) {
    return !(number % factor);
}

function* primeGen(max=Infinity) {
    yield 2;
    let primes = [2];
    let current = 3;

    while (current < max) {
        let isPrime = true;
        for (let item of primes) {
            if (isFactor(item, current)) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) yield current;
        primes.push(current);
        current += 2;
    }
}

function findPrimeFactor(num) {
    let generator = primeGen();
    let iter = generator.next();
    while (num % iter.value) {
        iter = generator.next();
    };
    return iter.value
}

console.log(findPrimeFactor(49));