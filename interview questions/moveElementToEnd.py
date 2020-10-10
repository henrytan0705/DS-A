def moveElementToEnd(array, toMove):
    i = 0
	
	for j in range(1, len(array)):
		if array[i] != array[j] and array[j] != toMove:
			array[i], array[j] = array[j], array[i]
			i += 1
	
	return array