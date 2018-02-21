// https://www.hackerrank.com/challenges/diagonal-difference/problem


// declarative, immutable, fn composition, implicit return
const primaryDiagonol = arr =>
  arr.map((numberArray, index) => numberArray[index]);
const secondaryDiagonol = arr =>
  arr.reverse().map((numberArray, index) => numberArray[index]);
const primaryDiagonolSum = primaryDiagonolArr =>
  primaryDiagonolArr.reduce((total, number) => (total += number));
const secondaryDiagonolSum = secondaryDiagonolArr =>
  secondaryDiagonolArr.reduce((total, number) => (total += number));

const diagonalDifference = a =>
  Math.abs(
    primaryDiagonolSum(primaryDiagonol(a)) -
    secondaryDiagonolSum(secondaryDiagonol(a))
  );


// declarative, immutable
function diagonalDifference(a) {
  const primaryDiagonol = a.map((numberArray, index) => numberArray[index]);
  const secondaryDiagonol = a
    .reverse()
    .map((numberArray, index) => numberArray[index]);
  const primaryDiagonolSum = primaryDiagonol.reduce(
    (total, number) => (total += number)
  );
  const secondaryDiagonolSum = secondaryDiagonol.reduce(
    (total, number) => (total += number)
  );
  return Math.abs(primaryDiagonolSum - secondaryDiagonolSum);
}

// imperative, mutable
function diagonalDifference(a) {
  let primaryDiagonol = [];
  for (let i = 0; i < a.length; i++) {
    let numberArray = a[i];
    primaryDiagonol.push(numberArray[i]);
  }
  let secondaryDiagonol = [];
  let reversedA = a.reverse();
  for (let i = 0; i < a.length; i++) {
    let numberArray = a[i];
    secondaryDiagonol.push(numberArray[i]);
  }
  let primaryDiagonolSum = 0;
  for (let i = 0; i < primaryDiagonol.length; i++) {
    primaryDiagonolSum += primaryDiagonol[i];
  }
  let secondaryDiagonolSum = 0;
  for (let i = 0; i < primaryDiagonol.length; i++) {
    secondaryDiagonolSum += secondaryDiagonol[i];
  }
  return Math.abs(primaryDiagonolSum - secondaryDiagonolSum);
}
