// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

// imperative
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

// fancy
const catAndMouse = (x, y, z) => (
    [null]
      .reduce(({ catX, catY, answer }, _, index) => (
        catX < catY
            ? {catX, catY, answer: answer.concat('Cat A')}  
            : catX > catY
                ? {catX, catY, answer: answer.concat('Cat B')}
                : {catX, catY, answer: answer.concat('Mouse C')}
      ), {catX: Math.abs(z - x),  catY: Math.abs(z - y), answer: []})
      .answer
)
