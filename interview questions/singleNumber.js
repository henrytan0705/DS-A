// Use XOR to find element with no duplicate in array
// No extra memeory used

var singleNumber = function(nums) {
  let single = 0;

  for (let i = 0; i < nums.length; i++) {
    single ^= nums[i];
  }

  return single;
};
