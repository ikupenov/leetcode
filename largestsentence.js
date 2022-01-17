function solution(S) {
  const sentences = S.split(/[?!.]/);
  const maxLen = sentences
    .map(x => x
      .trim()
      .split(" ")
      .filter(y => y.length > 0)
      .length
    )
    .reduce((x, y) => y <= x ? x : y);

  return maxLen;
}

const input = "Forget CVs..Save time . x x";
const result = solution(input);

console.log(result);
