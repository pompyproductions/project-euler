"use strict";
console.log("script.js: flotation device");


function* triangleGen(max=Infinity) {
    let curr = 0;
    for (let i=1; i<=max; i++) {
        curr += i;
        yield curr;
    }
}

function isFactor(factor, number) {
    return !(number % factor);
}

function* primeGen(max=Infinity) {
    yield 2;
    yield 3;
    let primes = [2, 3];
    let current = 5;
    let i = 1;

    while (current <= max) {
        let isPrime = true;
        while (primes[i] < Math.trunc(current/primes[i-1])) {
            i++;
        }
        for (let item of primes.slice(0, i+1)) {
            if (!(current % item)) {
                isPrime = false;
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


function getPrimeDivisors(num) {
    const divs = [];
    const generator = primeGen();
    let prime = generator.next();
    while (prime && (prime.value <= num / (divs.length ? divs[divs.length - 1] : 2))) {
        if (!(num % prime.value)) divs.push(prime.value);
        prime = generator.next();
    }
    return divs;
}

function countExponent(factor, num) {
    let count = 0;
    while (num % factor === 0) {
        num /= factor;
        count++;
    }
    return count;
}

function countDivisors(num) {
    let count = 1;
    const primes = getPrimeDivisors(num);
    primes.forEach(p => {
        count *= (1 + countExponent(p, num));
    })
    
    return count;
}

const generator = triangleGen();
let current = generator.next();

console.time();
for (let i = 0; i <= 15000; i++) {
    current = generator.next();

    if (countDivisors(current.value) > 500) {
        console.log(countDivisors(current.value));
        break;
    } 
}
console.log(current.value);
console.timeEnd();

// brute version: 100 iterations, 42ms
// brute version: 200 iterations, 103ms
// brute version: 300 iterations, 310ms

// new version: 300 iterations, 120ms
// new version: 500 iterations, 530ms
// new version: 1000 iterations, 5s
// new version: 2000 iterations, 53s

// final version: 300 iterations, 22ms
// final version: 500 iterations, 31ms
// final version: 1000 iterations, 95ms
// final version: 2000 iterations, 434ms
// final version: 5000 iterations, 4.8s
// final version: 10000 iterations, 32s
// RESULT: 64.5s
