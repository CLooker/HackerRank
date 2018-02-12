// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

// declarative, immutable, implicit return
const designerPdfViewer = (h, word) => (
  (height = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((item, index) => word.includes(item) && index)
    .map(idx => h[idx])
    .sort((a, b) => b - a)[0]),
  height * word.length
);

// imperative, mutable, explicit return
function designerPdfViewer(h, word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let abcIdxes = [];
  for (let i = 0; i < alphabet.length; i++) {
    if (word.includes(alphabet[i])) {
      abcIdxes.push(i);
    }
  }
  let mapAbcIdxesToHIdxes = [];
  for (let i = 0; i < abcIdxes.length; i++) {
    let target = abcIdxes[i];
    mapAbcIdxesToHIdxes.push(h[target]);
  }
  let hIdxesSorted = mapAbcIdxesToHIdxes.sort((a, b) => b - a);
  let height = hIdxesSorted[0];
  let width = word.length;
  return height * width;
}
