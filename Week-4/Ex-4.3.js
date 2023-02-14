const Fib = {
    
    [Symbol.iterator]: () => {
        let i = 1;
        let oldNum = 0, newNum = 0;
        let n = 6;
        return {
            next: () => {
                if (i++ <= n) {
                    [oldNum, newNum] = [newNum, (oldNum + newNum) || 1];
                    return { value: oldNum, done: false }; 
                } else {
                    return { done: true };
                }
            }
        }
    }
};

console.log([...Fib]); //[ 0, 1, 1, 2, 3, 5 ]

for (let num of Fib) {
    console.log(num);
}
