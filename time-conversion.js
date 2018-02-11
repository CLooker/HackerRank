// https://www.hackerrank.com/challenges/time-conversion/problem

// clean, but not so readable
function timeConversion(s) {
  let convertThis = parseInt(s.slice(0, 2));
  const thisPartIsGood = s.slice(3, s.length - 2);
  s.match(/P/g)
    ? convertThis < 12 && (convertThis += 12)
    : s.match(/A/g) && convertThis === 12
      ? (convertThis = "00")
      : convertThis < 10 && (convertThis = `0${convertThis}`);

  return `${convertThis}:${thisPartIsGood}`;
}

// maybe less ugly, but still readable
function timeConversion(s) {
  let convertThis = parseInt(s.slice(0, 2));
  const thisPartIsGood = s.slice(3, s.length - 2);
  if (s.match(/P/g)) {
    convertThis < 12 && (convertThis += 12);
  } else if (s.match(/A/g)) {
    convertThis === 12
      ? (convertThis = "00")
      : convertThis < 10 && (convertThis = `0${convertThis}`);
  }
  return `${convertThis}:${thisPartIsGood}`;
}

// kind of ugly
function timeConversion(s) {
  let convertThis = parseInt(s.slice(0, 2));
  const thisPartIsGood = s.slice(3, s.length - 2);
  if (s.match(/P/g)) {
    if (convertThis < 12) {
      convertThis += 12;
    }
  } else if (s.match(/A/g)) {
    if (convertThis === 12) {
      convertThis = "00";
    } else if (convertThis < 10) {
      convertThis = `0${convertThis}`;
    }
  }
  return `${convertThis}:${thisPartIsGood}`;
}
