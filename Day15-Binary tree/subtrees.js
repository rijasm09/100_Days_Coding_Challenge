class TreeNode {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}

function countSubtrees(root) {
    // If the root has no children, return 0.
    if (root.children.length === 0) {
        return 0;
    }

    let count = 1; // Start with 1 for the root.

    // Recursively count subtrees for each child.
    //   if to find count greater than 2 children => start from i 
    for (let i = 0; i < root.children.length; i++) {
        if (root.children.length >= 2) {
            count += countSubtrees(root.children[i]);
        }
    }

    return count;
}

// Example usage:
const tree = new TreeNode(1, [
    new TreeNode(2, [
        new TreeNode(3),
        new TreeNode(4),
        new TreeNode(5),
    ]),
    new TreeNode(6),
    new TreeNode(7, [
        new TreeNode(8),
        new TreeNode(9),
        new TreeNode(10),
    ]),
]);

console.log(countSubtrees(tree)); // Output: 7
