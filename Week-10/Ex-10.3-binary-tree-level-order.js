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

    levelOrderTraversal() {
        let queue = [];
        let startLevel = 0;
        let map = new Map();

        queue.push([this.root, startLevel]);
        
        while (queue.length) {
            let arr = [];
            let qFirst = queue.shift();
            let currentNode = qFirst[0];
            let level = qFirst[1];

            if (map.has(level)){
                arr = map.get(level);
            }

            if(currentNode.val)
                arr.push(currentNode.val);

            map.set(level, arr);

            if (currentNode.left) {
                queue.push([currentNode.left, level+1]);
            }

            if (currentNode.right) {
                queue.push([currentNode.right, level+1]);
            }
        }

        let result = [];

        for (let [key, value] of map) {
            result.push(value);
        }

        return result;
    }
}

const bt = new BinaryTree();
bt.root = bt.insertLevelOrder([3,9,20,null,null,15,7], 0, bt.root);

const result = bt.levelOrderTraversal();
console.log(result);