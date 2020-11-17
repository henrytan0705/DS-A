function runLengthEncoding(string) {
  // have a counter variable and result string
  let counter = 1;
  let encodingResult = "";

  // loop through string
  for (let i = 1; i <= string.length; i++) {
    let prevChar = string[i - 1];
    let currentChar = string[i];

    // if different character or limit of 9 reached
    if (prevChar !== currentChar || counter === 9) {
      // generate encoding + reset counter
      let encoding = counter + prevChar;
      encodingResult += encoding;
      counter = 0;
    }

    counter++;
  }
  // return result
  return encodingResult;
}
