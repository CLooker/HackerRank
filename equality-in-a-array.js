// https://www.hackerrank.com/challenges/equality-in-a-array/problem

// imperative
function equalizeArray(arr) {
  let coll = [];
  for (let i = 0; i < arr.length; i++) {
    let tempColl = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        tempColl.push(arr[j]);
      }
      coll.push(tempColl);
    }
  }
  let biggestTempColl = 0;
  for (let i = 0; i < coll.length; i++) {
    if (coll[i].length > biggestTempColl) {
      biggestTempColl = coll[i].length;
    }
  }
  return arr.length - biggestTempColl;
}

// probably not as readable, but declarative, immutable, implicit returns
const equalizeArray = arr =>
  arr.length -
  Array.from(Array(arr.length))
    .reduce(
      (coll, _, i) =>
        Array.from(Array(arr.length))
          .reduce(
            (tempColl, _, j) =>
              arr[j] === arr[i]
                ? ((tempColl = [...tempColl, arr[j]]), (coll = [...coll, tempColl]), tempColl)
                : tempColl, 
            []
          ) && coll, 
      []
    )
    .reduce(
      (biggestTempColl, tempColl, index) =>
        tempColl.length > biggestTempColl ? tempColl.length : biggestTempColl, 0
    );
