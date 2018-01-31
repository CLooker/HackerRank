// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  let convertThis = parseInt(s.slice(0, 2));
  let thisPartIsGood = s.slice(3, (s.length - 2));
  if (s.match(/P/g)) {
    if (convertThis < 12) {
      convertThis = convertThis + 12
    }
  } else if (s.match(/A/g)) {
    if (convertThis === 12) {
      convertThis = "00";
    } else if (convertThis < 10) {
      convertThis = `0${convertThis}`
    }
  }
  return `${convertThis}:${thisPartIsGood}`;
}
