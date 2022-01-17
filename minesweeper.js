function minesweeper(array) {
  for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array[row].length; col++) {
      const element = array[row][col];
      if (element === "X") {
        continue;
      }

      const hasPrevRow = !!array[row - 1];
      const hasNextRow = !!array[row + 1];

      const left = array[row][col - 1] === "X" ? 1 : 0;
      const right = array[row][col + 1] === "X" ? 1 : 0;

      let mines = left + right;

      if (hasPrevRow) {
        const topLeft = array[row - 1][col - 1] === "X" ? 1 : 0;
        const top = array[row - 1][col] === "X" ? 1 : 0;
        const topRight = array[row - 1][col + 1] === "X" ? 1 : 0;

        mines += topLeft + top + topRight;
      }

      if (hasNextRow) {
        const bottomLeft = array[row + 1][col - 1] === "X" ? 1 : 0;
        const bottom = array[row + 1][col] === "X" ? 1 : 0;
        const bottomRight = array[row + 1][col + 1] === "X" ? 1 : 0;

        mines += bottomLeft + bottom + bottomRight;
      }

      array[row] = replaceAt(array[row], col, mines.toString());
    }
  }

  return array;
}

function replaceAt(str, index, value) {
  const left = str.substring(0, index);
  const right = str.substring(index + 1);
  return left + value + right;
}

const input = [
  'XOOXXXOO',
  'OOOOXOXX',
  'XXOXXOOO',
  'OXOOOXXX',
  'OOXXXXOX',
  'XOXXXOXO',
  'OOOXOXOX',
  'XOXXOXOX',
];

const output = minesweeper(input);
const result = output.map(x => x.split("").join(" "));

console.log(result);
