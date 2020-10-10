function moveElementToEnd(array, toMove) {
  let i = 0;

  for (let j = 1; j < array.length; j++) {
    let left = array[i];
    let right = array[j];

    if (left !== right && right !== toMove) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
  }

  return array;
}
