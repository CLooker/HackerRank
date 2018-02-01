// https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(n, k, b, ar) {
  const difference = b - (ar.reduce((result, item, index) => (
   index !== k ? result += item : result
  ), 0) / 2)
  
  return difference === 0 ? "Bon Appetit" : difference
}
