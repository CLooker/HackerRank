// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPdfViewer(h, word) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
  const height = alphabet.map((item, index) => word.includes(item) ? index : null).filter(item => item !== null).map(idx => h[idx]).sort().reverse()[0];
  const width = word.length;
  return height * width;
}
