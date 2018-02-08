// https://www.hackerrank.com/challenges/sock-merchant/problem

// declarative
const sockMerchant = (n, ar) =>
  ar.reduce(
    ({ total, j }, targetSock, i) => (
      ar.forEach((_, k) => {
        j === k &&
          (ar[j] === targetSock
            ? (++total, (ar[j] = NaN), (j = -1))
            : j === -1 || ++j);
      }),
      { total, j: (i += 2) }
    ),
    { total: 0, j: 1 }
  ).total;

// imperative, mutable
function sockMerchant(n, ar) {
  let total = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[j] === ar[i]) {
        ++total;
        ar[j] = NaN;
        break;
      }
    }
  }
  return total;
}

