/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }

  let left = 1;
  let right = Math.trunc(x / 2);

  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);
    const midSquare = mid * mid;

    if (midSquare > x) {
      right = mid - 1;
    }
    else if (midSquare < x) {
      left = mid + 1;
    }
    else {
      return mid;
    }
  }

  return right;
};
