// https://www.hackerrank.com/challenges/minimum-distances/problem

// mostly declarative, immutable, mostly implicit returns
const minimumDistances = a => (
  (coll = a.reduce((masterColl, aItem, i) => {
    for (let j = i + 1; j < a.length; j++) {
      a[j] === aItem && (masterColl = [...masterColl, Math.abs(j - i)]);
    }
    return masterColl;
  }, [])),
  (least = coll.reduce(
    (least, num, i) => (num < least && (least = num), least),
    coll[0]
  )),
  least > 0 ? least : -1
);


// imperative, mutable, explicit return
function minimumDistances(a) {
  let coll = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] === a[i]) {
        coll.push(Math.abs(j - i));
      }
    }
  }
  let least = coll[0];
  for (let i = 1; i < coll.length; i++) {
    if (coll[i] < least) {
      least = coll[i];
    }
  }
  if (least > 0) {
    return least;
  } else {
    return -1;
  }
}
