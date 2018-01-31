// https://www.hackerrank.com/challenges/picking-numbers/problem

const pickingNumbers = a => (
  a.reduce((store, num, index) => {
    let tempStore = [num];
    Array.from(Array(a.length)).forEach((_, i) => {
      if (i !== index) {
        let flag = true;
        tempStore.forEach(n => (Math.abs(n - a[i]) > 1) && (flag = false));
        (flag === true) && (tempStore = [...tempStore, a[i]]);
      }
    });
    return [...store, tempStore];
  }, [])
  .reduce((ans, item) => item.length > ans ? ans = item.length || ans : ans, 0)
)
