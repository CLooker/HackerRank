// https://www.hackerrank.com/challenges/migratory-birds/problem

const migratoryBirds = birdTypes => {
  const typesToFreq = (() => {
    const dict = {};

    birdTypes.forEach(birdType => {
      const isBirdTypeInDict = dict[birdType];
      isBirdTypeInDict ? dict[birdType]++ : (dict[birdType] = 1);
    });

    return dict;
  })();

  let highestFreqBirdType = null;

  Object.entries(typesToFreq).reduce((highestFreq, [birdType, freq]) => {
    const isHighestFreq = freq > highestFreq;
    if (isHighestFreq) {
      highestFreqBirdType = birdType;
      return freq;
    }

    return highestFreq;
  }, 0);

  return highestFreqBirdType;
};
