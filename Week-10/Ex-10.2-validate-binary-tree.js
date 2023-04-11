class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insertLevelOrder(arr, i, root) {
        if(arr.length > 0) {
            root = new Node(arr[i]);
            if (i < Math.floor(arr.length/2)) {
                root.left = this.insertLevelOrder(arr,  2 * i + 1, root.left);
                root.right = this.insertLevelOrder(arr, 2 * i + 2, root.right);
            }
        }
        return root;
    }

    isValidBinaryTree(root) {
        if (root === null) return true;
        return this.search(root, -Infinity, Infinity);

    }

    search(node, min, max) {
        if (node.val <= min || node.val >= max) 
            return false;

        if (node.left){
            if (!this.search(node.left, min, node.val))
                return false;
        }

        if (node.right) {
            if(!this.search(node.right, node.val, max))
                return false;
        }

        return true;
    }
}

const bt = new BinaryTree();
bt.root = bt.insertLevelOrder([5,1,4,null,null,3,6], 0, bt.root);

console.log(JSON.stringify(bt));
console.log(bt.isValidBinaryTree(bt.root));