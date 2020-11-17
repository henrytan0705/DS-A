def runLengthEncoding(string):
    counter = 1
      result = ""

       for i in range(1, len(string)+1):
            prev = string[i-1]
            curr = string[i] if i < len(string) else None

            if (prev != curr or counter == 9):
                encoding = f'{counter}{prev}'
                result += encoding
                counter = 0

            counter += 1

        return result
