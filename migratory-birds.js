// https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(n, ar) {
  const example = ar.reduce((result, bird) => {
    result[bird] = result[bird] + 1;
    return result;
  }, {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  });
  let most = Object.keys(example).map(key => example[key]).reduce((result, item) => item > result ? result = item : result, 0)
  return Object.keys(example).filter(key => example[key] === most)[0];
}
