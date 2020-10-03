def searchInSortedMatrix(matrix, target):
    for i in range(len(matrix)):
		row = matrix[i]
		if (target in row):
			idx = row.index(target)
			if (idx >= 0):
				return [i, idx]

	return [-1,-1]
