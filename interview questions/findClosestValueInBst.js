function findClosestValueInBst(tree, target) {
  return findClosestHelper(tree, target, tree.value);
}

function findClosestHelper(tree, target, closest) {
  if (tree === null) return closest;

  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  if (target < tree.value) {
    return findClosestHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}
// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
