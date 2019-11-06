// set constant varibable with const keyword
const kelvin = 0

// calculate Celsius based on Kelvin
const celsius = kelvin - 273

// calculate Newton based on Celcius
const newton = Math.floor(celsius * (33/100))

// calculate degrees F from C, use Math.floor for rounding
const fahrenheit = Math.floor(celsius*(9/5) + 32)

console.log(kelvin);
console.log(celsius);
console.log(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
