/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const bracketsStack = [];
  const bracketsMap = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  for (let char of s) {
    const isOpeningBracket = !!bracketsMap[char];

    if (isOpeningBracket) {
      const closingBracket = bracketsMap[char];
      bracketsStack.push(closingBracket);
    }
    else {
      const closingBracket = bracketsStack.pop();
      if (closingBracket !== char) return false;
    }
  }

  return !bracketsStack.length;
};
