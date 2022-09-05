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

function getIntersectionSet(set1, set2) {
    if (set1 instanceof Array) set1 = new Set(set1);
    if (set2 instanceof Array) set2 = new Set(set2);
    // (too repetitive, clean this up)
    return new Set(Array.from(set1).filter(item => set2.has(item)));
    // also, make recursive with set1, set2, ...args; add to stack until only two parameters left
    // you can write getIntersectionArray later on
}

function mergeArrays(arr1, arr2) {
    let merge = arr1.concat(arr2);
    let commonValues = getIntersectionSet(arr1, arr2);
    commonValues.forEach(val => {
            let toRemove = count(arr1, val);
            toRemove = count(arr2, val) > toRemove ? count(arr2, val) : toRemove;
            // very inefficient up there! too many counts
            for (let i = 0; i < toRemove; i++) {
                merge.splice(merge.findIndex(elem=>elem==val), 1);
            }
        }
    )
    return merge.sort((a,b)=>a-b)
}

let testArray = range(1, 21);
let factors = [];
while (testArray.length) {
    let num = testArray.pop();
    let numFactors = factorize(num);
    factors = mergeArrays(numFactors, factors);
    console.log(factors);
}

// let totalFactors = new Map();

// while (testArray.length) {
//     let num = testArray.pop();
//     new Set(factorize(num)).forEach(f => {
//         let c = count(factorize(num), f)
//         if (!(totalFactors.has(f)) || totalFactors[f] < c) {
//             totalFactors.set(f, c);
//         }
//     })
// }

// let totalFactors = [];
// while (testArray.length) {
//     let num = testArray.pop();
//     let numFactors = factorize.num();
//     new Set(numFactors).forEach(fac => { // set so that you don't repeat the count
//         let tot = count(factorize(num), fac);
//         if (count(totalFactors, fac) < tot)
//     }
// }

// console.log(totalFactors);
