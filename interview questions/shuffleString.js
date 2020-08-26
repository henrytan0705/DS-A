var restoreString = function(s, indices) {
  let newString = [];

  for (let i = 0; i < indices.length; i++) {
    newString[indices[i]] = s[i];
  }

  return newString.join("");
};
