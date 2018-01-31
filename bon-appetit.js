// https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(n, k, b, ar) {
  const indexOfNotEaten = k;
  const actuallyCharged = b;
  const food = ar;
  const difference = actuallyCharged - (ar.reduce((result, item, index) => {
    if (index !== indexOfNotEaten) {
      result = result + item;
    }
    return result;
  }, 0) / 2)

  if (difference === 0) {
    return "Bon Appetit"
  } else {
    return difference
  }

}
