function isMonotonic(array) {
  let onlyIncreasing = true;
  let onlyDecreasing = true;

  for (let i = 1; i < array.length; i++) {
    const direction = array[i] - array[i - 1];
    // change to false if direction does not match pattern
    if (direction > 0) onlyDecreasing = false;
    if (direction < 0) onlyIncreasing = false;
  }
  // only one is true if monotonic
  return onlyIncreasing || onlyDecreasing;
}
