// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let necessarySum = 0;
  for (let i = 1; i <= X; i++) {
    necessarySum += i;
  }

  const used = {};
  let currentSum = 0;

  for (let i = 0; i < A.length; i++) {
    const num = A[i];

    if (used[num] == undefined) {
      currentSum += num;
      used[num] = true;
    }

    if (currentSum === necessarySum) {
      return i;
    }
  }

  return -1;
}
