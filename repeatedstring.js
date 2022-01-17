// https://www.hackerrank.com/challenges/repeated-string/problem?h_r=profile

function repeatedString(s, n) {
  const rem = n % s.length;

  let aCount = 0;
  let aCountRem = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      aCount++;
      if (i < rem) aCountRem++;
    }
  }
  
  const aCountTotal = (n - rem) / s.length * aCount + aCountRem;
  return aCountTotal;
}
