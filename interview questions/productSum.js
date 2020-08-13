// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, level = 1) {
  let levelSum = 0;

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      levelSum += array[i];
    } else {
      levelSum += productSum(array[i], level + 1);
    }
  }

  return levelSum * level;
}
