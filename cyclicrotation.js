// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  if (K === 0 || A.length <= 1) {
    return A;
  }

  const rotatedA = [];
  const len = A.length;

  for (let i = 0; i < len; i++) {
    const newIndex = (i + K) % len;
    rotatedA[newIndex] = A[i];
  }

  return rotatedA;
}
