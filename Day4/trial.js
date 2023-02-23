const treeify = require('treeify')

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (!root.left) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (!root.right) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }





    // min value in the tree
    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }
    max(root) {
        if (!root.right) {
            console.log("highest : ", root.value);
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
          if (!root.left && !root.right) {
            return null
          }
          if (!root.left) {
            return root.right
          } else if (!root.right) {
            return root.left
          }
          root.value = this.min(root.right)
          root.right = this.deleteNode(root.right,root.value)
        }
        return root;
    }
}

const tree = new binarySearchTree()
tree.insert(10);
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(15);
console.log(treeify.asTree(tree, true));

tree.delete(5)