// https://www.hackerrank.com/challenges/the-hurdle-race/problem

// declarative, immutable, implicit return
const hurdleRace = (k, height) =>
  height.reduce((maxJump, h) => (h > maxJump ? h : maxJump), k) - k;

// imperative, mutable, explicit return
function hurdleRace(k, height) {
  let maxJump = k;
  for (let i = 0; i < height.length; i++) {
    if (height[i] > maxJump) {
      maxJump = height[i];
    }
  }
  return maxJump - k;
}
