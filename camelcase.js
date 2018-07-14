// https://www.hackerrank.com/challenges/camelcase/problem
// This exercise times out when using immutable data structures

const camelcase = s => {
  const firstLetterIndexes = (() => {
    const arr = [];
    for (let i = 0; i < s.length; i++) {
      const letter = s[i];
      const isCapitalized = letter.toUpperCase() === letter;
      if (isCapitalized) {
        arr.push(i);
      }
    }
    return arr;
  })();

  const isOnlyOneWord = firstLetterIndexes.length === 0;

  if (isOnlyOneWord) {
    return 1;
  }

  const words = (() => {
    const arr = [];
    firstLetterIndexes.forEach((idx, i) => {
      const wordsIsEmpty = arr.length === 0;
      if (wordsIsEmpty) {
        const firstWord = s.slice(0, idx);
        arr.push(firstWord);
      }
      const word = s.slice(idx, firstLetterIndexes[i + 1]);
      arr.push(word);
    });
    return arr;
  })();

  return words.length;
};

///////////////////////////////////

const getIndicesColl = coll =>
  coll
    .split('')
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
