def longestPalindromicSubstring(string):
    currentLongest = [0, 1]
       for i in range(1, len(string)):
            odd = getLongestPalindrome(string, i-1, i+1)
            even = getLongestPalindrome(string, i-1, i)

            oddLength = odd[1] - odd[0]
            evenLength = even[1] - even[0]
            longest = odd if oddLength > evenLength else even

            longestLength = longest[1] - longest[0]
            currentLongestLength = currentLongest[1] - currentLongest[0]
            currentLongest = currentLongest if currentLongestLength > longestLength else longest

        start = currentLongest[0]
        end = currentLongest[1]

        return string[start:end]


def getLongestPalindrome(string, leftIdx, rightIdx):
    while leftIdx >= 0 and rightIdx < len(string):
        if string[leftIdx] != string[rightIdx]:
            break
        leftIdx -= 1
        rightIdx += 1

    return [leftIdx + 1, rightIdx]
