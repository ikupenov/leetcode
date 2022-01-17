// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// write your code in JavaScript (Node.js 8.9.4)
function solution(A) {
  const lookup = [];
  for (let i = 0; i < A.length; i++) {
    lookup[i] = false;
  }

  for (let i = 0; i < A.length; i++) {
    const num = A[i];
    if (0 <= num && num < A.length) {
      lookup[num] = true;
    }
  }

  for (let i = 1; i < lookup.length; i++) {
    if (!lookup[i]) return i;
  }

  return A.length + 1;
}

// function solution(A) {
//   const sortedA = A.sort((a, b) => a - b);

//   let minMissingNum = null;
//   let minPositiveNum = null;

//   for (let i = 0; i < sortedA.length; i++) {
//     const num = sortedA[i];
//     if (num <= 0) continue;

//     if (minPositiveNum === null) minPositiveNum = num;

//     const nextNum = sortedA[i + 1];
//     if (nextNum == undefined || nextNum - num > 1) {
//       minMissingNum = num + 1;
//       break;
//     }
//   }

//   // Array has only negative values or
//   // min positive number is larger than 1
//   if (minPositiveNum === null || 1 < minPositiveNum) {
//     return 1;
//   }

//   return minMissingNum;
// }
