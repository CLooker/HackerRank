// https://www.hackerrank.com/challenges/the-hurdle-race/problem

function hurdleRace(k, height) {
  let maxJump = k;
  height.forEach(h => h > maxJump ? maxJump = h : null);
  return maxJump - k;
}
