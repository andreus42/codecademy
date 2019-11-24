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
   return this.breed;
  },

  set breed(breed) {
    return this.breed = breed;
  },

  get weight() {
    return this._weight;
  },

  set weight(weight) {
    return this._weight = weight;
  }        
}

console.log(dogFactory('Monster', 'cat', 11));