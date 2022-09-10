"use strict";
console.log("script.js: flotation device");

function* pascalGen(max=Infinity) {
    // max exists for making use of for..of
    yield [1];
    let prev = [1, 1];
    for (let i=0; i<max; i++) {
        yield prev;
        const curr = [1];
        for (let i = 1; i < prev.length; i++) {
            curr.push(prev[i-1] + prev[i]);
        }
        curr.push(1);
        prev = curr;
    }
}

function createLattice(side = 2) {
    const arr = [];
    const generator = pascalGen();
    for (let i=0; i <= side * 2; i++) {
        let row = generator.next().value;
        if (i > side) {
            row = row.slice(i - side, row.length - (i - side));
        }
        arr.push(row);
    }
    return arr;
}

const lattice = createLattice(20);
let count = 1;

console.time("Function 1");

for (let i = 1; i < lattice.length; i++) {
    count += (
        lattice[i].reduce((acc, val)=>acc+val, 0) -
        lattice[i-1].reduce((acc, val)=>acc+val, 0)
    )
}

console.timeEnd("Function 1");

console.log(lattice);
console.log(count);
