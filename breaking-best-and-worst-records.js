// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  let e = scores.reduce(({ low, lowCounter, high, highCounter }, s, index) => {
     if (index === 0) {low = s; high = s}
     if (s < low) {low = s; lowCounter += 1}
     if (s > high) {high = s; highCounter += 1}
     return {low, lowCounter, high, highCounter};
  }, {
    low: 0,
    lowCounter: 0,
    high: 0,
    highCounter: 0
  });
  return [e.highCounter, e.lowCounter];
}
