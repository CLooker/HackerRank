// https://www.hackerrank.com/challenges/sock-merchant/problem

const sockMerchant = (socksTotal, colors) => {
  let matchingColorPairs = 0;

  for (const [colorIdx, color] of colors.entries()) {
    for (
      let otherColorIdx = colorIdx + 1;
      otherColorIdx < colors.length;
      otherColorIdx++
    ) {
      const nextColor = colors[otherColorIdx];
      const isMatch = color === nextColor;
      if (isMatch) {
        matchingColorPairs++;
        colors.splice(otherColorIdx, 1);
        break;
      }
    }
  }

  return matchingColorPairs;
};
