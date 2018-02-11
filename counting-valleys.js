// https://www.hackerrank.com/challenges/counting-valleys/problem

// declarative
const countingValleys = (n, s) =>
  s.split("").reduce(
    ({ pos, vSteps, valleys }, step) => {
      step === "U" ? ++pos : --pos;
      pos < 0 && ++vSteps;
      pos === 0 && vSteps > 0 && ++valleys && (vSteps = 0);
      return { pos, vSteps, valleys };
    },
    { pos: 0, vSteps: 0, valleys: 0 }
  ).valleys;

// imperative
function countingValleys(n, s) {
  let pos = 0;
  let vSteps = 0;
  let valleys = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "U") {
      ++pos;
    } else {
      --pos;
    }
    if (pos < 0) {
      ++vSteps;
    }
    if (pos === 0) {
      if (vSteps > 0) {
        ++valleys;
        vSteps = 0;
      }
    }
  }
  return valleys;
}
