// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
  let total = 0;
  for (let i = 0; i < ar.length; i++) {
    let firstSock = ar[i];
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[j] === firstSock) {
        total = total + 1;
        ar[j] = NaN;
        break;
      }
    }
  }
  return total;
}
