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
