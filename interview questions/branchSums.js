class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  let results = [];
  calculateSum(root, results, 0);
  return results;
}

function calculateSum(node, results, sum) {
  if (!node) return;

  sum += node.value;
  if (!node.left && !node.right) {
    results.push(sum);
    return;
  }

  calculateSum(node.left, results, sum);
  calculateSum(node.right, results, sum);
}
