// https://www.hackerrank.com/challenges/flatland-space-stations/problem

const flatlandSpaceStations = (n, c) => {
  const citiesWithStations = (() => {
    let dict = {};

    const { length } = c;

    for (let i = 0; i < length; i++) {
      const cityWithStation = c[i];
      dict[cityWithStation] = true;
    }

    return dict;
  })();

  const distUntilFirstStation = (() => {
    let dist = 0;

    for (let city = 0; city < n; city++) {
      const cityHasStation = citiesWithStations[city];
      if (cityHasStation) break;

      dist++;
    }

    return dist;
  })();

  const distBetweenLastCityAndLastStation = (() => {
    let dist = 0;

    for (let city = n - 1; city >= 0; city--) {
      const cityHasStation = citiesWithStations[city];
      if (cityHasStation) break;

      dist++;
    }

    return dist;
  })();

  const greatestDistBetweenStations = (() => {
    let currentDist = 0;
    let maxDist = 0;

    for (let city = 0; city < n; city++) {
      const cityHasStation = citiesWithStations[city];
      if (cityHasStation) {
        const shouldUpdateMax = currentDist > maxDist;
        if (shouldUpdateMax) maxDist = currentDist;

        currentDist = 0;
        continue;
      }

      currentDist++;
    }

    return maxDist;
  })();

  const greatestDistForMiddleCity = Math.ceil(greatestDistBetweenStations / 2);

  const maxDistance = Math.max(
    distUntilFirstStation,
    distBetweenLastCityAndLastStation,
    greatestDistForMiddleCity
  );

  return maxDistance;
};
