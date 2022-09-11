"use strict";
console.log("script.js: flotation device");

console.log(PROBLEM_INPUT);

class Pyramid {
    floors;
    depth;

    current;
    maxDescent;
    greedyDescent;

    constructor(input) {
        this.floors = input;
        this.depth = input.length;
        
        this.maxDescent = [];
        this.greedyDescent = []
        for (let floor of this.floors) {
            this.maxDescent.push(floor.reduce((acc,val)=> val > acc ? val : acc, 0));
            this.greedyDescent.push()
        }
        let index = 0;
        for (let i = 0; i < this.depth; i++) {
            let best = this.floors[i][index];
            if (this.floors[i][index + 1] > best) {
                best = this.floors[i][index++ + 1];
            }
            this.greedyDescent.push(best);
        }
        
        
        this.current = [0, [[0, this.floors[0][0]]]]; // current floor and an array of paths
    }

    descend([ind, sum]) {
        if (
            sum + this.maxDescent.slice(this.current[0]+1, this.depth).reduce((acc,val)=>acc+val,0) >=
            this.greedyDescent.reduce((acc,val)=>acc+val, 0)
        ) {
            return [
                [ind, sum + this.floors[this.current[0]+1][ind]],
                [ind + 1, sum + this.floors[this.current[0]+1][ind + 1]]
            ]
        } return false;
    }

    explore() {
        console.log(`exploring ` + this.floors[this.current[0]+1]);
        const next = [this.current[0] + 1, []]
        for (let path of this.current[1]) {
            let arr = this.descend(path);
            if (arr) {next[1].push(...arr)};
        }
        this.current = next;
        return this.current;
    }
}

const pyramid = new Pyramid(PROBLEM_INPUT);
console.log(pyramid.current);
console.time();

while (pyramid.current[0] < pyramid.depth - 1) {
    pyramid.explore();
}
console.timeEnd();
console.log(pyramid.current[0]);
console.table(pyramid.current[1]);

// console.table(pyramid.current[1]);

console.log(pyramid.current[1].reduce((acc, val) => val[1] > acc ? val[1] : acc, 0));


