
// https://www.hackerrank.com/challenges/compare-the-triplets/problem

// fancy
const solve = (a0, a1, a2, b0, b1, b2) =>
  [[a0, b0], [a1, b1], [a2, b2]]
    .reduce((ans, scorePairArr) =>
      scorePairArr[0] > scorePairArr[1]
        ? [++ans[0], ans[1]]
        : scorePairArr[0] < scorePairArr[1] ? [ans[0], ++ans[1]] : ans
      , [0, 0]
  );

// regular
function solve(a0, a1, a2, b0, b1, b2) {
  const args = [[a0, b0], [a1, b1], [a2, b2]];
  const scoresObj = args.reduce(({ playerA, playerB }, scorePairArr) => {
    if (scorePairArr[0] > scorePairArr[1]) {
      ++playerA;
    } else if (scorePairArr[0] < scorePairArr[1]) {
      ++playerB;
    }
    return {playerA, playerB};
  }, {
    playerA: 0,
    playerB: 0
  })
  return [scoresObj.playerA, scoresObj.playerB]
}
