// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const map = {};

  for (let i = 0; i < A.length; i++) {
    const num = A[i];

    if (map[num] == undefined) map[num] = 1;
    else map[num]++;
  }

  const mapKeys = Object.keys(map);
  for (let i = 0; i < mapKeys.length; i++) {
    const key = mapKeys[i];
    const count = map[key];

    if (count % 2 === 1) return parseInt(key, 10);
  }
}
