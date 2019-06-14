// https://www.hackerrank.com/challenges/time-conversion/problem

const timeConversion = time => {
  let timeToAlter = parseInt(time.slice(0, 2));
  let timeToKeep = time.slice(3, time.length - 2);

  const isPM = time.match(/P/g);
  if (isPM) {
    const isMilitaryFormat = timeToAlter >= 12;
    if (!isMilitaryFormat) timeToAlter += 12;
  }

  const isAM = time.match(/A/g);
  if (isAM) {
    const doesNeedLeadingZeros = timeToAlter === 12;
    if (doesNeedLeadingZeros) {
      timeToAlter = '00';
    } else {
      const doesNeedLeadingZero = timeToAlter < 10;
      if (doesNeedLeadingZero) timeToAlter = `0${timeToAlter}`;
    }
  }

  const convertedTime = `${timeToAlter}:${timeToKeep}`;
  return convertedTime;
};
