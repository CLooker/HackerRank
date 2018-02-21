// https://www.hackerrank.com/challenges/strange-advertising/problem

const viralAdvertising = n =>
  Array.from(Array(n))
    .reduce((days, _, i) => days.concat(++i), [])
    .reduce(
      (dailyLikeTotal, day) =>
        day === 1
          ? dailyLikeTotal.concat(2)
          : dailyLikeTotal.concat(
              Math.floor(dailyLikeTotal[dailyLikeTotal.length - 1] * 3 / 2)
            ),
      []
    )
    .reduce((totalLikes, dailyLikes) => totalLikes + dailyLikes);
