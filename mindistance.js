// https://www.hackerrank.com/challenges/minimum-distances/problem

function minimumDistances(a) {
  const htable = {};

  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    if (htable[element]) {
      htable[element].push(i);
    }
    else {
      htable[element] = [i];
    }
  }

  let minDistance = -1;
  for (let key in htable) {
    const element = htable[key];
    if (element.length === 2) {
      const [left, right] = element;
      const distance = Math.abs(left - right);

      if (distance < minDistance || minDistance === -1) {
        minDistance = distance;
      }
    }
  }

  return minDistance;
}
