// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(n, ar) {
  const example = ar.reduce((tallestSumObj, height) => {
    height >= tallestSumObj.tallest 
      ? (tallestSumObj.tallest = height, tallestSumObj.sum++) 
      : null;
    return tallestSumObj;
  }, {tallest: 0, sum: 0});
  return ar.filter(item => item === example.tallest).legnth;
}

// same as above, but sexier, but probably not as readable

const birthdayCakeCandles = (n, ar) => (
  ar.reduce(({ tallest, candles }, height) => (
    height === tallest 
      ? {tallest, candles: ++candles} 
      : {tallest, candles}
  ), {
        tallest: ar.reduce(({ tallest, sum }, height) => (
                     height >= tallest ? {tallest: height, sum: ++sum} : {tallest, sum}
                   ), {tallest: 0, sum: 0}).tallest,
        candles: 0
      }).candles
)
