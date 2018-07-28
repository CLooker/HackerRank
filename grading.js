// https://www.hackerrank.com/challenges/grading/problem

function nextFiveMultiple(grade) {
  let i = grade;
  do {
    i++;
  } while (i % 5 !== 0);
  return i;
}

const gradingStudents = grades =>
  grades.map(grade => {
    const nextFiveMultipleReturned = nextFiveMultiple(grade);
    switch (true) {
      case grade < 38:
        return grade;
      case nextFiveMultipleReturned - grade < 3:
        return nextFiveMultipleReturned;
      default:
        return grade;
    }
  });
