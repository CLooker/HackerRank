// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

// declarative, immutable
function birthdayCakeCandles(n, ar) {
  const tallest = ar.reduce((tallest, height) => height >= tallest ? height : tallest, 0);
  return ar.filter(height => height === tallest).length;
}

// imperative,  mutable
function birthdayCakeCandles(n, ar) {
  let tallest = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] >= tallest) {
      tallest = ar[i];
    }
  }
  let answer = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === tallest) {
      ++answer;
    }
  }
  return answer;
}
