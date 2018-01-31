// https://www.hackerrank.com/challenges/counting-valleys/problem

const countingValleys = (n, s) => (
  s.split("")
  .reduce(({ pos, vSteps, valleys }, step) => {
    step === 'U' ? ++pos : --pos;
    (pos < 0) && ++vSteps;
    (pos === 0) && (vSteps > 0) && (++valleys) && (vSteps = 0);
    return {pos, vSteps, valleys};
  }, {pos: 0, vSteps: 0, valleys: 0}).valleys
)
