// https://www.hackerrank.com/challenges/compare-the-triplets/problem

// declarative
const solve = (a0, a1, a2, b0, b1, b2) =>
  [[a0, b0], [a1, b1], [a2, b2]].reduce(
    (ans, scorePairArr) =>
      scorePairArr[0] > scorePairArr[1]
        ? [++ans[0], ans[1]]
        : scorePairArr[0] < scorePairArr[1] ? [ans[0], ++ans[1]] : ans,
    [0, 0]
  );

// imperative
function solve(a0, a1, a2, b0, b1, b2) {
  const args = [[a0, b0], [a1, b1], [a2, b2]];
  let playerA = 0;
  let playerB = 0;
  for (let i = 0; i < args.length; i++) {
    if (args[i][0] > args[i][1]) {
      ++playerA;
    } else if (args[i][0] < args[i][1]) {
      ++playerB;
    }
  }
  return [playerA, playerB];
}
