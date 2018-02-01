// https://www.hackerrank.com/challenges/between-two-sets/problem

const getTotalX = (a, b) => (
  Array.from(Array(b[0]))
    .reduce((aFactors, _, index) => (
      a.reduce((flag, num) => (((index + 1) % num !== 0) && (flag = false)) || flag, true) === true 
        ? aFactors.concat(index + 1) 
        : aFactors
    ), [])
    .reduce((answer, aNum) => (
      b.reduce((flag, bNum) => ((bNum % aNum !== 0) && (flag = false)) || flag, true) === true 
        ? answer.concat(aNum) 
        : answer
    ), []).length
)
