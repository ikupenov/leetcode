// https://leetcode.com/problems/maximum-subarray/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
// Kadane's Algorithm
// O(n) runtime, O(1) space
var maxSubArray = function (nums) {
  let currMax = nums[0];
  let prevMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prevMax = Math.max(nums[i], nums[i] + prevMax);
    currMax = Math.max(currMax, prevMax);
  }

  return currMax;
};

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// // O(n) runtime, O(n) space
// var maxSubArray = function (nums) {
//   const lastIndex = nums.length - 1;
//   const maxSumByIndex = {
//     [lastIndex]: nums[lastIndex]
//   };

//   let currentMax = nums[lastIndex];

//   for (let i = lastIndex - 1; 0 <= i; i--) {
//     maxSumByIndex[i] = Math.max(nums[i], nums[i] + maxSumByIndex[i + 1]);
//     currentMax = Math.max(currentMax, maxSumByIndex[i])
//   }

//   return currentMax;
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// // Naive o(n^2), O(1) space
// var maxSubArray = function (nums) {
//   let maxSum = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     let currSum = nums[i];

//     if (currSum > maxSum) {
//       maxSum = currSum;
//     }

//     for (let j = i + 1; j < nums.length; j++) {
//       currSum += nums[j];
//       if (currSum > maxSum) {
//         maxSum = currSum;
//       }
//     }
//   }

//   return maxSum;
// };
