// https://www.hackerrank.com/challenges/between-two-sets/problem

// declarative, immutable, implicit return
const getTotalX = (a, b) => (
  Array.from(Array(b[0]))
    .reduce((aFactors, _, index) => (
      a.reduce((flag, num) => (((index + 1) % num !== 0) && (flag = false)) || flag, true) === true 
        ? aFactors.concat(index + 1) 
        : aFactors
    ), [])
    .reduce((answer, aNum) => (
      b.reduce((flag, bNum) => ((bNum % aNum !== 0) && (flag = false)) || flag, true) === true 
        ? answer.concat(aNum) 
        : answer
    ), []).length
)

// imperative, mutable, explicit return
function getTotalX(a, b) {
    let aFactors = [];
    for (let i = 0; i < b[0]; i++) {
        let flag = true;
        for (let j = 0; j < a.length; j++) {
            if ((i + 1) % a[j] !== 0) {                
                flag = false;
            }
        }
        if (flag === true) {
            aFactors.push(i + 1)
        }
    }
    let answer = [];
    for (let i = 0; i < aFactors.length; i++) {
        let flag = true;
        for (let j = 0; j < b.length; j++) {
            if (b[j] % aFactors[i] !== 0) {
                flag = false;
            }
        }
        if (flag === true) {
            answer.push(aFactors[i]);
        }
    }
    return aFactors.length;
}
