// https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let replacePointer = 1;

  for (let i = 1; i < nums.length; i++) {
    const currNum = nums[i];
    const replaceNum = nums[replacePointer - 1];

    if (currNum !== replaceNum) {
      nums[replacePointer] = currNum;
      replacePointer++;
    }
  }

  return replacePointer;
};

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//   let currHighestNum = nums[0];
//   let replacePointer = 1;

//   for (let i = 1; i < nums.length; i++) {
//     const currNum = nums[i];

//     if (currNum !== currHighestNum) {
//       nums[replacePointer] = currNum;
//       currHighestNum = currNum;
//       replacePointer++;
//     }
//   }

//   return replacePointer;
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// O(n^2) runtime due to splice, O(1) space
// var removeDuplicates = function (nums) {
//   let occuringNum = null;

//   for (let i = 0; i < nums.length; i++) {
//     const currNum = nums[i];

//     if (currNum === occuringNum) {
//       nums.splice(i, 1);
//       i--;
//     }
//     else {
//       occuringNum = currNum;
//     }
//   }
// };

const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result = removeDuplicates(input);

console.log(input);
