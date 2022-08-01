/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    // Check if we have a tree
    if (!this.root) return 0;

    function minDepthHelper(node) {
      //  Check if our tree has branches
      if (node.left === null && node.right === null) return 1;
      // Checks if we have just a right branch remaining*, then recursively check how deep it is.
      // If one branch ends we need to recursively continue.
      if (node.left === null) return minDepthHelper(node.right) + 1;
      // Check if we have just a left branch remaining*, then recursively check how deep it is.
      // If one branch ends we need to recursively continue.
      if (node.right === null) return minDepthHelper(node.left) + 1;
      // Recursively continue through our branches, checking the min val of each side.
      return (
        Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1
      );
    }

    return minDepthHelper(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // Identical to above, except grabbing the max val instead of the min val.
  maxDepth() {
    if (!this.root) return 0;

    function maxDepthHelper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return maxDepthHelper(node.right) + 1;
      if (node.right === null) return maxDepthHelper(node.left) + 1;
      return (
        Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1
      );
    }

    return maxDepthHelper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // Initiate result val
    let result = 0;
    // Recursive function
    function maxSumHelper(node) {
      // If our node is empty, return 0.
      if (node === null) return 0;
      // Recursively get max val for each side
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      // Find max values
      result = Math.max(result, node.val + leftSum + rightSum);
      // Return largest sum of each largest node.
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return result;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
