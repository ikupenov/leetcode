// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// write your code in JavaScript (Node.js 8.9.4)
function solution(A) {
  let currWest = 0;
  let sum = 0;

  for (let i = A.length - 1; 0 <= i; i--) {
    const dir = A[i];

    if (dir === 1) currWest++;
    else sum += currWest;
  }

  return 1000000000 < sum ? -1 : sum;
}
