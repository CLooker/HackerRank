// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  const maxAndMin = arr
    .reduce(
      (newArr, n, index) =>
        newArr.concat(
          arr
            .filter((num, ind) => index !== ind)
            .reduce((total, curr) => (total += curr), 0)
        ),
      []
    )
    .reduce(
      ({ min, max }, n, index) => {
         if (index === 0) {return {min: n, max: n}};
         (n > max) && (max = n);
         (n < min) && (min = n);
         return {min, max};
      },
      { min: null, max: null }
    );
  console.log(`${maxAndMin.min} ${maxAndMin.max}`);
}
