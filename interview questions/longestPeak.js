function longestPeak(array) {
  let longestPeak = 0;
  let i = 1;

  while (i < array.length - 1) {
    let left = array[i - 1];
    let current = array[i];
    let right = array[i + 1];

    //Check for peak
    const validPeak = left < current && current > right;

    if (!validPeak) {
      i++;
      continue;
    }

    // check left side
    let leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx--;
    }

    //check right side
    let rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx++;
    }

    //compare peak length to longest peak length
    const currentPeakLength = rightIdx - leftIdx - 1;
    longestPeak =
      currentPeakLength > longestPeak ? currentPeakLength : longestPeak;

    // move to position after current peak ends
    i = rightIdx;
  }

  return longestPeak;
}
