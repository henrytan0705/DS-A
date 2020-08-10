function findThreeLargestNumbers(array) {
  let result = [null, null, null];
  for (const num of array) {
    compareValues(num, result);
  }
  return result;
}

function compareValues(num, result) {
  // compare to current largest
  if (result[2] === null || num > result[2]) {
    updateResult(num, result, 2);
  } // compare to second largest
  else if (result[1] === null || num > result[1]) {
    updateResult(num, result, 1);
  } // compare to third largest
  else if (result[0] === null || num > result[0]) {
    updateResult(num, result, 0);
  }
}

function updateResult(num, result, idx) {
  for (let i = 0; i <= idx; i++) {
    // update corresponding index
    if (i === idx) {
      result[i] = num;
    } // shift other index elements to the left
    else {
      result[i] = result[i + 1];
    }
  }
}
