// https://www.hackerrank.com/challenges/camelcase/problem
// This exercise times out when using immutable data structures

const getIndicesColl = coll =>
  coll
    .split("")
    .reduce(
      (indices, l, i) =>
        l === l.toUpperCase() ? indices.push(i) && indices : indices,
      [0]
    );

const getWordColl = (originalStr, indicesColl) =>
  indicesColl.reduce(
    (wordsColl, idx, i) =>
      wordsColl.push(originalStr.substring(idx, indicesColl[i + 1])) &&
      wordsColl,
    []
  );

const camelcase = s => getWordColl(s, getIndicesColl(s)).length;
