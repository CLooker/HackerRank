function fairRations(B) {
  const bSum = B.reduce((sum, item) => sum + item);
  const isOdd = val => val % 2 !== 0;
  if (isOdd(bSum)) {
    return 'NO';
  }

  let totalLoaves = 0;
  const { length } = B;

  B.forEach((loaves, i) => {
    if (isOdd(loaves)) {
      for (let j = i + 1; j < length; j++) {
        if (i === j) {
          continue;
        }
        const otherLoaves = B[j];
        if (isOdd(otherLoaves)) {
          for (let k = i; k <= j; k++) {
            B[k] = 2;
          }
          const distance = Math.abs(i - j);
          const loavesToMakeEven = distance * 2;
          totalLoaves += loavesToMakeEven;
          break;
        }
      }
    }
  });

  return totalLoaves;
}
