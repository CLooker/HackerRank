// https://www.hackerrank.com/challenges/apple-and-orange/problem

// declarative
function countApplesAndOranges(
  startOfHouse,
  endOfHouse,
  appleTreeCoord,
  orangeTreeCoord,
  distancesOfFallenApples,
  distancesOfFallenOranges
) {
  const returnCount = (distances, treeCoord) =>
    distances.reduce((total, dist) => {
      const fruitCoord = treeCoord + dist;
      const fellPastStart = fruitCoord >= startOfHouse;
      const fellBeforeEnd = fruitCoord <= endOfHouse;
      const fellOntoHouse = fellPastStart && fellBeforeEnd;
      return fellOntoHouse ? ++total : total;
    }, 0);

  const aCount = returnCount(distancesOfFallenApples, appleTreeCoord);
  const oCount = returnCount(distancesOfFallenOranges, orangeTreeCoord);

  [aCount, oCount].forEach(count => console.log(count));
}

// curried and partially applied fn, possibly more understandable
const countApplesAndOranges = (
  startOfHouse,
  endOfHouse,
  appleTreeCoord,
  orangeTreeCoord,
  distancesOfFallenApples,
  distancesOfFallenOranges
) => {
  const fruitFellOnAHouse = ([
    houseStart,
    houseEnd
  ]) => treeCord => fruitDistFromTree => {
    const fruitCoord = fruitDistFromTree + treeCord;
    const fellPastStart = fruitCoord >= houseStart;
    const fellBeforeEnd = fruitCoord <= houseEnd;
    return fellPastStart && fellBeforeEnd;
  };

  const houseCoords = [startOfHouse, endOfHouse];

  const fruitFellOnThisHouse = fruitFellOnAHouse(houseCoords);

  const applesThatHitThisHouse = (() => {
    const appleFellOnThisHouse = fruitFellOnThisHouse(appleTreeCoord);
    const { length: total } = distancesOfFallenApples.filter(
      appleFellOnThisHouse
    );
    return total;
  })();

  const orangesThatHitThisHouse = (() => {
    const orangeFellOnThisHouse = fruitFellOnThisHouse(orangeTreeCoord);
    const { length: total } = distancesOfFallenOranges.filter(
      orangeFellOnThisHouse
    );
    return total;
  })();

  [applesThatHitThisHouse, orangesThatHitThisHouse].forEach(total =>
    console.log(total)
  );
};

// declarative, immutable, side-effects pushed to edge
const countApplesAndOranges = (
  startOfHouse,
  endOfHouse,
  appleTreeCoord,
  orangeTreeCoord,
  distancesOfFallenApples,
  distancesOfFallenOranges
) =>
  [
    distancesOfFallenApples.filter(
      aDist =>
        aDist + appleTreeCoord >= startOfHouse &&
        aDist + appleTreeCoord <= endOfHouse
    ).length,
    distancesOfFallenOranges.filter(
      oDist =>
        oDist + orangeTreeCoord <= endOfHouse &&
        oDist + orangeTreeCoord >= startOfHouse
    ).length
  ].forEach(count => console.log(count));

// imperative, mutable
function countApplesAndOranges(
  startOfHouse,
  endOfHouse,
  appleTreeCoord,
  orangeTreeCoord,
  distancesOfFallenApples,
  distancesOfFallenOranges
) {
  const returnCount = (distances, treeCoord) => {
    let count = 0;
    for (let i = 0; i < distances.length; i++) {
      const dist = distances[i];
      const fruitCoord = treeCoord + dist;
      const fellPastStart = fruitCoord >= startOfHouse;
      const fellBeforeEnd = fruitCoord <= endOfHouse;
      const fellOntoHouse = fellPastStart && fellBeforeEnd;
      if (fellOntoHouse) {
        count++;
      }
    }
    return count;
  };

  const aCount = returnCount(distancesOfFallenApples, appleTreeCoord);
  const oCount = returnCount(distancesOfFallenOranges, orangeTreeCoord);

  console.log(`${aCount}\n${oCount}`);
}
