// https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
  let xLocation = x1;
  let yLocation = x2;
  let xJump = v1;
  let yJump = v2;
  if ((xLocation > yLocation && xJump >= yJump) || (yLocation > xLocation && yJump >= xJump)) {
    return "NO";
  } else {
    if (xLocation > yLocation) {
      while (xLocation > yLocation) {
        xLocation += xJump;
        yLocation += yJump;
      }
      return xLocation === yLocation ? "YES" : "NO";
    } else if (yLocation > xLocation) {
      while (yLocation > xLocation) {
        xLocation += xJump;
        yLocation += yJump;
      }
      return xLocation === yLocation ? "YES" : "NO";
    }
  }
}
