const mutate = (strand) => {
  // select random index to choose random base
  const randIndex = Math.floor(Math.random() * (strand.length));

  // random base in strand
  randomBase = strand[randIndex-1]

  // use do while loop to select new random base, repeat loop if same base
  let mutatedBase;
  do {
    mutatedBase = returnRandBase();
  } while (randomBase == mutatedBase) 

  // replade original base with mutated base
  strand[randIndex-1] = mutatedBase

  return strand
}