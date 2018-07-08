// https://www.hackerrank.com/challenges/flatland-space-stations/problem

const flatlandSpaceStations = (n, c) => {
  const citiesWithStations = (citiesWithStationsArr => {
    let KVS = {};

    const { length } = citiesWithStationsArr;

    for (let i = 0; i < length; i++) {
      const cityWithStation = citiesWithStationsArr[i];
      KVS[cityWithStation] = true;
    }

    return KVS;
  })(c);

  const distUntiFirstStation = (KVS => {
    let dist = 0;

    for (let city = 0; city < n; city++) {
      const cityHasStation = KVS[city];
      if (cityHasStation) {
        break;
      }

      dist++;
    }

    return dist;
  })(citiesWithStations);

  const distBetweenLastCityAndLastStation = (KVS => {
    let dist = 0;

    for (let city = n - 1; city >= 0; city--) {
      const cityHasStation = KVS[city];
      if (cityHasStation) {
        break;
      }

      dist++;
    }

    return dist;
  })(citiesWithStations);

  const greatestDistBetweenStations = (KVS => {
    let currentDist = 0;
    let maxDist = 0;

    for (let city = 0; city < n; city++) {
      const cityHasStation = KVS[city];
      if (cityHasStation) {
        const shouldUpdateMax = currentDist > maxDist;
        if (shouldUpdateMax) {
          maxDist = currentDist;
        }

        currentDist = 0;
        continue;
      }

      currentDist++;
    }

    return maxDist;
  })(citiesWithStations);

  const greatestDistForMiddleCity = Math.ceil(greatestDistBetweenStations / 2);

  const maxDistance = Math.max(
    distUntiFirstStation,
    distBetweenLastCityAndLastStation,
    greatestDistForMiddleCity
  );

  return maxDistance;
};
