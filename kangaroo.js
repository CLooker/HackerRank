// https://www.hackerrank.com/challenges/kangaroo/problem

const kangaroo = (xLocation, xJumpSize, yLocation, yJumpSize) => {
  const cannotCatchUp = (() => {
    const xStartsAhead = xLocation > yLocation;
    const yJumpsTooSmall = xJumpSize >= yJumpSize;
    const yCannotCatchUp = xStartsAhead && yJumpsTooSmall;

    const yStartsAhead = yLocation > xLocation;
    const xJumpsTooSmall = yJumpSize >= xJumpSize;
    const xCannotCatchUp = yStartsAhead && xJumpsTooSmall;

    return xCannotCatchUp || yCannotCatchUp;
  })();

  if (cannotCatchUp) return 'NO';

  const xStartsAhead = xLocation > yLocation;
  const yStartsAhead = yLocation > xLocation;

  if (xStartsAhead) {
    while (xLocation > yLocation) {
      xLocation += xJumpSize;
      yLocation += yJumpSize;
    }
  } else if (yStartsAhead) {
    while (yLocation > xLocation) {
      xLocation += xJumpSize;
      yLocation += yJumpSize;
    }
  }

  const atSameLocation = xLocation === yLocation;
  return atSameLocation ? 'YES' : 'NO';
};
