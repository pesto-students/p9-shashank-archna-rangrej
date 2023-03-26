class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(val) {
        let newNode = new node(val);

        if (this.head === null)
            this.head = newNode;
        else {
            let temp = this.head;
            while(temp.next) {
                temp = temp.next;
            }

            temp.next = newNode;
        }        
    }

    makeLoop(k) {
        if (k === 0) {
            return;
        }
        if (this.head) {
            let count = 1;
            let temp = this.head;
            if (count < k) {
                temp = temp.next;
                count++
            }

            let kNode = temp;

            while(!temp.next) {
                temp = temp.next;
            }

            temp.next = kNode;
        }
    }

    detectLoop() {
        if(this.head === null)
            return false;

        let pointer = this.head;
        let runner = this.head.next;

        while (pointer != runner) {
            if (runner === null) 
                return false;

                pointer = pointer.next;
                runner = runner.next;
        }

        return true;

    }

    
}

const LL = new LinkedList();
LL.add(2);
LL.add(4);
LL.add(7);
LL.add(8);
LL.add(9);

LL.makeLoop(0);

console.log(LL);

const result = LL.detectLoop();

console.log(result);
