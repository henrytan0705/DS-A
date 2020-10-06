function longestPalindromicSubstring(string) {
  let longestPal = "";

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      let substring = string.slice(i, j + 1);
      if (substring.length > longestPal.length && isPalindrome(substring)) {
        longestPal = substring;
      }
    }
  }

  return longestPal;
}

function isPalindrome(string) {
  let back = string.length - 1;
  for (let front = 0; front < string.length / 2; front++) {
    if (string[front] !== string[back]) return false;
    back--;
  }

  return true;
}
