/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    const digit = digits[i];

    if (digit < 9) {
      digits[i] = digit + 1;
      break;
    }
    else {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
      }
    }
  }

  return digits;
};

// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
//// Does not work with big numbers
// var plusOne = function (digits) {
//   let sum = 1;
//   let multiplier = 10 ** (digits.length - 1);

//   for (let i = 0; i < digits.length; i++) {
//     const digit = digits[i];
//     sum += digit * multiplier;
//     multiplier /= 10;
//   }

//   let result = [];
//   while (sum > 0) {
//     const lastDigit = sum % 10;
//     result.unshift(lastDigit);
//     sum = Math.trunc(sum / 10);
//   }

//   return result;
// };
