// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

// best
const beautifulDays = (startDay, endDay, k) => {
  const days = (() => {
    const arr = [];
    for (let day = startDay; day <= endDay; day++) {
      arr.push(day);
    }
    return arr;
  })();

  const beautifulDaysTotal = days.reduce((total, day) => {
    const reversedDay = Number(
      day
        .toString()
        .split('')
        .reverse()
        .join('')
    );
    const difference = Math.abs(day - reversedDay);
    const quotient = difference / k;
    const isBeautifulDay = Number.isInteger(quotient);
    return isBeautifulDay ? ++total : total;
  }, 0);

  return beautifulDaysTotal;
};

// declarative
const beautifulDays = (i, j, k) =>
  Array.from(Array(j - i + 1))
    .reduce((days, _, ind) => days.push(ind + i) && days, [])
    .reduce(
      (answer, num, ind) =>
        Number.isInteger(
          Math.abs(
            num -
              parseInt(
                num
                  .toString()
                  .split('')
                  .reverse()
                  .join('')
              )
          ) / k
        )
          ? ++answer
          : answer,
      0
    );

// imperative
function beautifulDays(i, j, k) {
  let days = [];
  for (let idx = 0; idx <= j - i; idx++) {
    days.push(idx + i);
  }
  let answer = 0;
  for (let idx = 0; idx <= j - i; idx++) {
    if (
      Number.isInteger(
        Math.abs(
          days[idx] -
            parseInt(
              days[idx]
                .toString()
                .split('')
                .reverse()
                .join('')
            )
        ) / k
      )
    ) {
      ++answer;
    }
  }
  return answer;
}
