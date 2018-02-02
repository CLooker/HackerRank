// https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(n, ar) {
  const bPopByType = ar.reduce(
    (bPopByType, type) => (
      Object.assign({}, bPopByType, ++bPopByType[type])
    ), {1: 0, 2: 0, 3: 0, 4: 0, 5: 0});
  const bPopTypes = Object.keys(bPopByType);
  const most = bPopTypes.map(type => bPopByType[type]).reduce((result, pop) => pop > result ? result = pop : result, null);
  return bPopTypes.filter(type => bPopByType[type] === most)[0];
}
