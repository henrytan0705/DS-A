function threeNumberSum(array, targetSum) {
  let results = [];
  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length - 2; i++) {
    let curr = array[i];
    let left = i + 1;
    let right = array.length - 1;

    //unique so compare left and right pointer values
    while (left < right) {
      let sum = curr + array[left] + array[right];

      if (sum === targetSum) {
        results.push([curr, array[left], array[right]]);
        left++;
        right--;
      } else if (sum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }

  return results;
}
