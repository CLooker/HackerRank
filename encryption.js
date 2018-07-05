// https://www.hackerrank.com/challenges/encryption/problem

function encryption(s) {
  const spaceless = s.split('').filter(l => l !== '');
  const { length: L } = spaceless;
  const Lroot = Math.sqrt(L);
  const floor = Math.floor(Lroot);
  const ceil = Math.ceil(Lroot);

  const possibleRowAndColumnLengths = ((min, max) => {
    let possibleValues = [];

    for (let i = min; i <= max; i++) {
      possibleValues = [...possibleValues, i];
    }

    return possibleValues;
  })(floor, ceil);

  const [rowLength, colLength] = (lengthsColl => {
    let rLengthToReturn;
    let cLengthToReturn;

    if (lengthsColl.length < 2) {
      rLengthToReturn = cLengthToReturn = lengthsColl[0];
    } else {
      [rLengthToReturn, cLengthToReturn] = lengthsColl;
    }

    const lengthsAreValid = ((r, c, l) => r * c >= l)(
      rLengthToReturn,
      cLengthToReturn,
      L
    );

    if (!lengthsAreValid) {
      rLengthToReturn = cLengthToReturn;
    }

    return [rLengthToReturn, cLengthToReturn];
  })(possibleRowAndColumnLengths);

  const rows = ((spacelessColl, rLength, cLength) => {
    let spacelessCopy = [...spacelessColl];
    let rowsToReturn = [];

    for (let i = 0; i < rLength; i++) {
      const row = spacelessCopy.splice(0, cLength).join('');
      rowsToReturn = [...rowsToReturn, row];
    }

    return rowsToReturn;
  })(spaceless, rowLength, colLength);

  const cols = (rowsColl => {
    const { length: maxColLength } = rowsColl[0];

    let colsToReturn = [];

    for (let i = 0; i < maxColLength; i++) {
      const col = rowsColl.reduce((newCol, row, _) => {
        const letter = row[i];

        if (letter) {
          return `${newCol}${letter}`;
        }

        return newCol;
      }, '');

      colsToReturn = [...colsToReturn, col];
    }

    return colsToReturn;
  })(rows);

  const encodedStr = cols.join(' ');
  return encodedStr;
}
