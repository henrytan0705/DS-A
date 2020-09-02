var subtractProductAndSum = function(n) {
  let sum = 0;
  let product = 1;

  n.toString()
    .split("")
    .map(num => {
      sum += +num;
      product *= +num;
    });

  return product - sum;
};
