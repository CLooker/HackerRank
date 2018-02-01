// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(n, ar) {
  const tallest = ar.reduce((tallest, height) => height >= tallest ? height : tallest, 0);
  return ar.filter(height => height === tallest).length;
}
