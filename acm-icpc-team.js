//https://www.hackerrank.com/challenges/acm-icpc-team/problem

function acmTeam(attendees) {
  const pairsToCheck = (() => {
    const dict = {};
    for (let attendee = 1; attendee < attendees.length; attendee++) {
      dict[attendee] = [];
      for (
        let otherAttendee = attendee + 1;
        otherAttendee <= attendees.length;
        otherAttendee++
      ) {
        dict[attendee].push(otherAttendee);
      }
    }
    return dict;
  })();

  const shouldCheck = (attendeeIdx, otherAttendeeIdx) => {
    const isAttendeeValid = pairsToCheck[attendeeIdx];
    if (!isAttendeeValid) return false;

    if (!otherAttendeeIdx) return true;

    return pairsToCheck[attendeeIdx].some(
      personIdx => personIdx === otherAttendeeIdx
    );
  };

  const hasKnowledge = topic => topic === '1';

  const returnTotal = coll => coll.reduce((total, num) => total + num, 0);

  let maxTotals = [0];

  for (let [i, attendee] of attendees.entries()) {
    i += 1;

    if (!shouldCheck(i)) break;

    let bestCombination = [];
    for (let [j, otherAttendee] of attendees.entries()) {
      j += 1;

      if (!shouldCheck(i, j)) continue;

      const bestTotalReached =
        bestCombination.length === attendee.length &&
        bestCombination.every(hasKnowledge);
      if (bestTotalReached) break;

      let localBestCombination = [];
      for (const [field, topic] of [...attendee].entries()) {
        if (hasKnowledge(topic)) {
          localBestCombination.push(1);
          continue;
        }

        if (hasKnowledge(otherAttendee[field])) {
          localBestCombination.push(1);
          continue;
        }

        localBestCombination.push(0);
      }

      const localBestCombinationTotal = returnTotal(localBestCombination);
      const bestCombinationTotal = returnTotal(bestCombination);
      const isNewBestCombination =
        localBestCombinationTotal > bestCombinationTotal;
      if (isNewBestCombination) bestCombination = localBestCombination;
    }

    const bestCombinationTotal = returnTotal(bestCombination);
    const [max] = maxTotals;
    const isMatchingMax = bestCombinationTotal === max;
    if (isMatchingMax) {
      maxTotals.push(bestCombinationTotal);
      continue;
    }

    const isNewMax = bestCombinationTotal > max;
    if (isNewMax) maxTotals = [bestCombinationTotal];
  }

  const [max] = maxTotals;
  const totalTeamsWithMax = maxTotals.length;

  return [max, totalTeamsWithMax];
}
