
// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  const plusMinusCount = arr.reduce(
    (plusMinusCount, n) => {
      if (n > 0) {
        ++plusMinusCount.posCount;
      } else if (n < 0) {
        ++plusMinusCount.negCount;
      } else {
        ++plusMinusCount.zeroCount;
      }
      return plusMinusCount;
    },
    { posCount: 0, negCount: 0, zeroCount: 0 }
  );
  console.log(plusMinusCount.posCount / arr.length);
  console.log(plusMinusCount.negCount / arr.length);
  console.log(plusMinusCount.zeroCount / arr.length);
}

const plusMinus = arr => {
  const plusMinusCount = arr.reduce(
    ({ posCount, negCount, zeroCount }, n) =>
      n > 0
        ? { posCount: ++posCount, negCount, zeroCount }
        : n < 0
          ? { posCount, negCount: ++negCount, zeroCount }
          : { posCount, negCount, zeroCount: ++zeroCount },
    { posCount: 0, negCount: 0, zeroCount: 0 }
  );
    
  Object.keys(plusMinusCount).forEach(key => console.log(plusMinusCount[key] / arr.length))
}
