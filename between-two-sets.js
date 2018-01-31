// https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
  return Array.from(Array(b[0])).reduce((aFactors, _, index) => {
    const i = (index + 1);
    let flag = true;
    a.forEach(num => (i % num !== 0) && (flag = false))
    return flag === true ? aFactors.push(i) && aFactors : aFactors
  }, []).reduce((answer, aNum) => {
    let flag = true;
    b.forEach(bNum => (bNum % aNum !== 0) && (flag = false))
    return flag === true ? answer.push(aNum) && answer : answer;
  }, []).length
}
