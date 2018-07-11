// https://www.hackerrank.com/challenges/apple-and-orange/problem

//
const countApplesAndOranges = (
  startOfHouse,
  endOfHouse,
  appleTreeCoord,
  orangeTreeCoord,
  distancesOfFallenApples,
  distancesOfFallenOranges
) => {
  const fruitFellOnAHouse = houseCoords => treeCord => fruitDistFromTree => {
    const fruitCoord = fruitDistFromTree + treeCord;
    const [houseStart, houseEnd] = houseCoords;
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
const countApplesAndOranges = (s, t, a, b, apple, orange) =>
  [
    apple.filter(app => app + a >= s && app + a <= t).length,
    orange.filter(or => b + or <= t && b + or >= s).length
  ].forEach(count => console.log(count));

// imperative, mutable
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let aCount = 0;
  for (let i = 0; i < apple.length; i++) {
    if (apple[i] + a >= s && apple[i] + a <= t) {
      ++aCount;
    }
  }
  let oCount = 0;
  for (let i = 0; i < orange.length; i++) {
    if (orange[i] + b <= t && b + orange[i] >= s) {
      ++oCount;
    }
  }
  console.log(`${aCount}\n${oCount}`);
}
