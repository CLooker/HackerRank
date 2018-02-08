// https://www.hackerrank.com/challenges/staircase/problem

// declarative, immutable, implicit returns, side-effects pushed to edge
const staircase = n =>
  Array.from(Array(n))
    .reduce(
      ({ stairs }, _, i) => ({
        stairs: [
          ...stairs,
          Array.from(Array(n)).reduce(
            ({ stair, j }, _, __) =>
              j >= n - i
                ? { stair: (stair += "#"), j: --j }
                : { stair: (stair += " "), j: --j },
            { stair: "", j: n }
          ).stair
        ]
      }),
      { stairs: [] }
    )
    .stairs.map(stair =>
      stair
        .split("")
        .reverse()
        .join("")
    )
    .forEach(stair => console.log(stair));

// imperative, mutable
function staircase(n) {
  let stairs = [];
  for (let i = 0; i < n; i++) {
    let stair = "";
    for (let j = n; j > 0; j--) {
      if (j >= n - i) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    stairs.push(stair);
  }
  for (let i = 0; i < stairs.length; i++) {
    console.log(
      stairs[i]
        .split("")
        .reverse()
        .join("")
    );
  }
}
