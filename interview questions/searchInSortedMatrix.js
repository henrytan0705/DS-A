function searchInSortedMatrix(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const index = row.indexOf(target);
    if (index > -1) return [i, index];
  }

  return [-1, -1];
}
