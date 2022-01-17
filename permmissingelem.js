// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// write your code in JavaScript (Node.js 8.9.4)
function solution(A) {
  let maxSum = 0;
  let currSum = 0;

  for (let i = 0; i <= A.length; i++) {
    maxSum += i + 1;
    if (i < A.length) currSum += A[i];
  }

  return maxSum - currSum;
}
