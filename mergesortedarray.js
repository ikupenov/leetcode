// https://leetcode.com/problems/merge-sorted-array/submissions/

/**
 * @param {number[]} xNums
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify xNums in-place instead.
 */
var merge = function (xNums, xLen, yNums, yLen) {
  let xPointer = xLen - 1;
  let yPointer = yLen - 1;
  let zPointer = xLen + yLen - 1;

  while (zPointer >= 0) {
    const xNum = xPointer >= 0 ? xNums[xPointer] : -Infinity;
    const yNum = yPointer >= 0 ? yNums[yPointer] : -Infinity;

    xNums[zPointer] = Math.max(xNum, yNum);

    if (xNum < yNum) yPointer--;
    else if (yNum < xNum) xPointer--;
    else {
      xPointer--;
      yPointer--;
      zPointer--;

      xNums[zPointer] = Math.max(xNum, yNum);
    }

    zPointer--;
  }
};

// /**
//  * @param {number[]} xNums
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify xNums in-place instead.
//  */
// var merge = function (xNums, xLen, yNums, yLen) {
//   xNums.splice(xLen, yLen);

//   let xPointer = 0;
//   let yPointer = 0;

//   while (xPointer < xLen + yLen) {
//     const xNum = xNums[xPointer];
//     const yNum = yNums[yPointer];

//     if (xNum === undefined || yNum < xNum) {
//       xNums.splice(xPointer, 0, yNum);
//       xPointer++;
//       yPointer++;
//     }
//     else {
//       xPointer++;
//     }
//   }
// };

// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function (nums1, m, nums2, n) {
//   let xPointer = 0;
//   let yPointer = 0;
//   let inserted = 0;

//   while (xPointer < m + n) {
//     const xNum = nums1[xPointer];
//     const yNum = nums2[yPointer];

//     if (yPointer >= n) break;

//     if (xPointer >= m + inserted) {
//       nums1.splice(xPointer, 0, yNum);
//       nums1.pop();
//       inserted++;
//       xPointer++
//       yPointer++;
//       continue;
//     }

//     if (xNum === yNum) {
//       nums1.splice(xPointer, 0, yNum);
//       nums1.pop();
//       inserted++;
//       xPointer += 2;
//       yPointer++;
//       continue;
//     }

//     if (xNum < yNum) {
//       xPointer++;
//       continue;
//     }

//     if (yNum < xNum) {
//       nums1.splice(xPointer, 0, yNum);
//       nums1.pop();
//       inserted++;
//       xPointer++;
//       yPointer++;
//       continue;
//     }
//   }
// };

// const result = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
const result = merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3);
// const result = merge([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5)
// const result = merge([1], 1, [], 0);
// const result = merge([1, 0, 0], 1, [2, 3], 2);

console.log(result);
