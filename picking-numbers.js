// https://www.hackerrank.com/challenges/picking-numbers/problem

const pickingNumbers = a =>
  a
    .reduce((store, num, index) => {
      let tempStore = [num];
      Array.from(Array(a.length)).forEach((_, i) => {
        if (i !== index) {
          let flag = true;
          tempStore.forEach(n => Math.abs(n - a[i]) > 1 && (flag = false));
          flag === true && (tempStore = [...tempStore, a[i]]);
        }
      });
      return [...store, tempStore];
    }, [])
    .reduce(
      (ans, item) => (item.length > ans ? (ans = item.length || ans) : ans),
      0
    );

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
