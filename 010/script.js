"use strict";
console.log("script.js: flotation device");

function isFactor(factor, number) {
    // console.log(`dividing ${number} with ${factor}`);
    return !(number % factor);
}

function* primeGen(max=Infinity) {
    yield 2;
    let primes = [2];
    let current = 3;
    let i = 0;

    while (current < max) {
        let isPrime = true;
        while (primes[i] < Math.trunc(current/2)) {
            i++;
        }
        for (let item of primes.slice(0, i+1)) {
            if (isFactor(item, current)) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) yield current;
        primes.push(current);
        current += 2;
    }
    console.log(primes)
}


let sum = 0;
for (let prime of primeGen(1000)) {
    sum += prime;
}
console.log(sum);