// https://leetcode.com/problems/first-unique-character-in-a-string/submissions/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map[char] == undefined) {
      map[char] = [0, i];
    }
    else {
      const [count] = map[char];
      map[char] = [count + 1, i];
    }
  }

  const mapKeys = Object.keys(map);
  for (let i = 0; i < mapKeys.length; i++) {
    const key = mapKeys[i];
    const [count, index] = map[key];
    if (count === 0) return index;
  }

  return -1;
};
