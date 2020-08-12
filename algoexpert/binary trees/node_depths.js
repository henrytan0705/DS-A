function nodeDepths(root) {
  let total = 0;
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    let current = stack.pop();

    if (current.node === null) continue;
    total += current.depth;
    stack.push({ node: current.node.left, depth: current.depth + 1 });
    stack.push({ node: current.node.right, depth: current.depth + 1 });
  }

  return total;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
