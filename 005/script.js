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

function findSmallestPrimeFactor(num) {
    let generator = primeGen();
    let iter = generator.next();
    while (num % iter.value) {
        iter = generator.next();
    };
    return iter.value
}

function factorize(num) {
    let factors = []
    while (num > 1) {
        let f = findSmallestPrimeFactor(num);
        factors.push(f);
        num /= f;
    }
    return factors;
}

function range(start, end, step=1) {
    for (let item of arguments) {
        if (item < 0) throw new Error("Negative number in range function");
    }

    let isReverse = false;
    if (end == null) {
        end = start;
        start = 0;
    } else if (end < start) {
        [start, end] = [end, start]; // ES6 destructuring instead of creating temp value
        isReverse = true;
    }

    let arr = [];
    while (start < end) {
        arr.push(start);
        start += step;
    }

    return isReverse ? arr.reverse() : arr;
}

function count(arr, val) {
    return arr.reduce((tot, i) => tot + (i===val), 0);
}

let testArray = range(1, 21);
let factorCount = new Map();

while (testArray.length) {
    let num = testArray.pop();
    console.log(`factors of ${num}:`)
    new Set(factorize(num)).forEach(f => {
        let c = count(factorize(num), f)
        if (!(factorCount.has(f)) || factorCount[f] < c) {
            factorCount.set(f, c);
        }
    })
    console.log(factorCount);
}