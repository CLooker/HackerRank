// https://www.hackerrank.com/challenges/apple-and-orange/problem

function appleAndOrange(s, t, a, b, apple, orange) {
  let aOnRoof = apple.filter(app => app + a >= s && app + a <= t);
  let oOnRoof = orange.filter(or => b + or <= t && b + or >= s);
  return [aOnRoof.length, oOnRoof.length]
}
