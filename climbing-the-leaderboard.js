// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

function climbingLeaderboard(allScores, aliceScores) {
  const getUniqueScoresAsc = scores => {
    const scoresAsc = [...scores].sort((a, b) => a - b);
    const lastVal = arr => arr.length && arr[arr.length - 1];

    let uniqueScores = [];

    scoresAsc.forEach(score => {
      const lastUniqueScore = lastVal(uniqueScores);
      if (!lastUniqueScore) return uniqueScores.push(score);

      const isNewUniqueScore = score > lastUniqueScore;
      if (isNewUniqueScore) uniqueScores.push(score);
    });

    return uniqueScores;
  };

  const aliceRankings = (() => {
    const leaderBoardScores = getUniqueScoresAsc(allScores);
    const { length: leaderBoardScoresLength } = leaderBoardScores;

    let rankings = [];
    let leaderBoardScoresIdx = 0;

    aliceScores.forEach(aliceScore => {
      for (
        ;
        leaderBoardScoresIdx < leaderBoardScoresLength;
        leaderBoardScoresIdx++
      ) {
        const leaderBoardScore = leaderBoardScores[leaderBoardScoresIdx];

        const isLastLeaderBoardScore =
          leaderBoardScoresIdx === leaderBoardScoresLength - 1;
        const isNewTopScore =
          isLastLeaderBoardScore && leaderBoardScore <= aliceScore;

        if (isNewTopScore) {
          rankings.push(1);
          break;
        }

        const isRankingFound = aliceScore < leaderBoardScore;
        if (!isRankingFound) continue;

        const isWorstScore = leaderBoardScoresIdx === 0;
        const lastPlaceRanking = leaderBoardScoresLength + 1;

        rankings.push(
          isWorstScore
            ? lastPlaceRanking
            : lastPlaceRanking - leaderBoardScoresIdx
        );
        break;
      }
    });

    return rankings;
  })();

  return aliceRankings;
}
