function solution(A, D) {
  const len = A.length;

  let balance = 0;
  const spendingByMonth = [];

  for (let i = 0; i < len; i++) {
    const amount = A[i];
    const date = D[i];

    const [, month] = date.split("-");

    if (amount < 0) {
      const spendingForMonth = spendingByMonth[month];
      if (spendingForMonth === undefined) {
        spendingByMonth[month] = [1, amount];
      }
      else {
        const [count, total] = spendingForMonth;
        spendingByMonth[month] = [count + 1, Math.abs(total + amount)];
      }
    }

    balance += amount;
  }

  for (let i = 1; i <= 12; i++) {
    const spendingForMonth = spendingByMonth[i];

    if (spendingForMonth === undefined) {
      balance += -5;
    }
    else {
      const [count, total] = spendingForMonth;
      if (count < 3 || total < 100) {
        balance += -5;
      }
    }
  }

  return balance;
}

// const inputA = [100, 100, 100, -10];
// const inputD = ["2020-12-31", "2020-12-22", "2020-12-03", "2020-12-29"];

const inputA = [100, 100, -10, -20, -30];
const inputD = ["2020-01-01", "2020-02-01", "2020-02-11", "2020-02-05", "2020-02-08"];

const result = solution(inputA, inputD);
console.log(result);
