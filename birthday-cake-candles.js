// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(n, ar) {
  const example = ar.reduce((tallestSumObj, height) => {
    height >= tallestSumObj.tallest 
      ? (tallestSumObj.tallest = height, tallestSumObj.sum++) 
      : null;
    return tallestSumObj;
  }, {tallest: 0, sum: 0});
  const example2 = ar.filter(item => item === example.tallest);
  return example2.length;
}
