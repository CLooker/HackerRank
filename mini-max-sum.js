// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  const maxAndMin = arr.reduce((newArr, n, index) => {
    return newArr.concat(arr.filter((num, ind) => index !== ind).reduce((total, curr) => total += curr, 0));
  }, []).reduce((maxAndMin, n, index) => {
    index === 0 ? (maxAndMin.max = n, maxAndMin.min = n) : null;
    n > maxAndMin.max ? maxAndMin.max = n : null;
    n < maxAndMin.min ? maxAndMin.min = n : null;
    return maxAndMin;
  }, {
    min: null,
    max: null
  });
  console.log(`${maxAndMin.min} ${maxAndMin.max}`);
}
