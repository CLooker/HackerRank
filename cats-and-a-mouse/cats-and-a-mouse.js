const catAndMouse = (x, y, z) => {
  const mouseADistance = Math.abs(z - x);
  const mouseBDistance = Math.abs(z - y);
  switch (true) {
    case mouseADistance < mouseBDistance:
      return 'Cat A';
    case mouseBDistance < mouseADistance:
      return 'Cat B';
    default:
      return 'Mouse C';
  }
};
