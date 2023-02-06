function add(a, b){
    return a + b;
}

function memoize(fn) {
    let cache = {};
    return function(...args) {
        const key = args.join(',');
        if (cache[key]) {
            return cache[key];
        }
        cache[key] = args.reduce((accumulator, currentValue) => fn(accumulator, currentValue), 0);
        return cache[key];
    }
}

const memoizeAdd = memoize(add);//then calling...
console.time();
console.log(memoizeAdd(100,100));//returns 200
console.timeEnd();

console.time();
console.log(memoizeAdd(100));//returns 100
console.timeEnd();

console.time();
console.log(memoizeAdd(100,200));//returns 300
console.timeEnd();

console.time();
console.log(memoizeAdd(100,100));//returns 200  without computing
console.timeEnd();

