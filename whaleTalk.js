const input = 'turpentine and turtles'

const vowels = ['a', 'e', 'i', 'o', 'u']

let resultArray = []

for (let i = 0; i < input.length; i++) {
    // console.log(i);
    currentLetter = input[i].toLowerCase()   
    for (let j = 0; j < vowels.length; j++) {
        if (currentLetter == vowels[j]) {
            resultArray.push(currentLetter)
        }
    }
    // Checking for whale "double letters"
    if (currentLetter == 'e') {
        resultArray.push('e')
    } else if (currentLetter == 'u') {
        resultArray.push('u')
    }
}

console.log(resultArray.join('').toUpperCase());
