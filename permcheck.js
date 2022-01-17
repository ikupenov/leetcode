// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const map = {};

  for (let i = 0; i < A.length; i++) {
    const num = A[i];

    // No point in progressing if the number is
    // outside the permutation range
    if (num > A.length) {
      return 0;
    }

    if (map[num] == undefined) {
      map[num] = 1;
    }
    else {
      // The number is already present once so
      // if we hit it for a second time, it's not a permutation
      return 0;
    }
  }

  const mapKeys = Object.keys(map);
  for (let i = 0; i < mapKeys.length; i++) {
    const key = mapKeys[i];
    if (map[key] !== 1) {
      return 0;
    }
  }

  return 1;
}
