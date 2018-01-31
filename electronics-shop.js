// https://www.hackerrank.com/challenges/electronics-shop/problem

function getMoneySpent(keyboards, drives, s) {
  let answer = (
    keyboards
    .reduce((possibleTotals, k) => {
      drives.forEach(d => possibleTotals.push(k + d));
      return possibleTotals
    }, [])
    .filter(t => t <= s)
    .sort((a, b) => b - a)[0]);

  return answer ? answer : -1;
}
