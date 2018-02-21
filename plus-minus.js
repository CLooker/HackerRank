// https://www.hackerrank.com/challenges/plus-minus/problem

// declarative, immutable
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

  Object.keys(plusMinusCount).forEach(key =>
    console.log(plusMinusCount[key] / arr.length)
  );
};

// imperative, mutable
function plusMinus(arr) {
  let plusCounter = 0;
  let minusCounter = 0;
  let zeroCounter = 0;
  const length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      ++plusCounter;
    } else if (arr[i] < 0) {
      ++minusCounter;
    } else {
      ++zeroCounter;
    }
  }

  console.log(
    `${plusCounter / length}\n${minusCounter / length}\n${zeroCounter / length}`
  );
}
