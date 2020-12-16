def isValidSubsequence(array, sequence):
       # track sequence element
    seq_idx = 0

       for num in array:
            # if instance of sequence element is found move onto next one
            # once all sequence elements are found return true
            if num == sequence[seq_idx]:
                seq_idx += 1
            if seq_idx == len(sequence):
                return True
        # return false if all values have been checked and sequence is not complete
        return False
