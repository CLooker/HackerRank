// https://www.hackerrank.com/challenges/repeated-string/problem

function repeatedString(s, n) {
    const aCount = s.split("").filter(l => l === 'a').length;
    const x = Math.floor(n / s.length);
    const totalAs = aCount * x;
    const leftOverLength = n % s.length;
    let partial = ""
    for (let i = 0; i < leftOverLength; i++) {
        partial += s[i];
    }
    const partialAs = partial.split("").filter(l => l === 'a').length;
    return totalAs + partialAs;
}
