// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

// declarative, immutable 
const jumpingOnClouds = c => (c.reduce(({ jumps, i }, _, index) => (
  index === i 
    ? c[index + 2] === 0 
      ? {jumps: ++jumps, i: i += 2} 
      : {jumps: ++jumps, i: ++i} 
    : {jumps, i}), {jumps: -1, i: 0}).jumps
)

// imperative
function jumpingOnClouds(c) {
  let jumps = 0;
  for (let i = 0; i < c.length;) {
    if (c[i + 2] === 0) {
      i += 2;
    } else {
      i += 1;
    }
    jumps += 1;
  }
  return --jumps;
}
