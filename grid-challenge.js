// https://www.hackerrank.com/challenges/grid-challenge/problem?h_r=next-challenge&h_v=zen

// imperative, mutative
function gridChallenge(grid) {
  let newGrid = [];

  for (let i = 0; i < grid.length; i++) {
    const sequence = grid[i];
    const orderedSequence = sequence
      .split('')
      .sort()
      .join('');
    newGrid.push(orderedSequence);
  }

  let answer = 'YES';

  for (let i = 0; i < newGrid.length; i++) {
    const sequence = newGrid[i];
    for (let j = 0; j < sequence.length; j++) {
      const sequenceLetter = sequence[j];
      for (let k = i + 1; k < newGrid.length; k++) {
        const otherSequence = newGrid[k];
        const otherSequenceLetter = otherSequence[j];
        if (otherSequenceLetter < sequenceLetter) {
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
  const newGrid = grid.map(seq =>
    seq
      .split('')
      .sort()
      .join('')
  );

  return newGrid.reduce(
    (answer, seq, i) =>
      answer === 'NO'
        ? answer
        : seq.split('').reduce((localAnswer, letter, j) => {
            if (localAnswer === 'NO') {
              return localAnswer;
            }

            for (let k = i + 1; k < newGrid.length; k++) {
              const otherSeq = newGrid[k];
              const otherSeqLetter = otherSeq[j];
              if (otherSeqLetter < letter) {
                return 'NO';
              }
            }

            return 'YES';
          }, null),
    null
  );
};
