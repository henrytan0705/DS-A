var shuffle = function(nums, n) {
  let results = [];

  for (let i = 0; i < n; i++) {
    results.push(nums[i]);
    results.push(nums[n + i]);
  }

  return results;
};
