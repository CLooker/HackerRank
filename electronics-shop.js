// https://www.hackerrank.com/challenges/electronics-shop/problem

const getMoneySpent = (keyboards, drives, s) => {
  const answer = (
    keyboards
    .reduce((possibleTotals, k) => (
      drives.reduce((possibleTotals, d) => possibleTotals.push(k + d) && possibleTotals, possibleTotals)
    ), [])
    .filter(t => t <= s)
    .sort((a, b) => b - a)[0]
  );

  return answer ? answer : -1;
}

