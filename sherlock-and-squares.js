// https://www.hackerrank.com/challenges/sherlock-and-squares/problem

const squares = (a, b) => {
    const first = Math.ceil(Math.sqrt(a));
    const last = Math.floor(Math.sqrt(b));
    return Array.from(Array(last - first + 1)).reduce((counter, _, index) => (
      Number.isInteger(index + first) ? ++counter : counter
    ), 0);
} 

function squares(a,b) {
    const first = Math.ceil(Math.sqrt(a));
    const last = Math.floor(Math.sqrt(b));
    let counter = 0;
    for (let i = first; i <= last; i++) {
        if(Number.isInteger(i)) {
            ++counter;
        }
    }
    return counter;    
}
