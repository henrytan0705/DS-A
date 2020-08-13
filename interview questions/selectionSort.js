function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let index = i;

    for (let j = i + 1; j < array.length; j++) {
      // update current min element and index of element
      if (array[j] < min) {
        min = array[j];
        index = j;
      }
    }

    //swap
    [array[i], array[index]] = [array[index], array[i]];
  }

  return array;
}
