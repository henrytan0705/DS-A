def threeNumberSum(array, targetSum):
    triplets = []
    array.sort()

    for i in range(len(array)-2):
        # track left and right index of rest of array starting from i
        left_idx = i + 1
        right_idx = len(array) - 1

        while left_idx < right_idx:
            sum = array[i] + array[left_idx] + array[right_idx]
            # store current elements if total is equal to targetSum
            # move left and right indexes inward if equal
            if sum == targetSum:
                triplets.append([array[i], array[left_idx], array[right_idx]])
                left_idx += 1
                right_idx -= 1
            # move right index if sum is less
            elif sum < targetSum:
                left_idx += 1
            # move left index if sum is greater
            else:
                right_idx -= 1
    return triplets
