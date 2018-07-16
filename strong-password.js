// https://www.hackerrank.com/challenges/strong-password/problem

function minimumNumber(n, password) {
  const numbers = '0123456789';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const specialCharacters = '!@#$%^&*()-+';
  const charArrs = [
    [...numbers],
    [...lowerCase],
    [...upperCase],
    [...specialCharacters]
  ];
  const passwordArr = [...password];

  const isLongEnough = (() => password.length >= 6)();

  let typesOfCharMissing = 0;

  const hasCorrectChars = (() => {
    for (const charArr of charArrs) {
      const passesTest = passwordArr.some(char =>
        charArr.some(otherChar => otherChar === char)
      );
      if (!passesTest) {
        typesOfCharMissing++;
      }
    }

    return typesOfCharMissing === 0;
  })();

  const isValid = (() => isLongEnough && hasCorrectChars)();

  if (isValid) {
    return 0;
  }

  const minChangesToMake = (() => {
    const howManyCharShort = isLongEnough ? 0 : 6 - password.length;
    const needsMoreChanges = howManyCharShort > typesOfCharMissing;
    return needsMoreChanges ? howManyCharShort : typesOfCharMissing;
  })();

  return minChangesToMake;
}
