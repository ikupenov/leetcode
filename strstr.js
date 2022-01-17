/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (!needle.length) {
    return 0;
  }

  if (needle.length > haystack.length) {
    return -1;
  }

  const charTable = makeCharTable(needle);

  for (let i = needle.length - 1; i < haystack.length;) {
    const haystackStartingCharCode = haystack.charCodeAt(i);

    for (let j = needle.length - 1; j >= 0; j--) {
      const innerIteration = needle.length - 1 - j;
      const haystackCharCode = haystack.charCodeAt(i - innerIteration);
      const needleCharCode = needle.charCodeAt(j);

      if (haystackCharCode !== needleCharCode) {
        const skipAmount = charTable[haystackStartingCharCode] || needle.length;
        i += skipAmount;
        break;
      }

      if (j === 0) {
        return i - needle.length + 1;
      }
    }
  }

  return -1;
};

function makeCharTable(pattern) {
  const charTable = [];

  for (let i = 0; i < pattern.length - 1; i++) {
    const charCode = pattern.charCodeAt(i);
    charTable[charCode] = pattern.length - 1 - i;
  }

  return charTable;
};

const inputHaystack = "mississippi";
const inputNeedle = "issipi";

const result = strStr(inputHaystack, inputNeedle);
console.log(result);
