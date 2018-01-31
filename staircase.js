// https://www.hackerrank.com/challenges/staircase/problem

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
