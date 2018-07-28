// https://www.hackerrank.com/challenges/encryption/problem

function encryption(s) {
  const spaceless = s.split('').filter(l => l !== '');

  const possibleRowAndColumnLengths = (() => {
    const { length: L } = spaceless;
    const Lroot = Math.sqrt(L);
    const floor = Math.floor(Lroot);
    const ceil = Math.ceil(Lroot);

    let possibleValues = [];

    for (let i = floor; i <= ceil; i++) {
      possibleValues = possibleValues.concat(i);
    }

    return possibleValues;
  })();

  const [rowLength, colLength] = (() => {
    const isOnlyOneLengthToChoose = possibleRowAndColumnLengths.length < 2;
    let [rLength] = possibleRowAndColumnLengths;
    const cLength = isOnlyOneLengthToChoose
      ? possibleRowAndColumnLengths[0]
      : possibleRowAndColumnLengths[1];

    const isValid = rLength * cLength >= spaceless.length;

    if (!isValid) rLength = cLength;

    return [rLength, cLength];
  })();

  const rows = (() => {
    let spacelessCopy = [...spaceless];
    let rowsToReturn = [];

    for (let i = 0; i < rowLength; i++) {
      const row = spacelessCopy.splice(0, colLength).join('');
      rowsToReturn = rowsToReturn.concat(row);
    }

    return rowsToReturn;
  })();

  const cols = (() => {
    const { length: maxColLength } = rows[0];

    let colsToReturn = [];

    for (let i = 0; i < maxColLength; i++) {
      const col = rows.reduce((newCol, row, _) => {
        const letter = row[i];
        return letter ? `${newCol}${letter}` : newCol;
      }, '');

      colsToReturn = [...colsToReturn, col];
    }

    return colsToReturn;
  })();

  const encodedStr = cols.join(' ');
  return encodedStr;
}
