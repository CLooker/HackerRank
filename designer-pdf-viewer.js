// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPdfViewer(h, word) {
  const height = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((item, index) => word.includes(item) && index)
    .map(idx => h[idx])
    .sort((a, b) => b - a)[0];
  const width = word.length;
  return height * width;
}
