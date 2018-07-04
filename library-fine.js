// https://www.hackerrank.com/challenges/library-fine/problem

function libraryFine(d1, m1, y1, d2, m2, y2) {
  const isNoFine = (() => {
    const happiestPath = y1 < y2;

    if (happiestPath) {
      return true;
    }

    const yearIsDueYear = y1 === y2;
    const monthPreceedsDueMonth = m1 < m2;
    const monthSavesUs = yearIsDueYear && monthPreceedsDueMonth;

    if (monthSavesUs) {
      return true;
    }

    const yearIsDueYearOrEarlier = y1 <= y2;
    const monthIsDueMonthOrEarlier = m1 <= m2;
    const dayPreceedsDueDay = d1 < d2;
    const daySavesUs =
      yearIsDueYearOrEarlier && monthIsDueMonthOrEarlier && dayPreceedsDueDay;

    if (daySavesUs) {
      return true;
    }

    return false;
  })();

  if (isNoFine) {
    return 0;
  }

  const fine = (() => {
    const yearIsValid = y1 <= y2;
    const monthIsDueMonthOrEarlier = m1 <= m2;

    const calculateFineUsingDays = yearIsValid && monthIsDueMonthOrEarlier;

    const calculateFineUsingMonths = yearIsValid;

    if (calculateFineUsingDays) {
      const daysLate = d1 - d2;
      const fineRate = 15;
      const fineToReturn = daysLate * fineRate;
      return fineToReturn;
    } else if (calculateFineUsingMonths) {
      const monthsLate = m1 - m2;
      const fineRate = 500;
      const fineToReturn = monthsLate * fineRate;
      return fineToReturn;
    }

    return 10000;
  })();

  return fine;
}
