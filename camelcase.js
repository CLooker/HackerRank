// https://www.hackerrank.com/challenges/camelcase/problem

function camelcase(s) {
  let indices = s
    .split("")
    .reduce(
      (indices, l, i) => (l === l.toUpperCase() ? [...indices, i] : indices),
      [0]
    );
  
  let wordsColl = [];
  indices.forEach((idx, i) => {
    wordsColl.push(s.substring(idx, indices[i + 1]));
  });
  
  return wordsColl.length;
}
