// https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
  if ((x1 > x2 && v1 >= v2) || (x2 > x1 && v2 >= v1)) {
    return "NO";
  } else {
    if (x1 > x2) {
      while (x1 > x2) {
        x1 += v1;
        x2 += v2;
      }
      return x1 === x2 ? "YES" : "NO";
    } else if (x2 > x1) {
      while (x2 > x1) {
        x1 += v1;
        x2 += v2;
      }
      return x1 === x2 ? "YES" : "NO";
    }
  }
}
