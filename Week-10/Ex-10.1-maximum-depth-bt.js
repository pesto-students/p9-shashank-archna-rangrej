class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(val) {
        this.root = new Node(val);
    }

    maximumDepth(root) {
        if (root === null) 
            return 0;
        
        return 1 + Math.max(this.maximumDepth(root.left), this.maximumDepth(root.right));
    }
}


const bt = new BinaryTree(3);
bt.root.left = new Node(9);
bt.root.right = new Node(20);
bt.root.right.left = new Node(15);
bt.root.right.right = new Node(7);

const result = bt.maximumDepth(bt.root);
console.log(result); //3