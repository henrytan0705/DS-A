function hasSingleCycle(array) {
  let visited = 0;
  let index = 0;

  while (visited < array.length) {
    // if first element is 0 return false
    if (visited > 0 && index === 0) return false;
    visited++;
    index = moveIndex(index, array);
  }

  // check if returned back to starting index
  return index === 0;
}

function moveIndex(index, array) {
  let jump = array[index];
  let nextIndex = (index + jump) % array.length;

  if (nextIndex >= 0) return nextIndex;
  return nextIndex + array.length;
}
