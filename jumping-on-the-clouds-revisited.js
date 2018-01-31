// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem

const jumpingOnClouds = (c, k) => (
    c.reduce(({ energy, ind }, cloud, idx) => (
        idx === ind
            ? cloud === 0
              ? {energy: energy - 1, ind: ind + k}
              : {energy: energy - 3, ind: ind + k}                
            : {energy, ind}
    ), {energy: 100, ind: 0}).energy
)
