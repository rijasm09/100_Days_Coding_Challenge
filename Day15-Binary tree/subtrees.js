// To find count of managers who has equal to or greater than 2 subordinates


class TreeNode {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}

class countManagersGreaterThanOne {
  constructor() {
      this.root = null;
      this.count = 0
  }

  countManager(root) {
      if (!root) {
          return ;
      }

      if (root.children.length >= 2) {
          this.count++
      }
      for (let i = 0; i < root.children.length; i++) {
          this.countManager(root.children[i])
      }
      return this.count;
  }
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

console.log(countManagers(tree)); // Output: 7
