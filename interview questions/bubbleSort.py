def bubbleSort(array):
    # track array status and how many elements currently sorted
    sorted = False
    elements_sorted = 0

     while not sorted:
          # set as sorted and check if any swaps will be made
          sorted = True

           # loop through array -> starts at next index after each sort
           # swap elements if needed
           # if swap is made then array is not sorted -> set to false
           # after every cycle an element is sorted if array is fully sorted
           for i in range(len(array) - 1 - elements_sorted):
                if array[i] > array[i+1]:
                    swap(array, i, i+1)
                    sorted = False
            elements_sorted += 1

    return array

# helper function to make swap


def swap(array, left, right):
    array[left], array[right] = array[right], array[left]


pass
