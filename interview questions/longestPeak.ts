export function longestPeak(array: number[]) {
  let longestPeak: number = 0;
  let i: number = 0;

  while (i < array.length - 1) {
    const validPeak = array[i - 1] < array[i] && array[i] > array[i + 1];

    if (!validPeak) {
      i++;
      continue;
    }

    let leftIdx: number = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx--;
    }

    let rightIdx: number = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx++;
    }

    const peakLength: number = rightIdx - leftIdx - 1;
    longestPeak = Math.max(peakLength, longestPeak);
    i = rightIdx;
  }

  return longestPeak;
}
