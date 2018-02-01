// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
  const mouseADistance = Math.abs(z - x);
  const mouseBDistance = Math.abs(z - y);
  let answer = [];
  if (mouseADistance < mouseBDistance) {
    answer = answer.concat('Cat A');
  } else if (mouseADistance > mouseBDistance) {
    answer = answer.concat('Cat B');
  } else {
    answer = answer.concat('Mouse C');
  }
  return answer;
}
