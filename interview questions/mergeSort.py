import math


def mergeSort(array):
    if len(array) <= 1:
        return array

       mid = math.floor(len(array) / 2)
        left = array[0:mid]
        right = array[mid:]

        sortedLeft = mergeSort(left)
        sortedRight = mergeSort(right)

        return merge(sortedLeft, sortedRight)


def merge(left, right):
    sortedArray = []

    while (len(left) > 0 and len(right) > 0):
        if left[0] < right[0]:
            sortedArray.append(left.pop(0))
        else:
            sortedArray.append(right.pop(0))
    return sortedArray + left + right
