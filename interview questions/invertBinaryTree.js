function invertBinaryTree(tree) {
  if (tree) {
    tempLeft = tree.left;
    tempRight = tree.right;
    tree.left = tempRight;
    tree.right = tempLeft;

    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
  }
}
