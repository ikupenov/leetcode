// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// write your code in JavaScript (Node.js 8.9.4)
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// write your code in JavaScript (Node.js 8.9.4)
// O(n) runtime
function solution(S, P, Q) {
  const track = [];

  // Keep track of how many times we see each letter at every index
  for (let i = 0; i < S.length; i++) {
    if (i === 0) {
      // initialize
      track[i] = { "A": 0, "C": 0, "G": 0, "T": 0 };
    }
    else {
      const prevTrack = track[i - 1];
      track[i] = {
        "A": prevTrack["A"],
        "C": prevTrack["C"],
        "G": prevTrack["G"],
        "T": prevTrack["T"]
      };
    }

    const currLetter = S[i];
    track[i][currLetter]++;
  }

  const result = [];

  const len = P.length;
  for (let i = 0; i < len; i++) {
    const x = P[i];
    const y = Q[i];

    if (x === 0) {
      // If the starting position (x) is 0, we calculate based 
      // on every letter we've seen so far
      const a = track[y]["A"] === 0 ? Infinity : 1;;
      const c = track[y]["C"] === 0 ? Infinity : 2;
      const g = track[y]["G"] === 0 ? Infinity : 3;
      const t = track[y]["T"] === 0 ? Infinity : 4;

      const min = Math.min(a, c, g, t);
      result.push(min);
    }
    else {
      // If there's a slice, we substract the occurences from the starting position (x)
      // from the end position (y), and calculate based on that result
      const a = track[y]["A"] - track[x - 1]["A"] === 0 ? Infinity : 1;
      const c = track[y]["C"] - track[x - 1]["C"] === 0 ? Infinity : 2;
      const g = track[y]["G"] - track[x - 1]["G"] === 0 ? Infinity : 3;
      const t = track[y]["T"] - track[y - 1]["T"] === 0 ? Infinity : 4;

      const min = Math.min(a, c, g, t);
      result.push(min);
    }
  }

  return result;
}

// // O(n*m)
// function solution(S, P, Q) {
//   const alphabetMap = { A: "1", C: "2", G: "3", T: "4" };

//   const queryResultMap = {};
//   const queryResult = [];

//   // P.length equals Q.length
//   const len = P.length;

//   for (let i = 0; i < len; i++) {
//     const startIndex = P[i];
//     const endIndex = Q[i];

//     const mapKey = `${startIndex}-${endIndex}`;
//     if (queryResultMap[mapKey] === undefined) {
//       let minValue = Infinity;

//       for (let j = startIndex; j <= endIndex; j++) {
//         const letter = S[j];
//         const letterValue = alphabetMap[letter];

//         minValue = Math.min(minValue, letterValue);
//       }

//       queryResultMap[mapKey] = minValue;
//     }

//     const result = queryResultMap[mapKey];
//     queryResult.push(result);
//   }

//   return queryResult;
// }
