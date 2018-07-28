// https://www.hackerrank.com/challenges/halloween-sale/problem

function howManyGames(price, subtractFactor, priceFloor, totalMoney) {
  let totalGames = 0;
  const hasEnoughMoney = p => totalMoney >= p;

  if (!hasEnoughMoney(price)) return totalGames;

  while (price > priceFloor) {
    if (!hasEnoughMoney(price)) return totalGames;
    totalGames++;
    totalMoney -= price;
    price -= subtractFactor;
  }

  while (hasEnoughMoney(priceFloor)) {
    totalGames++;
    totalMoney -= priceFloor;
  }

  return totalGames;
}
