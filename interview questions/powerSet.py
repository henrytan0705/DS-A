def powerset(array):
    results = [[]]
	
	for ele in array:
		length = len(results)
		for i in range(length):
			subset = results[i]
			results.append(subset + [ele])
	
	return results
	
