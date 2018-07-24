// https://www.hackerrank.com/challenges/acm-icpc-team/problem

function acmTeam(attendees) {
  // returns obj mapping from attendees
  // to other attendees whom best combinations
  // should be computed
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

  // should we compute combination of scores
  const shouldCheck = (attendee, otherAttendee) => {
    const isAttendeeValid = pairsToCheck[attendee];
    if (!isAttendeeValid) return false;

    if (!otherAttendee) return true;

    return pairsToCheck[attendee].some(person => person === otherAttendee);
  };

  const hasKnowledge = topic => topic === '1';

  const returnTotal = coll => coll.reduce((total, num) => total + num, 0);

  // start off with 0 as the most topics known
  let maxTotals = [0];

  for (let [i, attendee] of attendees.entries()) {
    // add 1 because there is no `0` attendee
    i += 1;

    if (!shouldCheck(i)) break;

    // best score combo between attendee and other
    let bestCombination = [];

    for (let [j, otherAttendee] of attendees.entries()) {
      // no `0` attendee
      j += 1;

      if (!shouldCheck(i, j)) continue;

      // if we have all 1's, we don't need new combos
      const bestTotalReached =
        bestCombination.length === attendee.length &&
        bestCombination.every(hasKnowledge);
      if (bestTotalReached) break;

      // build best combo for this particular attendee/other
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

      // compare this to the best combo attendee has so far
      if (isNewBestCombination) bestCombination = localBestCombination;
    }

    const bestCombinationTotal = returnTotal(bestCombination);
    const [max] = maxTotals;
    const isMatchingMax = bestCombinationTotal === max;

    // compare this attendee's best versus the all-time best
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
