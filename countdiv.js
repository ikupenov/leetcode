// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// write your code in JavaScript (Node.js 8.9.4)
function solution(A, B, K) {
  const incl = A % K === 0 ? 1 : 0;
  let result = parseInt(B / K) - parseInt(A / K) + incl;
  return result;
}

// function solution(A, B, K) {
//   let largestDivisibleNum = null;
//   for (let i = B; Math.max(A, K) <= i; i--) {
//     if (i % K === 0) {
//       largestDivisibleNum = i;
//       break;
//     }
//   }

//   if (largestDivisibleNum === null) return 0;

//   let count = 0;
//   for (let i = largestDivisibleNum; Math.max(A, K) <= i; i -= K) {
//     if (i % K === 0) count++;
//   }

//   return count;
// }
