// https://www.hackerrank.com/challenges/between-two-sets/problem

// readable
const getTotalX = (a, b) => {
  const aFactors = (() => {
    const arr = [];
    const firstBNum = b[0];

    for (
      let possibleFactor = 1;
      possibleFactor <= firstBNum;
      possibleFactor++
    ) {
      let isFactorForAllAs = true;

      const { length } = a;
      for (let j = 0; j < length; j++) {
        const aNum = a[j];
        const isNotFactor = possibleFactor % aNum !== 0;
        if (isNotFactor) {
          isFactorForAllAs = false;
          break;
        }
      }

      if (isFactorForAllAs) {
        arr.push(possibleFactor);
      }
    }

    return arr;
  })();

  const allXs = aFactors.reduce((xForAllColl, aFactor) => {
    const { length } = b;
    for (let j = 0; j < length; j++) {
      const bNum = b[j];
      const isNotX = bNum % aFactor !== 0;
      if (isNotX) {
        return xForAllColl;
      }
    }

    return xForAllColl.concat(aFactor);
  }, []);

  return allXs.length;
};

// declarative, immutable, implicit return
const getTotalX = (a, b) =>
  Array.from(Array(b[0]))
    .reduce(
      (aFactors, _, index) =>
        a.reduce(
          (flag, num) => ((index + 1) % num !== 0 && (flag = false)) || flag,
          true
        ) === true
          ? aFactors.concat(index + 1)
          : aFactors,
      []
    )
    .reduce(
      (answer, aNum) =>
        b.reduce(
          (flag, bNum) => (bNum % aNum !== 0 && (flag = false)) || flag,
          true
        ) === true
          ? answer.concat(aNum)
          : answer,
      []
    ).length;

// imperative, mutable, explicit return
function getTotalX(a, b) {
  let aFactors = [];
  for (let i = 0; i < b[0]; i++) {
    let flag = true;
    for (let j = 0; j < a.length; j++) {
      if ((i + 1) % a[j] !== 0) {
        flag = false;
      }
    }
    if (flag === true) {
      aFactors.push(i + 1);
    }
  }
  let answer = [];
  for (let i = 0; i < aFactors.length; i++) {
    let flag = true;
    for (let j = 0; j < b.length; j++) {
      if (b[j] % aFactors[i] !== 0) {
        flag = false;
      }
    }
    if (flag === true) {
      answer.push(aFactors[i]);
    }
  }
  return answer.length;
}
