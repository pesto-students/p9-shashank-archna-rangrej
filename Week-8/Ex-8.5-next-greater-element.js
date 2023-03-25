const arr = [6,8,0,1,3];
const n = 5;

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        return this.items.push(element)
    }

    pop() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
//6,8,0,1,3
//8 -1 1 3 -1

function greaterElement(arr, n) {
    let stack = new Stack();
    stack.push(arr[0]);
    let result = [];

    for(let i = 1; i < n; i++) {
        while(stack.isEmpty() === false && stack.peek() < arr[i]) {
            stack.pop();
            result.push(arr[i]);
        }
        stack.push(arr[i]);
    }

    while(stack.isEmpty() === false) {
        stack.pop();
        result.push(-1);
    }

    return result;
}

        
console.log(greaterElement(arr, n));
        