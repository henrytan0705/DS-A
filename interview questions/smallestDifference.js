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
