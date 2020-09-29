def findClosestValueInBst(tree, target):
    return findClosestHelper(tree, target, tree.value)


def findClosestHelper(tree, target, closest):
    if tree == None:
        return closest

    if abs(target - closest) > abs(target - tree.value):
        closest = tree.value

    if target < tree.value:
        return findClosestHelper(tree.left, target, closest)
    elif target > tree.value:
        return findClosestHelper(tree.right, target, closest)
    else:
        return closest
