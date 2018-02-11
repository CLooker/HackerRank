// https://www.hackerrank.com/challenges/apple-and-orange/problem

// declarative, immutable, side-effects pushed to edge
const countApplesAndOranges = (s, t, a, b, apple, orange) =>
  [
    apple.filter(app => app + a >= s && app + a <= t).length,
    orange.filter(or => b + or <= t && b + or >= s).length
  ].forEach(count => console.log(count));

// imperative, mutable
function countApplesAndOranges(s, t, a, b, apples, oranges) {
   let aCount = 0;
   for (let i = 0; i < apple.length; i++) {
       if (    ((apple[i] + a) >= s) &&   ( (apple[i] + a) <= t) ) {
           ++aCount;
       }
   }
   let oCount = 0;
   for (let i = 0; i < orange.length; i++) {
       if ( (orange[i] + b <= t) && (b + orange[i] >= s)    ) {
          ++oCount; 
       }
   }
   console.log(`${aCount}\n${oCount}`);
}
