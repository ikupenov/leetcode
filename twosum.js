// https://leetcode.com/problems/two-sum/submissions/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const results = {};
  let indices = [];

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    const existingResult = results[target - number];
    if (existingResult !== undefined) {
      indices = [existingResult, i];
      break;
    }

    results[number] = i;
  }

  return indices;
};
