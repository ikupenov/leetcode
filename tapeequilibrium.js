// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// write your code in JavaScript (Node.js 8.9.4)
function solution(A) {
  // Array length is always greater than 1 

  let leftSum = A[0];
  let rightSum = 0;

  for (let i = 1; i < A.length; i++) {
    rightSum += A[i];
  }

  let minDiff = Math.abs(leftSum - rightSum);

  for (let i = 1; i < A.length - 1; i++) {
    leftSum += A[i];
    rightSum -= A[i];

    const diff = Math.abs(leftSum - rightSum);
    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
}
