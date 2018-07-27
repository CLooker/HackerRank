// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPdfViewer(h, word) {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

  const abcIdxes = alphabet.reduce((idxes, letter, i) => {
    const isLetterIncluded = word.includes(letter);
    return isLetterIncluded ? idxes.concat(i) : idxes;
  }, []);

  const hIdxes = abcIdxes.map(abcIdx => {
    const hIdx = h[abcIdx];
    return hIdx;
  });

  const hIdxesSorted = [...hIdxes].sort((a, b) => b - a);
  const [height] = hIdxesSorted;
  const width = word.length;
  return height * width;
}

// declarative, immutable, implicit return
const designerPdfViewer = (h, word) => (
  (height = 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .map((item, index) => word.includes(item) && index)
    .map(idx => h[idx])
    .sort((a, b) => b - a)[0]),
  height * word.length
);
