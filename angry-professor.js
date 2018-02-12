// https://www.hackerrank.com/challenges/angry-professor/problem

// declarative, implicit return
const angryProfessor = (k, a) =>
  a.reduce(
    (onTimeCounter, t) => (t <= 0 ? ++onTimeCounter : onTimeCounter),
    0
  ) < k
    ? "YES"
    : "NO";

// imperative, mutable, explicit return
function angryProfessor(k, a) {
  let onTimeCounter = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      ++onTimeCounter;
    }
  }
  if (onTimeCounter < k) {
    return "YES";
  } else {
    return "NO";
  }
}
