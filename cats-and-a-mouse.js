// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
  let mouseADistance = Math.abs(z - x);
  let mouseBDistance = Math.abs(z - y);
  if (mouseADistance < mouseBDistance) {
    console.log('Cat A');
  } else if (mouseADistance > mouseBDistance) {
    console.log('Cat B');
  } else {
    console.log('Mouse C');
  }
}
