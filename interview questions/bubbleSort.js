function bubbleSort(array) {
  let unsorted = true;
  let numbersSorted = 0;

  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < array.length - 1 - numbersSorted; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }

    numbersSorted++;
  }

  return array;
}
