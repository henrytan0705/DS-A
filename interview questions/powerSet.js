function powerset(array) {
  const results = [[]];

  for (const ele of array) {
    const length = results.length;
    for (let i = 0; i < length; i++) {
      const subset = results[i];
      results.push(subset.concat(ele));
    }
  }

  return results;
}
