// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

function divisibleSumPairs(n, k, ar) {
  const targetDivisor = k;
  return ar.reduce((result, item, index) => {
    let tempSumList = []
    for (let i = index + 1; i < ar.length; i++) {
      let tempSum = item;
      tempSum = tempSum + ar[i];
      tempSum % targetDivisor === 0 ?
        tempSumList.push([index, i]) :
        null;
    }
    return result = result + tempSumList.length;
  }, 0);
}
