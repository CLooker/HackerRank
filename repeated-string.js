// https://www.hackerrank.com/challenges/repeated-string/problem

// imperative
function repeatedString(s, n) {
    const aCount = s.split("").filter(l => l === 'a').length;
    const x = Math.floor(n / s.length);
    const totalAs = aCount * x;
    const leftOverLength = n % s.length;
    let partial = ""
    for (let i = 0; i < leftOverLength; i++) {
        partial += s[i];
    }
    const partialAs = partial.split("").filter(l => l === 'a').length;
    return totalAs + partialAs;
}

// declarative, implicit return, minimalistic
const repeatedString = (s, n) =>
  s.split("").filter(l => l === "a").length * Math.floor(n / s.length) +
  Array.from(Array(n % s.length))
    .reduce((additional, _, i) => (additional += s[i]), "")
    .split("")
    .filter(l => l === "a").length;

// declarative
const repeatedString = (s, n) => (
  const initialCount =
    s.split("").filter(l => l === "a").length * Math.floor(n / s.length);
  const postCount = Array.from(Array(n % s.length))
    .reduce((additional, _, i) => (additional += s[i]), "")
    .split("")
    .filter(l => l === "a").length;
  return initialCount + postCount;
);
