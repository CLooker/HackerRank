// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

const divisibleSumPairs = (n, k, ar) => (
  ar.reduce((result, item, index) => {
    let tempSumList = []
    for (let i = index + 1; i < ar.length; i++) {
      ((item + ar[i]) % k === 0) && (tempSumList = [...tempSumList, [index, i]]);
    }
    return result += tempSumList.length;
  }, 0)
)
