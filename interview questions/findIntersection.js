// Input = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output = "1,4,13"

function FindIntersection(strArr) {
  const results = [];
  const arr1 = strArr[0].split(", ");
  const arr2 = strArr[1].split(", ");

  for (const num1 of arr1) {
    if (arr2.includes(num1)) results.push(num1);
  }

  return results.length ? results.join(",") : false;
}
