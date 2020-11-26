function getPermutations(array) {
  const permutations = [];
  permutationHelper(0, array, permutations);
  return permutations;
}

function permutationHelper(i, array, permutations) {
  // check if i is at end of the array
  if (i == array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(array, i, j);
      permutationHelper(i + 1, array, permutations);
      swap(array, i, j);
    }
  }
}

function swap(array, i, j) {
  [[array[i]], [array[j]]] = [[array[j]], [array[i]]];
}
