function camelcase(s) {    
  let indices = s.split("").map((l, i) => l === l.toUpperCase() && i).filter(item => item !== false);    
  indices = [ 0, ...indices ]    
  let wordsColl = [];    
  indices.forEach((idx, i) => {         
    wordsColl.push(s.substring(idx, indices[i + 1]))    
  });    
  return wordsColl.length;
}
