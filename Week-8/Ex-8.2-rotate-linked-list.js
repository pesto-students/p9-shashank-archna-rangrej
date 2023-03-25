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

    rotate(k, n) {
        if (this.head === null) return;

        let previousHead = this.head;
        let prev = this.head;
        let current = this.head;

        let i = 1;
        if (k <= n) {
            while(current.next) {
                if (i === k + 1) {
                    this.head = current;
                    prev.next = null;
                }

                prev = current;
                current = current.next;

                i++;
            }

            current.next = previousHead;

            return this;
        }
        
        return this.head;
    }
}

const LL = new LinkedList();
LL.add(2);
LL.add(4);
LL.add(7);
LL.add(8);
LL.add(9);

console.log(JSON.stringify(LL)); // 2->4->7->8->9

const result = LL.rotate(3, 5);

console.log(JSON.stringify(result)); //8->9->2->4->7
