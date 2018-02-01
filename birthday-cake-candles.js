// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(n, ar) {
  const tallest = ar.reduce((tallest, height) => height >= tallest ? height : tallest, 0);
  return ar.filter(height => height === tallest).length;
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
