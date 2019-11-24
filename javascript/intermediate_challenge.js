// 1.
const reverseArray = arr => {
    let newArr = [];
        // console.log(arr.length);
        for (let i = arr.length - 1; i >= 0; i--) {
            newArr.push(arr[i])
        };
    return newArr;
};

const sentence = ['sense.','make', 'all', 'will', 'This'];
// console.log(reverseArray(sentence)) 


// 2.

const greetAliens = aliens => {
    for (let i = 0; i < aliens.length; i++) {
        console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`);
    };
};

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"]
// greetAliens(aliens);



// 3. Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];

convertToBaby = animals => {
    let newArr = [];
    for (let i = 0; i < animals.length; i++) {
        newArr.push(`baby ${animals[i]}`);
    };
    return newArr;
};

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
// console.log(convertToBaby(animals));

// 5. Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            let j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

// console.log(smallestPowerOfTwo(numbers)) 

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:

const compareTeeth = (speciesObj1, specieOjb2) => speciesObj1.numTeeth > speciesObj2.numTeeth;

const sortSpeciesByTeeth = (speciesArr) => {
  let newArr = [speciesArr[0]];
  for (let i=1; i < speciesArr.length; i++) {
    // if compareTeeth(speciesArr[i])
    console.log(i);
  };
}

// const ordered = {};
// Object.keys(unordered).sort().forEach(function(key) {
//   ordered[key] = unordered[key];
// });

// console.log(speciesArray.length);



// Should print [ { speciesName: 'human', numTeeth: 32 },
// { speciesName: 'dog', numTeeth: 42 },
// { speciesName: 'shark', numTeeth: 50 },
// { speciesName: 'alligator', numTeeth: 80 } ]

// console.log(sortSpeciesByTeeth(speciesArray));
// console.log(JSON.stringify(speciesArray));

// 14.

// Write your code here:

const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
    
        get name() {
            return this._name;
        },
        
        set name(name) {
            return this._name = name;
        },
        
        get breed() {
            return this._breed;
        },
        
        set breed(breed) {
            return this._breed = breed;
        },
        
        get weight() {
            return this._weight;
        },
        
        set weight(weight) {
            return this._weight = weight;
        },

        bark() {
            console.log('ruff! ruff!')
        },
        eatTooManyTreats() {
            this._weight++
        }

   }
}

pet = dogFactory('Monster', 'cat', 11)
console.log(pet);
pet.eatTooManyTreats()
pet.bark();
console.log(pet.weight);
