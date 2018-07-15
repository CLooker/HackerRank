// https://www.hackerrank.com/challenges/circular-array-rotation/problem

function circularArrayRotation(arr, rotations, arrOfQueries) {
  let rotationsToPerform = rotations % arr.length;
  const rotateArr = () => arr.unshift(arr.pop());

  while (rotationsToPerform > 0) {
    rotateArr();
    rotationsToPerform--;
  }

  let queryVals = [];

  arrOfQueries.forEach(query => {
    const val = arr[query];
    queryVals.push(val);
  });

  return queryVals;
}
