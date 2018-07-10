// https://www.hackerrank.com/challenges/lisa-workbook/problem

function workbook(_, maxProbsPerPage, arr) {
  const pageToProbsDict = (() => {
    const pageToProbs = {};
    let currentPage = 1;

    arr.forEach(probCount => {
      const shouldStartOnNextPage = pageToProbs[currentPage] !== undefined;
      if (shouldStartOnNextPage) {
        currentPage++;
      }

      let probsOnAPage = 0;

      for (let problemNumber = 1; problemNumber <= probCount; problemNumber++) {
        if (probsOnAPage < maxProbsPerPage) {
          const currentPageAlreadyHasProb =
            pageToProbs[currentPage] !== undefined;
          if (currentPageAlreadyHasProb) {
            pageToProbs[currentPage] = pageToProbs[currentPage].concat(
              problemNumber
            );
            probsOnAPage++;
          } else {
            pageToProbs[currentPage] = [problemNumber];
            probsOnAPage = 1;
          }
        } else {
          currentPage++;
          pageToProbs[currentPage] = [problemNumber];
          probsOnAPage = 1;
        }
      }
    });

    return pageToProbs;
  })();

  const specialProbsTotal = Object.entries(pageToProbsDict).reduce(
    (total, [page, probColl]) => {
      const localTotal = probColl.reduce((localT, prob) => {
        const specialProbExists = Number(prob) === Number(page);
        return specialProbExists ? ++localT : localT;
      }, 0);

      return (total += localTotal);
    },
    0
  );

  return specialProbsTotal;
}
