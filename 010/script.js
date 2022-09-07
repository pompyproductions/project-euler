"use strict";
console.log("script.js: flotation device");

function isFactor(factor, number) {
    console.log(`dividing ${number} with ${factor}`);
    return !(number % factor);
}

function* primeGen(max=Infinity) {
    yield 2;
    let primes = [2, 3];
    let current = 5;
    let i = 1;

    while (current <= max) {
        let isPrime = true;
        while (primes[i] < Math.trunc(current/primes[i-1])) {
            i++;
        }
        for (let item of primes.slice(0, i+1)) {
            if (isFactor(item, current)) {
                isPrime = false;
                console.log("not prime");
                break;
            }
        }
        if (isPrime) {
            primes.push(current);
            yield current;
        }
        current += 2;
    }
    console.log(primes)
}


let sum = 0;
console.time();
for (let prime of primeGen(100)) {
    sum += prime;
}
console.timeEnd();
console.log(sum);
