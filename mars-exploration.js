// https://www.hackerrank.com/challenges/mars-exploration/problem

function marsExploration(message) {
  const possibleSOSMessages = (() => {
    let messageArr = [...message];
    let arr = [];

    for (let messageIdx = 0; messageIdx < messageArr.length; messageIdx += 3) {
      const sliceStart = messageIdx;
      const sliceEnd = messageIdx + 3;
      const possibleSOSMessage = messageArr
        .slice(sliceStart, sliceEnd)
        .join('');
      arr.push(possibleSOSMessage);
    }

    return arr;
  })();

  const radiationLetterTotal = (() => {
    const SOS = 'SOS';

    return possibleSOSMessages.reduce(
      (radiationLetterTotal, possibleSOSMessage) => {
        let localRadiationLetterTotal = 0;

        [...possibleSOSMessage].forEach((letter, letterIdx) => {
          const SOSLetter = SOS[letterIdx];
          const isRadiationLetter = letter !== SOSLetter;
          if (isRadiationLetter) localRadiationLetterTotal++;
        });

        return radiationLetterTotal + localRadiationLetterTotal;
      },
      0
    );
  })();

  return radiationLetterTotal;
}
