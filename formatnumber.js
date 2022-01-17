function formatNumber(str) {
  let normalizedStr = "";
  for (let char of str) {
    if (char >= "0" && char <= "9") {
      normalizedStr += char;
    }
  }

  let formattedStr = "";
  for (let j = 3, i = 3; i <= normalizedStr.length;) {
    const section = normalizedStr.substring(i - j, i);
    formattedStr += section;

    if (i < normalizedStr.length) {
      formattedStr += "-";
    }

    if ([2, 4].includes(normalizedStr.length - i)) {
      j = 2;
    }

    i += j;
  }

  return formattedStr;
}

const input = "0 - 22 1985--324";
const result = formatNumber(input);

console.log(result);
