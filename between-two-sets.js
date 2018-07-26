// https://www.hackerrank.com/challenges/between-two-sets/problem

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

const getXs = (numerators, possibleXs) =>
  possibleXs.filter(possibleX => {
    const isXForAllNumerators = numerators.every(numerator => {
      const isX = numerator % possibleX === 0;
      return isX;
    });

    return isXForAllNumerators;
  });

const getTotalX = (a, b) => {
  const [lastPossibleX] = b;
  const possibleXs = getPossibleXs(a, lastPossibleX);
  const xS = getXs(b, possibleXs);
  return xS.length;
};
