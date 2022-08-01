/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
    this.total = 0
  }

  /** sumValues(): add up all of the values in the tree. */



  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    function sumHelper(node) {
      // go through all the children for a Node
      for (let child of node.children) {
        // accumulate all values
        total += child.val;
        // if it has any children
        if (child.children.length > 0) {
          // recurse with the child as the root
          sumHelper(child);
        }
      }
    }
    // Recursive function
    sumHelper(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // Validate our tree is > 0
    if (!this.root) return 0;
    // If first val is even, start at 1, else start at 0
    let evens = this.root.val % 2 === 0 ? 1 : 0
    //  Perform recursive function. Check each node, if a childs value is an even number, add one to our count var. If our len is > 0, continue recursively until we've gone through each node.
    function countEvensHelper(node) {
      for (let child of node.children) {
        if (child.val%2 === 0) {
          evens++
        }
        if (child.children.length > 0) {
          countEvensHelper(child);
        }
      }
    }

    countEvensHelper(this.root);
    return evens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    //  Validate > 0 values
    if (!this.root) return 0;
    //  Same concept as above, "if greater than lower bound" instead of "if even"
    let count = this.root.val > lowerBound ? 1 : 0;

    function countEvensHelper(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) count++;
        if (child.children.length > 0) {
          countEvensHelper(child);
        }
      }
    }

    countEvensHelper(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
