function insertionSort(array) {
  //loop through elements and sort each element
  for (let i = 1; i < array.length; i++) {
    sortElement(array, i);
  }
  return array;
}

//loop from current index to first index and swap if neccessary
function sortElement(array, index) {
  for (let i = index; i > 0; i--) {
    //swap
    if (array[i] < array[i - 1]) {
      [array[i], array[i - 1]] = [array[i - 1], array[i]];
    }
  }
}
