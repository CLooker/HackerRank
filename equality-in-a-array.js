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
