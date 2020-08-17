function binarySearch(array, target) {
  // base case - return -1 for empty arrays
  if (array.length === 0) return -1;

  let midIdx = Math.floor(array.length / 2);
  let mid = array[midIdx];

  if (mid === target) {
    return midIdx;
  } else if (mid > target) {
    // if less than mid ele search from 0 to mid(non-inclusive)
    return binarySearch(array.slice(0, midIdx), target);
  } else {
    // if greater than mid ele search from mid+1 to end
    let results = binarySearch(array.slice(midIdx + 1), target);

    // if base case is hit then return -1
    if (results === -1) {
      return -1;
    } // if found then increement according to midIdx and +1
    else {
      return results + midIdx + 1;
    }
  }
}
