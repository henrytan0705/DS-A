function caesarCipherEncryptor(string, key) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let index = (alphabet.indexOf(char) + key) % 26;
    result += alphabet[index];
  }

  return result;
}
