// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  return calculate(n, n);
};

const memo = new Map();

function calculate(n, m) {
  if (m === 0) return 1;
  if (m < 0) return 0;

  if (!memo.has(m)) {
    const x = calculate(n, m - 1);
    const y = calculate(n, m - 2);
    memo.set(m, x + y);
  }

  return memo.get(m);
}

const result = calculate(3, 3);
console.log(result);
