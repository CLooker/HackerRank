// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  let e = scores.reduce((recordsObj, s, index) => {
    index === 0 ?
      (
        recordsObj.low = s,
        recordsObj.high = s
      ) :
      null;
    s < recordsObj.low ? (recordsObj.low = s, recordsObj.lowCounter++) : null;
    s > recordsObj.high ? (recordsObj.high = s, recordsObj.highCounter++) : null;
    return recordsObj;
  }, {
    low: 0,
    lowCounter: 0,
    high: 0,
    highCounter: 0
  });
  return [e.highCounter, e.lowCounter];
}
