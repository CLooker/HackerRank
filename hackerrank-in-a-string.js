// https://www.hackerrank.com/challenges/hackerrank-in-a-string/submissions/code/85148296

const hackerrankInString = ([...str]) => {
  const HR = 'hackerrank';
  let mutableHR = HR;
  let possibleHR = '';

  return (() => {
    for (const letter of str) {
      const [nextHRletter] = mutableHR;
      if (letter === nextHRletter) {
        possibleHR = possibleHR.concat(letter);
        mutableHR = mutableHR.slice(1);
        if (possibleHR === HR) return 'YES';
      }
    }

    return 'NO';
  })();
};
