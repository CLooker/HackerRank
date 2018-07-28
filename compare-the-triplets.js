// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(aliceRatings, bobRatings) {
  const ratingPairs = aliceRatings.map((aliceRating, i) => {
    const bobRating = bobRatings[i];
    return [aliceRating, bobRating];
  });

  let alicePoints = 0;
  let bobPoints = 0;

  ratingPairs.forEach(([aliceRating, bobRating]) => {
    const isAlicePoint = aliceRating > bobRating;
    if (isAlicePoint) alicePoints++;

    const isBobPoint = bobRating > aliceRating;
    if (isBobPoint) bobPoints++;
  });

  return [alicePoints, bobPoints];
}
