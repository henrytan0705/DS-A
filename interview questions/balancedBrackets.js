function balancedBrackets(string) {
  let stack = [];

  let pair = {
    "[": "]",
    "(": ")",
    "{": "}"
  };

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    // check if closing bracket matches left side
    if (char === "]" || char === ")" || char === "}") {
      // pop previous left unbalanced bracket from stack
      let left = stack.pop();
      // return false if it does not match
      if (pair[left] !== char) return false;
    } else {
      // push left brackets into stack
      if (pair[char]) stack.push(char);
    }
  }

  // if all brackets are paired then there should be an empty stack
  if (stack.length === 0) return true;
  return false;
}
