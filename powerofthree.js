// https://leetcode.com/problems/power-of-three/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return n > 0 && 3 ** 21 % n === 0;
};

// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isPowerOfThree = function (n) {
//   while (n % 3 === 0 && n > 0) n /= 3;
//   return n === 1;
// };

// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isPowerOfThree = function (n) {
//   if (n === 0) return false;

//   let left = 0;
//   let right = Math.trunc(n / 3);

//   while (left <= right) {
//     const mid = Math.trunc((left + right) / 2);
//     const powerOfThree = 3 ** mid;

//     if (n < powerOfThree) {
//       right = mid - 1;
//     }
//     else if (powerOfThree < n) {
//       left = mid + 1;
//     }
//     else {
//       return true;
//     }
//   }

//   return false;
// };

const result = isPowerOfThree(27);
console.log(result);
