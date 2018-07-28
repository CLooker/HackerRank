// https://www.hackerrank.com/challenges/grid-challenge/problem?h_r=next-challenge&h_v=zen

const gridChallenge = grid => {
  const gridWithOrderedRows = grid.map(seq =>
    seq
      .split('')
      .sort()
      .join('')
  );

  let answer = 'YES';

  gridWithOrderedRows.forEach((row, rowIdx) => {
    row.split('').forEach((letter, letterIdx) => {
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
