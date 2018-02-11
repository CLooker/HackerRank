// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

// choose your weapon

// declarative, immutable, implicit return, but nested ternary confusing to some
const breakingRecords = scores =>
  scores.reduce(
    ({ low, high, answer }, s, index) =>
      s > high
        ? { low, high: s, answer: [++answer[0], answer[1]] }
        : s < low
          ? { low: s, high, answer: [answer[0], ++answer[1]] }
          : { low, high, answer },
    {
      high: scores[0],
      low: scores[0],
      answer: [0, 0]
    }
  ).answer;

// possibly more readable, but mutation is present
const breakingRecords = scores =>
  scores.reduce(
    ({ low, high, answer }, s, index) => {
      s > high && ((high = s), ++answer[0]);
      s < low && ((low = s), ++answer[1]);
      return { low, high, answer };
    },
    {
      high: scores[0],
      low: scores[0],
      answer: [0, 0]
    }
  ).answer;

// return statements short-circuit to minimze unnecessary operations
const breakingRecords = scores =>
  scores.reduce(
    ({ low, high, answer }, s, index) => {

      if (s > high) {
        return { low, high: s, answer: [++answer[0], answer[1]] };
      }
      if (s < low) {
        return { low: s, high, answer: [answer[0], ++answer[1]] };
      }
      return { low, high, answer };
    },
    {
      high: scores[0],
      low: scores[0],
      answer: [0, 0]
    }
  ).answer;

// imperative, mutable
function breakingRecords(scores) {
  let high = scores[0];
  let low = scores[0];
  let answer = [0, 0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > high) {
      high = scores[i];
      ++answer[0];
    }
    if (scores[i] < low) {
      low = scores[i];
      ++answer[1];
    }
  }
  return answer;
}
