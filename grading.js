// https://www.hackerrank.com/challenges/grading/problem

function nextFiveMultiple(grade) {
  let i = grade;
  do {
    i++
  }
  while (i % 5 !== 0)
  return i;
}

const solve = grades => (
  grades.map(grade => {
    const nextFiveMultipleReturned = nextFiveMultiple(grade);
    if (grade < 38) {
      return grade;
    } else if ((nextFiveMultipleReturned - grade) < 3) {
      return nextFiveMultipleReturned;
    } else if ((nextFiveMultipleReturned - grade) >= 3) {
      return grade;
    }
  }).forEach(grade => console.log(grade))
)
