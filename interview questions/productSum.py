# O(n) Time | O(d) Space - depth level

def productSum(array, depth=1):
    sum = 0

    for ele in array:
        if type(ele) is list:
            sum += productSum(ele, depth + 1)
        else:
            sum += ele

    return sum * depth
