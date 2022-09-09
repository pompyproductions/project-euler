"use strict";
console.log("script.js: flotation device");


function* triangleGen(max=Infinity) {
    let curr = 0;
    for (let i=1; i<=max; i++) {
        curr += i;
        yield curr;
    }
}

// function getDivisors(num) {
//     let arr = [1, num];
//     for (let i=2; i <= num / 2; i++) {
//         if (num % i === 0) {
//             arr.push(i);
//         }
//     }
//     console.log(num);
//     console.log(arr);
//     return arr;
// }

function isFactor(factor, number) {
    // console.log(`dividing ${number} with ${factor}`);
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
            if (isFactor(item, current)) {
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
    while (prime && (prime.value <= num / 2)) {
        if (isFactor(prime.value, num)) divs.push(prime.value);
        prime = generator.next();
    }
    console.log(divs);
}

// const generator = triangleGen();
// let current = generator.next();

// console.time();
// for (let i = 1; i <= 20; i++) {
//     // console.log(getDivisors(current.value));
//     // console.log(getDivisors(current.value).length);
//     current = generator.next();
//     if (getDivisors(current.value).length >= 400) {
//         console.log(`Found solution in ${i} steps`);
//         break;
//     }
// }
// console.log(getDivisors(current.value));
// console.log(getDivisors(current.value).length);
// console.timeEnd();