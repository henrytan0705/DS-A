/*
 * Complete the 'countMax' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts STRING_ARRAY upRight as parameter.
 * Hackerrank question
 */

function countMax(upRight) {
  // use infinity as initial comparison values
  let minRow = Infinity;
  let minCol = Infinity;

  for (let i = 0; i < upRight.length; i++) {
    // row and col can have more than one digit so use split
    let moves = upRight[i].split(" ");
    let row = Number(moves[0]);
    let col = Number(moves[1]);

    // find smallest row and col number for area of overlap
    if (row < minRow) minRow = row;
    if (col < minCol) minCol = col;
  }

  //multiple row and col to find area of max overlap
  return minRow * minCol;
}
