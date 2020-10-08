// Brute FOrce Solution O(n^3) time

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

///////////////////////////////////////////////////////////////////////////////

// Optimized Solution O(n^2) time

function longestPalindromicSubstring(string) {
  // If string is 1 letter long then it is the longest palindrome substring
  let currentLongest = [0, 1];

  for (let i = 1; i < string.length; i++) {
    // Indexes of odd and even length palindromes
    const odd = getLongestPalindrome(string, i - 1, i + 1);
    const even = getLongestPalindrome(string, i, i + 1);

    // Get lengths of palindromes and find the longest of the two
    const oddLength = odd[1] - odd[0];
    const evenLength = even[1] - even[0];
    const longest = oddLength > evenLength ? odd : even;

    // Compare longest to currentLongest
    const longestLength = longest[1] - longest[0];
    const currentLongestLength = currentLongest[1] - currentLongest[0];
    currentLongest =
      currentLongestLength > longestLength ? currentLongest : longest;
  }
  // SLice string according to left/right indexes of longest substring
  return string.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindrome(string, leftIdx, rightIdx) {
  // Check if indexes are within valid range
  while (leftIdx >= 0 && rightIdx < string.length) {
    const leftChar = string[leftIdx];
    const rightChar = string[rightIdx];
    // Exit if chars dont make palindrome
    if (leftChar !== rightChar) break;
    // Else check next left and right char
    leftIdx--;
    rightIdx++;
  }
  // Go back to previous left idx as starting point
  // Right index is endpoint(non-inclusive) so remain same
  return [leftIdx + 1, rightIdx];
}
