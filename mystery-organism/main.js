// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};


// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


// factory function to produce pAequor objects
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      // select random index to choose random base
      const randIndex = Math.floor(Math.random() * (this.dna.length));
    
      // random base in strand
      randomBase = this.dna[randIndex-1]
    
      // use do while loop to select new random base, repeat loop if same base
      let mutatedBase;
      do {
        mutatedBase = returnRandBase();
      } while (randomBase == mutatedBase) 
    
      // replade original base with mutated base
      this.dna[randIndex-1] = mutatedBase
    },
    compareDna(sample1, sample2) {
      let matchingBasesNum = 0
      for (let i = 0; i < sample1.dna.length-1; i++) {
        if (sample1.dna[i] === sample2.dna[i]) {
          matchingBasesNum++;
          // console.log(`Matching base ${sample1.dna[i]} at ${i+1}.`);
        }
      }
      dnaCommonPercent = Math.round(matchingBasesNum/sample1.dna.length * 100)
      console.log(`Sample1 and sample2 have ${dnaCommonPercent}% dna in common`);
      
    },
    willLikelySurvive(sample) {
  
      // loop and count 'C' and 'G' occurances
      let baseCG = 0
      for (let i = 0; i < sample.dna.length-1; i++) {
        if (sample.dna[i] == 'C' || sample.dna[i] == 'G') {
          baseCG++;
        }
      }
      // calc percentage of 'C' and 'G' bases
      dnaCGPercent = (baseCG/sample.dna.length * 100)
      console.log(`The sample has ${Math.round(dnaCGPercent)}% of 'C' or 'G' bases.`);
      return dnaCGPercent >= 80
    }
  }
};

// const specimen1 = pAequorFactory(1, mockUpStrand());
// const specimen2 = pAequorFactory(2, mockUpStrand());
// // console.log(specimen1.mutate())
// console.log(`Specimen 1: ${specimen1.dna}`);
// console.log(`Specimen 2: ${specimen2.dna}`);
// specimen1.compareDna(specimen1, specimen2);
// console.log(specimen1.willLikelySurvive(specimen1));

const survivingStrands = []

do {
  let specimen = pAequorFactory(survivingStrands.length, mockUpStrand());
  if (specimen.willLikelySurvive(specimen)) {
    survivingStrands.push(specimen)
    console.log(true);
    
  }
} while (survivingStrands.length <= 30)

// console.log(survivingStrands);