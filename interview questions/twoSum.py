# O(n log n) Time| O(1) Space

def twoNumberSum(array, targetSum):
	# sort array in order
    array.sort()


# track left and right elements
left_idx = 0
right_idx = len(array) - 1

while left_idx != right_idx:
		left = array[left_idx]
		right = array[right_idx]

        # check if sum is equal to targetSum
        # if sum is greater decrement right index
        # else increment right index
		if left + right == targetSum:
			return [left, right]
		elif left + right > targetSum:
			right_idx -= 1
		else:
			left_idx += 1

	return []
