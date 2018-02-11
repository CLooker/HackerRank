// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem

// declarative, immutable, implicit return
const jumpingOnClouds = (c, k) =>
  c.reduce(
    ({ energy, ind }, cloud, idx) =>
      idx === ind
        ? cloud === 0
          ? { energy: --energy, ind: ind + k }
          : { energy: energy - 3, ind: ind + k }
        : { energy, ind },
    { energy: 100, ind: 0 }
  ).energy;

// imperative, mutable, expicit return
function jumpingOnClouds(c, k) {
  let energy = 100;
  for (let i = 0; i < c.length; i += k) {
    if (c[i] === 0) {
      --energy;
    } else {
      energy = energy - 3;
    }
  }
  return energy;
}
