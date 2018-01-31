// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

function beautifulDays(i, j, k) {
  return (
    Array.from(Array(j - i + 1))
    .reduce((days, _, ind) => {
      days.push(ind + i);
      return days;
    }, [])
    .reduce((answer, num, ind) => {
      let reversed = parseInt(num.toString().split("").reverse().join(""));
      return Number.isInteger(Math.abs(num - reversed) / k) ?
        ((answer = answer + 1) && answer) :
        answer
    }, 0)
  );
}
