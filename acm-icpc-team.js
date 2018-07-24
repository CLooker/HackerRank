// https://www.hackerrank.com/challenges/acm-icpc-team/problem

function acmTeam(attendees) {
  // returns obj mapping from attendees
  // to other attendees for which best combinations
  // should be computed
  const validAttendeeCombos = (() => {
    const dict = {};
    const { length } = attendees;
    for (let attendee = 1; attendee < length; attendee++) {
      dict[attendee] = [];
      for (
        let otherAttendee = attendee + 1;
        otherAttendee <= length;
        otherAttendee++
      ) {
        dict[attendee].push(otherAttendee);
      }
    }
    return dict;
  })();

  // should we compute combination of scores
  const isValidCombo = (attendee, otherAttendee) => {
    const isAttendeeValid = validAttendeeCombos[attendee];
    if (!isAttendeeValid) return false;

    if (!otherAttendee) return true;

    return validAttendeeCombos[attendee].some(
      person => person === otherAttendee
    );
  };

  const hasKnowledge = topic => topic == 1;

  const returnTotal = coll => coll.reduce((total, num) => total + num, 0);

  // start off with 0 as the most topics known
  let mostTopicsKnownColl = [0];

  for (let [i, attendee] of attendees.entries()) {
    // validAttedeeCombos is 1-indexed
    i += 1;

    if (!isValidCombo(i)) break;

    // best score combo between this attendee and all others
    // TODO RENAME
    let bestComboForThisAttendee = [];

    for (let [j, otherAttendee] of attendees.entries()) {
      // validAttedeeCombos is 1-indexed
      j += 1;
      if (!isValidCombo(i, j)) continue;

      // if we have all 1's, we don't need new combos
      const isBestPossibleCombo =
        bestComboForThisAttendee.length === attendee.length &&
        bestComboForThisAttendee.every(hasKnowledge);
      if (isBestPossibleCombo) break;

      // build best combo for this particular attendee/otherAttendee
      let combo = [];
      for (const [topicIdx, topic] of [...attendee].entries()) {
        if (hasKnowledge(topic)) {
          combo.push(1);
          continue;
        }

        if (hasKnowledge(otherAttendee[topicIdx])) {
          combo.push(1);
          continue;
        }

        combo.push(0);
      }

      const topicsKnown = returnTotal(combo);
      const attendeeMostTopicsKnown = returnTotal(bestComboForThisAttendee);
      const isNewBest = topicsKnown > attendeeMostTopicsKnown;

      // compare this to the best combo attendee has so far
      if (isNewBest) bestComboForThisAttendee = combo;
    }

    const attendeeMostTopicsKnown = returnTotal(bestComboForThisAttendee);
    const [mostTopicsKnown] = mostTopicsKnownColl;
    const isMatchingMostKnownTopics =
      attendeeMostTopicsKnown === mostTopicsKnown;

    // compare this attendee's best versus the all-time best
    if (isMatchingMostKnownTopics) {
      mostTopicsKnownColl.push(attendeeMostTopicsKnown);
      continue;
    }

    const isNewMax = attendeeMostTopicsKnown > mostTopicsKnown;
    if (isNewMax) mostTopicsKnownColl = [attendeeMostTopicsKnown];
  }

  const [mostTopicsKnown] = mostTopicsKnownColl;
  const totalTeamsWithMostTopicsKnown = mostTopicsKnownColl.length;

  return [mostTopicsKnown, totalTeamsWithMostTopicsKnown];
}
