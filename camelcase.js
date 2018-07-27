// https://www.hackerrank.com/challenges/camelcase/problem
// This exercise times out when using immutable data structures

const camelcase = s => {
  const firstLetterIndexes = s.split('').filter(letter => {
    const isCapitalized = letter.toUpperCase() === letter;
    return isCapitalized;
  });

  const isOnlyOneWord = firstLetterIndexes.length === 0;
  if (isOnlyOneWord) return 1;

  const words = (() => {
    const [firstCapitalizedLetterIdx] = firstLetterIndexes;
    const firstWord = s.slice(0, firstCapitalizedLetterIdx);

    // start with an array with the first word already in it
    return firstLetterIndexes.reduce(
      (words, firstLetterIndex, i) => {
        const nextWord = s.slice(firstLetterIndex, firstLetterIndexes[i + 1]);
        words.push(nextWord);
        return words;
      },
      [firstWord]
    );
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
