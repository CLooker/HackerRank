// https://www.hackerrank.com/challenges/beautiful-triplets/problem

function beautifulTriplets(d, arr) {
  const firstTest = (iNumber, jNumber) => jNumber - iNumber === d;
  const secondTest = (kNumber, jNumber) => kNumber - jNumber === d;

  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    const iNum = arr[i];
    for (let j = i + 1; j < arr.length - 1; j++) {
      const jNum = arr[j];
      const passedFirstTest = firstTest(iNum, jNum);
      if (passedFirstTest) {
        for (let k = j + 1; k < arr.length; k++) {
          const kNum = arr[k];
          const passedSecondTest = secondTest(kNum, jNum);
          if (passedSecondTest) {
            count++;
          }
        }
      } else {
        continue;
      }
    }
  }

  return count;
}
