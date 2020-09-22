class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def branchSums(root):
    sums_list = []
    calculateSums(root, sums_list, 0)
    return sums_list


def calculateSums(node, list, sum):
    if node is None:
        return

    sum += node.value
    if node.left is None and node.right is None:
        list.append(sum)
        return

    calculateSums(node.left, list, sum)
    calculateSums(node.right, list, sum)
