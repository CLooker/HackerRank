// https://www.hackerrank.com/challenges/grid-challenge/problem?h_r=next-challenge&h_v=zen

// imperative, mutative
function gridChallenge(grid) {
  let gridWithOrderedRows = [];

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    const orderedRow = row
      .split('')
      .sort()
      .join('');
    gridWithOrderedRows.push(orderedRow);
  }

  let answer = 'YES';

  for (let i = 0; i < gridWithOrderedRows.length; i++) {
    const row = gridWithOrderedRows[i];
    for (let j = 0; j < row.length; j++) {
      const letter = row[j];
      for (let k = i + 1; k < gridWithOrderedRows.length; k++) {
        const otherRow = gridWithOrderedRows[k];
        const otherLetter = otherRow[j];
        if (otherLetter < letter) {
          answer = 'NO';
          break;
        }
      }
    }
  }

  return answer;
}

// more declarative
const gridChallenge = grid => {
  const gridWithOrderedRows = grid.map(row =>
    row
      .split('')
      .sort()
      .join('')
  );

  return gridWithOrderedRows.reduce(
    (answer, row, i) =>
      answer === 'NO'
        ? answer
        : row.split('').reduce((localAnswer, letter, j) => {
            if (localAnswer === 'NO') {
              return localAnswer;
            }

            for (let k = i + 1; k < gridWithOrderedRows.length; k++) {
              const otherRow = gridWithOrderedRows[k];
              const otherLetter = otherRow[j];
              if (otherLetter < letter) {
                return 'NO';
              }
            }

            return 'YES';
          }, null),
    null
  );
};

// mixture that might be easiest to read
const gridChallenge = grid => {
  const gridWithOrderedRows = grid.map(seq =>
    seq
      .split('')
      .sort()
      .join('')
  );

  let answer = 'YES';

  gridWithOrderedRows.forEach((row, i) => {
    row.split('').forEach((letter, j) => {
      // use for loop because counter is non-standard
      // for loop is probably easier to read than alternatives
      for (let k = i + 1; k < gridWithOrderedRows.length; k++) {
        const otherRow = gridWithOrderedRows[k];
        const otherLetter = otherRow[j];
        if (otherLetter < letter) {
          answer = 'NO';
          break;
        }
      }
    });
  });

  return answer;
};
