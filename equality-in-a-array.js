// https://www.hackerrank.com/challenges/equality-in-a-array/problem

function equalizeArray(arr) {
    let coll = [];
    for (let i = 0; i < arr.length; i++) {
        const target = arr[i];
        let tempColl = [target];
        for (let j = 0; j < arr.length; j++) {
            if (j != i) {
                if (arr[j] === target) {
                    tempColl.push(arr[j])
                }
                coll.push(tempColl)
            }
        }
    }
    let biggestTempColl = 0;
    coll.forEach(tempColl => {
        if (tempColl.length > biggestTempColl) {
            biggestTempColl = tempColl.length;
        }
    })
    return arr.length - biggestTempColl;
}

// probably not as readable, but immutable, implicit returns
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
