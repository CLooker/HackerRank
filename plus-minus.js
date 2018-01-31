
// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    const plusMinusCount = arr.reduce((plusMinusCount, n) => {
        if (n > 0) {
            plusMinusCount.posCount = plusMinusCount.posCount + 1;
        } 
        else if (n < 0) {
            plusMinusCount.negCount = plusMinusCount.negCount + 1;       
        } else {
            plusMinusCount.zeroCount = plusMinusCount.zeroCount + 1;
        }
        return plusMinusCount;
    }, {posCount: 0, negCount: 0, zeroCount: 0});
    console.log(plusMinusCount.posCount/arr.length);
    console.log(plusMinusCount.negCount/arr.length);
    console.log(plusMinusCount.zeroCount/arr.length);
}
