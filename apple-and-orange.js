// https://www.hackerrank.com/challenges/apple-and-orange/problem

const appleAndOrange = (s, t, a, b, apple, orange) => (
  [
    apple.filter(app => app + a >= s && app + a <= t).length, 
    orange.filter(or => b + or <= t && b + or >= s).length
  ]
)
