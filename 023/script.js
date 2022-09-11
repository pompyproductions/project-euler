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
    yield current;
    while (current < max) {
        current++;
        if (current > sumDivisors(current)) {
            yield current;
        }
    }
}

const generator = abundantGen();


// console.time("Function 1");
// console.timeEnd("Function 1");