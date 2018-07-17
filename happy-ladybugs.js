// https://www.hackerrank.com/challenges/happy-ladybugs/problem

function happyLadybugs(b) {
  const bArr = [...b];
  const isColor = x => x !== '_';

  for (let [i, char] of bArr.entries()) {
    if (!isColor(char)) continue;
    const atLeastOneValidMatch = bArr.some((otherChar, j) => {
      if (i === j || char !== otherChar) return false;
      const matchesAreAdjacent = Math.abs(i - j) === 1;
      if (matchesAreAdjacent) return true;
      const atLeastOneEmptySpace = bArr.some(item => !isColor(item));
      if (atLeastOneEmptySpace) return true;
    });
    if (!atLeastOneValidMatch) return 'NO';
  }

  return 'YES';
}
