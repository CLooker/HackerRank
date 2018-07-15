// https://www.hackerrank.com/challenges/service-lane/problem

// NOTE: the first arg to serviceLane that hackerrank provides
// when it actually invokes serviceLane is incorrect.
// It must be `width`. You need to change it.

function serviceLane(widths, widthsIntervals) {
  let safeWidths = [];

  widthsIntervals.forEach(interval => {
    const [start, exclusiveEnd] = interval;
    const end = exclusiveEnd + 1;
    const localWidths = widths.slice(start, end);
    const safeWidth = Math.min(...localWidths);
    safeWidths.push(safeWidth);
  });

  return safeWidths;
}
