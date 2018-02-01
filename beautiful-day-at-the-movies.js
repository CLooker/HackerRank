// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

const beautifulDays = (i, j, k) => (
  Array.from(Array(j - i + 1))
  .reduce((days, _, ind) => days.push(ind + i) && days, [])
  .reduce((answer, num, ind) => (
    Number.isInteger(Math.abs(num - parseInt(num.toString().split("").reverse().join(""))) / k) ?
    ++answer :
    answer
  ), 0)
)
