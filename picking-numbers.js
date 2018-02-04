// https://www.hackerrank.com/challenges/picking-numbers/problem

// imperative, mutable
function pickingNumbers(a) {
  let store = [];
  for (let i = 0; i < a.length; i++) {
    let tempStore = [a[i]];
    for (let j = 0; j < a.length; j++) {
      if (i !== j) {
        let flag = true;
        for (let k = 0; k < tempStore.length; k++) {
          if (Math.abs(tempStore[k] - a[j]) > 1) {
            flag = false;
          }
        }
        if (flag === true) {
          tempStore.push(a[j]);
        }
      }
    }
    store.push(tempStore);
  }
  let ans = 0;
  for (let i = 0; i < store.length; i++) {
    if (store[i].length > ans) {
      ans = store[i].length;
    }
  }
  return ans;
}

// declarative, immutable, implicit returns
const pickingNumbers = a =>
  a
    .reduce(
      ({ store, tempStore }, num, i) => (
        Array.from(Array(a.length)).reduce(
          (flag, _, j) =>
            j !== i
              ? (tempStore.forEach(
                  n => Math.abs(n - a[j]) > 1 && (flag = false)
                ),
                flag === true && (tempStore = [...tempStore, a[j]]),
                true)
              : true,
          true
        ),
        { store: [...store, tempStore], tempStore: [a[++i]] }
      ),
      { store: [], tempStore: [a[0]] }
    )
    .store.reduce((ans, item) => (item.length > ans ? item.length : ans), 0);
