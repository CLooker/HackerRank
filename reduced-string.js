function super_reduced_string(s) {
  while (true) {
    let deleted = false;

    for (let i = 0; i < s.length; i++) {
      const letter = s[i];
      const nextLetter = s[i + 1];
      const shouldDelete = letter === nextLetter;
      if (shouldDelete) {
        deleted = true;
        const start = s.slice(0, i);
        const end = s.slice(i + 2);
        s = `${start}${end}`;
        i++;
      }
    }

    if (!deleted) {
      break;
    }
  }

  return s ? s : 'Empty String';
}
