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

const s1 = new Stack();
const s2 = new Stack();

class Queue {
    enqueue(element) {
        s1.push(element);
    }

    dequeue() {
        if(s1.isEmpty()) {
            return -1;
        }

        if(s2.isEmpty()) {
            while(!s1.isEmpty()) {
                s2.push(s1.pop());
            }
        }

        return s2.pop();
    }
}

const q = new Queue();
const result = [];
q.enqueue(2);
q.enqueue(3);
result.push(q.dequeue());
q.enqueue(4);
result.push(q.dequeue());

console.log(result);





