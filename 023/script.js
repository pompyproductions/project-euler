"use strict";
console.log("script.js: flotation device");

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

function sumDivisors(num) {
    let sum = 1;
    
    const primes = getPrimeDivisors(num);
    primes.forEach(p => {
        let count = 0;
        let max = countExponent(p, num);
        
        for (let i = 0; i <= max; i++) {
            count += Math.pow(p, i);
        }

        sum *= count;
    })
    if (sum > num) sum -= num;
    return sum;
}

function* abundantGen(max=Infinity) {
    let current = 12;
    while (current <= max) {
        if (current < sumDivisors(current)) {
            yield current;
        }
        current++;
    }
}

function testAbundant(abundant, total, arr=abundantsAll) {
    for (let i = 0; i < arr.length; i++) {
        if ((total - abundant) === arr[i]) return true;
        if ((total - abundant) < arr[i]) return false;
    }
}

function sliceUpTo(arr, val) {
    // assumes array is ordered
    for (let i=0; i < arr.length; i++) {
        if (arr[i] > val) return arr.slice(0, i);
    }
    return arr;
}
// takes abundant list as parameter
// so as to not repeat the operation

const generator = abundantGen(28123);
console.time("Function 1");

let abundantsAll = [];
for (let num of generator) {
    abundantsAll.push(num);
}

console.timeEnd("Function 1");
const nonAbundantSums = []

console.time("Function 2");
for (let i = 1; i <= 28123; i++) {
    let testSet = sliceUpTo(abundantsAll, i - 12);
    let isNonAbundant = true;
    for (let a of testSet) {
        if (testAbundant(a, i)) {
            isNonAbundant = false;
            break;
        }
    }
   if (isNonAbundant) nonAbundantSums.push(i)
}
console.timeEnd("Function 2");

console.log(nonAbundantSums)
console.log(nonAbundantSums.reduce((acc, val)=> acc + val, 0))

// start from i = 25; i < 28123; i++
// slice abundants up to current number - 12 (write function for that)
// test abundants starting from highest number (let testSet = abundantsAll.slice(...))
// if there is a hit, continue, (...)

// for (let i = 25; i < 100; i++) {
//     testAbundant(12, i)
// }