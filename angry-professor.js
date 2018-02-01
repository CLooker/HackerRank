// https://www.hackerrank.com/challenges/angry-professor/problem

const angryProfessor = (k, a) => (
  a.reduce((onTimeCounter, t) => (t <= 0 ? ++onTimeCounter : onTimeCounter), 0) < k ? "YES" : "NO"
)
