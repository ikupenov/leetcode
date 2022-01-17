// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  const binaryN = N.toString(2);

  let currCount = 0;
  let maxCount = 0;

  let isCounting = false;

  for (let i = 0; i < binaryN.length; i++) {
    const num = binaryN[i];

    if (num === "0") {
      if (isCounting) currCount++;
    }
    else {
      isCounting = true;
      maxCount = Math.max(maxCount, currCount);
      currCount = 0;
    }
  }

  return maxCount;
}
