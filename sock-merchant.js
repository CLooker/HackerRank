// https://www.hackerrank.com/challenges/sock-merchant/problem

const sockMerchant = (n, ar) => (
  ar.reduce((total, sock, i) => {
    const firstSock = sock;
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[j] === firstSock) {
        (++total) && (ar[j] = NaN)
        break;
      }
    }
    return total;
  }, 0)
)

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

