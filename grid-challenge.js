// https://www.hackerrank.com/challenges/grid-challenge/problem?h_r=next-challenge&h_v=zen

const gridChallenge = grid => {
  const gridWithOrderedRows = grid.map(seq => [...seq].sort().join(''));

  const isAllColsAscOrder = gridWithOrderedRows.every((row, rowIdx) => {
    const isColAscOrder = [...row].every((rowLetter, rowLetterIdx) => {
      const laterRows = gridWithOrderedRows.slice(rowIdx + 1);

      const isColLetterAscOrder = laterRows.every(laterRow => {
        const colLetter = laterRow[rowLetterIdx];
        return rowLetter <= colLetter;
      });

      return isColLetterAscOrder;
    });

    return isColAscOrder;
  });

  return isAllColsAscOrder ? 'YES' : 'NO';
};

// another version

const gridChallenge = grid => {
  const gridWithOrderedRows = grid.map(seq => [...seq].sort().join(''));

  let answer = 'YES';

  gridWithOrderedRows.forEach((row, rowIdx) => {
    [...row].forEach((letter, letterIdx) => {
      const otherRows = gridWithOrderedRows.slice(rowIdx + 1);
      for (const otherRow of otherRows) {
        const otherLetter = otherRow[letterIdx];
        if (otherLetter < letter) {
          answer = 'NO';
          break;
        }
      }
    });
  });

  return answer;
};
