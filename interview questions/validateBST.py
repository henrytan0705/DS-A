import math


class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def validateBst(tree):
    return validateHelper(tree, -math.inf, math.inf)


def validateHelper(tree, min, max):
    if tree == None:
        return True
    if (tree.value < min or tree.value >= max):
        return False
    leftValid = validateHelper(tree.left, min, tree.value)
    rightValid = validateHelper(tree.right, tree.value, max)
    return leftValid and rightValid
