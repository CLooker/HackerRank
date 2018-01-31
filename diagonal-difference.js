
// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(a) {
    const primaryDiagonol = a.map((numberArray, index) => numberArray[index]);
    const secondaryDiagonol = a.reverse().map((numberArray, index) => numberArray[index]);
    const primaryDiagonolSum = primaryDiagonol.reduce((total, number) => total += number);
    const secondaryDiagonolSum = secondaryDiagonol.reduce((total, number) => total += number);
   return Math.abs(primaryDiagonolSum - secondaryDiagonolSum);
}
