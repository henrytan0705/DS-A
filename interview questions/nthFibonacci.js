function getNthFib(n) {
  // base cases
  if (n === 1) return 0;
  if (n === 2) return 1;

  // use recursion to calculate previous two values
  return getNthFib(n - 1) + getNthFib(n - 2);
}
