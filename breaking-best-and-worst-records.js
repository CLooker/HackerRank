// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

const breakingRecords = scores => (
  scores.reduce(({ high, low, answer }, s, index) => {
     if (index === 0) {high = s; low = s}
     if (s > high) {high = s; ++answer[0]}
     if (s < low) {low = s; ++answer[1]}
     return {low, high, answer};
  }, {
    high: 0,
    low: 0,    
    answer: [0, 0]
  }).answer
)
