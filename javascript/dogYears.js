//! calculator from dog years to human years as relative age

// set my age
const myAge = 42

// defining first two years
let earlyYears = 2

// multiple early years by 10.5 as dog year equiv for first 2 years of life
earlyYears *= 10.5

// set later years by substracting out the early years, then multiple by 4
let laterYears = myAge - 2
laterYears *= 4

// add two age variables
let myAgeInDogYears = earlyYears + laterYears

// console.log(myAgeInDogYears);

// set my name variable and make lowercase
const myName = 'Andrew'.toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
