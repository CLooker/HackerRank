// https://www.hackerrank.com/challenges/permutation-equation/problem

function permutationEquation(p) {
  const sorted = [...p].sort((a, b) => a - b);

  const permutated = (() => {
    let arr = [];
    sorted.forEach(val => {
      const nextVal = p.indexOf(val) + 1;
      const finalVal = p.indexOf(nextVal) + 1;
      arr.push(finalVal);
    });
    return arr;
  })();

  return permutated;
}
