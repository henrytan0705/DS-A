def longestPeak(array):
    longestPeak = 0
      i = 1

       while i < len(array)-1:
            left = array[i-1]
            curr = array[i]
            right = array[i+1]

            peakFound = left < curr and curr > right

            if not peakFound:
                i += 1
                continue

            leftIdx = i - 2
            while leftIdx >= 0 and array[leftIdx] < array[leftIdx+1]:
                leftIdx -= 1

            rightIdx = i + 2
            while rightIdx < len(array) and array[rightIdx] < array[rightIdx-1]:
                rightIdx += 1

            currPeakLength = rightIdx - leftIdx - 1
            longestPeak = max(currPeakLength, longestPeak)
            i = rightIdx

        return longestPeak
