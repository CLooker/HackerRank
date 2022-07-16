const biggerIsGreater = word => {
  const chars = [ ...word ];

  const pivotIdx = chars
    .slice(1)
    .reduce((acc, ch, i) => ch > chars[i] ? i : acc, -1);

  if (pivotIdx === -1) {
    return 'no answer';
  }

  const pivot = chars[pivotIdx];

  const pivotIdxNext = chars
    .slice(pivotIdx)
    .reduce((acc, ch, i) => ch > pivot ? i + pivotIdx : acc, -1);

  chars[pivotIdx] = chars[pivotIdxNext];
  chars[pivotIdxNext] = pivot;

  const result = [
    ...chars.slice(0, pivotIdx + 1),
    ...chars.slice(pivotIdx + 1).reverse()
  ].join('');

  return result === word
    ? 'no answer'
    : result;
};
