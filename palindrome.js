/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let formattedS = "";
  for (let letter of s.toLowerCase()) {
    const isLetter = letter >= "a" && letter <= "z";
    const isNumber = letter >= "0" && letter <= "9";
    if (isLetter || isNumber) formattedS += letter;
  }

  for (let i = 0, j = formattedS.length - 1; i <= j; i++, j--) {
    const leftLetter = formattedS[i];
    const rightLetter = formattedS[j];
    if (leftLetter !== rightLetter) return false;
  }

  return true;
};
