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

    reverse() {
        if (this.head === null) return;

        let prev = null;
        let current = this.head;
        let next = null;

        while(current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }
}

const LL = new LinkedList();
LL.add(1);
LL.add(2);
LL.add(3);
LL.add(4);

console.log(LL); // 1-->2-->3

LL.reverse();

console.log(LL); //3-->2-->1
