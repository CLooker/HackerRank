// https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(n, ar) {
  const bTypesAndPops = ar.reduce(
    (bTypesAndPops, type) => (
      Object.assign({}, bTypesAndPops, ++bTypesAndPops[type])
    ), {1: 0, 2: 0, 3: 0, 4: 0, 5: 0});
  const bTypes = Object.keys(bTypesAndPops);
  const most = bTypes.map(type => bTypesAndPops[type]).reduce((result, pop) => pop > result ? result = pop : result, null);
  return bTypes.filter(type => bTypesAndPops[type] === most)[0];
}
