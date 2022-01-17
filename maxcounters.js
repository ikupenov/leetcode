// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let counters = [];

  for (let i = 0; i < N; i++) {
    counters[i] = 0;
  }

  let maxSum = 0;
  let minVal = 0;

  for (let i = 0; i < A.length; i++) {
    const op = A[i];

    if (op > N) {
      minVal = maxSum;
    }
    else {
      const index = op - 1;

      if (counters[index] < minVal) {
        counters[index] = minVal;
      }

      counters[index]++;
      maxSum = Math.max(maxSum, counters[index]);
    }
  }

  if (minVal > 0) {
    for (let i = 0; i < counters.length; i++) {
      if (counters[i] < minVal) {
        counters[i] = minVal;
      }
    }
  }

  return counters;
}
