// https://www.hackerrank.com/challenges/between-two-sets/problem

// every member of `denominators` evenly divides every member of `possibleXs`
// (denominators: Number[], lastPossibleX: Number) -> Number[]
const getPossibleXs = (denominators, lastPossibleX) => {
  const firstPossibleX = denominators[denominators.length - 1];
  let possibleXs = [];

  for (
    let possibleX = firstPossibleX;
    possibleX <= lastPossibleX;
    possibleX += firstPossibleX
  ) {
    const isEvenlyDivisibleByAllDenominators = denominators.every(
      denominator => {
        const isEvenlyDisible = possibleX % denominator === 0;
        return isEvenlyDisible;
      }
    );

    if (isEvenlyDivisibleByAllDenominators) possibleXs.push(possibleX);
  }

  return possibleXs;
};

// every member of returned array evenly divides every member of `numerators`
// (numerators: Number[], possibleXs: Number[]) -> Number[]
const getXs = (numerators, possibleXs) =>
  possibleXs.filter(possibleX => {
    const isXForAllNumerators = numerators.every(numerator => {
      const isX = numerator % possibleX === 0;
      return isX;
    });

    return isXForAllNumerators;
  });

// every member of `a` evenly divides every member of `xS`
// every member of `xS` evenly divides every member of `b`
// returns the length of `xS`
// (a: Number[], b: Number[]) -> Number
const getTotalX = (a, b) => {
  const [lastPossibleX] = b;
  const possibleXs = getPossibleXs(a, lastPossibleX);
  const xS = getXs(b, possibleXs);
  return xS.length;
};
