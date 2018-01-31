// https://www.hackerrank.com/challenges/angry-professor/problem

function angryProfessor(k, a) {
  return a.reduce((onTimeCounter, t) => {
    t <= 0 && (onTimeCounter = onTimeCounter + 1)
    return onTimeCounter;
  }, 0) < k ? "YES" : "NO";
}
