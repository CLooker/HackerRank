
// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function solve(a0, a1, a2, b0, b1, b2) {
  const args = [
    [a0, b0],
    [a1, b1],
    [a2, b2]
  ]
  const scoresObj = args.reduce((scoresObj, scorePairArr) => {
    if (scorePairArr[0] > scorePairArr[1]) {
      scoresObj.playerA++;
    } else if (scorePairArr[0] < scorePairArr[1]) {
      scoresObj.playerB++;
    }
    return scoresObj;
  }, {
    playerA: 0,
    playerB: 0
  })
  return [scoresObj.playerA, scoresObj.playerB]
}
