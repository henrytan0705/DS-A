function arrayOfProducts(array) {
  // create results array with default values of 1
  const results = new Array(array.length).fill(1);

  // loop left to right to grab left products
  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    results[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }

  // loop right to left to grab right products
  let rightRunningProduct = 1;
  for (let i = array.length - 1; i > -1; i--) {
    results[i] *= rightRunningProduct;
    rightRunningProduct *= array[i];
  }

  return results;
}
