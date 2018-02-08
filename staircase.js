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

function staircase(n) {
  Array.from(Array(n)).forEach((_, index) => {
    let temp = "";
    for (let i = n; i > 0; i--) {
      if (i >= (n - index)) {
        temp += '#';
      } else {
        temp += " ";
      }
    }
    console.log(temp.split("").reverse().join(""));
  });
}
