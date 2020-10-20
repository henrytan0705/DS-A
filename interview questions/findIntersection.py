# Input = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
# Output = "1,4,13"

def find_intersection(strArr):
    results = []
    arr1 = strArr[0].split(", ")
    arr2 = strArr[1].split(", ")

    for i in range(len(arr1)):
        if arr1[i] in arr2:
            results.append(arr1[i])

    return ",".join(results) if len(results) > 0 else false


# strArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
# print find_intersection(strArr)
