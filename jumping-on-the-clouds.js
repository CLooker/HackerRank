// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

const jumpingOnClouds = clouds => {
  let jumps = -1;

  for (let cloudIdx = 0; cloudIdx < clouds.length; ) {
    const twoIndexJumpCloud = clouds[cloudIdx + 2];
    const isThunderHead = twoIndexJumpCloud !== 0;
    isThunderHead ? cloudIdx++ : (cloudIdx += 2);
    jumps++;
  }

  return jumps;
};
