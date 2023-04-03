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

    insert(val) {
        const newNode = new Node(val);

        this.insertBSTNode(this.root, newNode);

    }

    insertBSTNode(root, newNode) {
        if (newNode.val < root.val) {
            if (!root.left) {
                root.left = newNode;
            } else {
                this.insertBSTNode(root.left, newNode);
            }
        } else {
            if (!root.right) {
                root.right = newNode;
            } else {
                this.insertBSTNode(root.right, newNode);
            }
        }
    }
}