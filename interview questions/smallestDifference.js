// O(n^2) time | O(1) space
// Brute force strategy
function smallestDifference(arrayOne, arrayTwo) {
  let results = [];
  let minDifference = Infinity;

  for (let i = 0; i < arrayOne.length; i++) {
    let first = arrayOne[i];

    for (let j = 0; j < arrayTwo.length; j++) {
      let second = arrayTwo[j];
      let difference = first - second;

      // return values if difference is 0
      if (difference === 0) return [first, second];
      // absolute value difference if negative
      if (difference < 0) difference *= -1;
      // update minDifference and results when smaller difference is found
      if (difference < minDifference) {
        minDifference = difference;
        results = [first, second];
      }
    }
  }

  return results;
}

////////////////////////////////////////////////////////////////

// O(nlong(n) + mlong(m)) time | O(1) space
// Optimized strategy
function smallestDifference(arrayOne, arrayTwo) {
  // sort both arrays
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let smallest = Infinity;
  let results = [];

  while (i < arrayOne.length && j < arrayTwo.length) {
    let first = arrayOne[i];
    let second = arrayTwo[j];
    let difference = first - second;
    if (difference < 0) difference *= -1;

    // move to next element of array with smaller value
    if (first < second) {
      i++;
    } else if (second < first) {
      j++;
    }
    // return values if difference is 0
    else {
      return [first, second];
    }

    // update current smallest and results
    if (difference < smallest) {
      smallest = difference;
      results = [first, second];
    }
  }
  return results;
}
