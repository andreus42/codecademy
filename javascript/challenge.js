// Write your function here:

const lifePhase = age => {
  switch (true) {
    case (age >= 0 && age < 4): return 'baby';
    case (age >= 4 && age < 12): return 'child';
    case (age >= 12 && age < 20): return 'teen';
    case (age >= 20 && age < 65): return 'adult';
    case (age >= 65 && age < 141): return 'senior citizen';
    default: return 'This is not a valid age';
  }
}

// Uncomment the line below when you're ready to try out your function
// console.log(lifePhase(5)) //should print 'child'


const finalGrade = (grade1, grade2, grade3) => {
    if ((grade1 < 0 || grade1 > 100) ||
        (grade2 < 0 || grade2 > 100) ||
        (grade3 < 0 || grade3 > 100)) {
        return  'You have entered an invalid grade.';
    }
    const finalGrade = (grade1 + grade2 + grade3) / 3
    switch (true) {
        case (finalGrade >= 0 && finalGrade < 60): return 'F';
        case (finalGrade >= 60 && finalGrade < 70): return 'D';
        case (finalGrade >= 70 && finalGrade < 80): return 'C';
        case (finalGrade >= 80 && finalGrade < 90): return 'B';
        case (finalGrade >= 90 && finalGrade <= 100): return 'A';
    }
}
// Uncomment the line below when you're ready to try out your function
// console.log(finalGrade(101, 92, 95)) // Should print 'A'


const reportingForDuty = (rank, lastname) => {
    return `${rank} ${lastname} reporting for duty!`
}

// console.log(reportingForDuty('Private', 'Fido'))


const calculateWeight = (earthWeight, planet) => {
    
    switch (true) {
        case planet === 'Mercury': return earthWeight * 0.378;
        case planet === 'Venus': return earthWeight * 0.907;
        case planet === 'Mars': return earthWeight * 0.377;
        case planet === 'Jupiter': return earthWeight * 2.36;
        case planet === 'Saturn': return earthWeight * 0.916;
        default: return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
}
// console.log(calculateWeight(10, 'Town'));

const truthyOrFalsy = val => (val ? true : false);
// console.log(truthyOrFalsy(0));

const numImaginaryFriends = (num) => Math.round(num/3);
// console.log(numImaginaryFriends(5));

const sillySentence = (adjective, verb, noun) => {
    return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`
}

sillySentence('excited', 'love', 'functions'); 

const howOld = (age, year) => {
    const currentYear = 2019;
    const calcAge = (year - currentYear) + age;
    switch(true) {
        case (year > currentYear): return `You will be ${calcAge} in the year ${year}`;
        case ((year - (currentYear - age)) == 0): return `You were born in the year ${year}.`;
        case ((year - (currentYear - age)) < 0): return `The year ${year} was ${Math.abs(calcAge)} years before you were born`;
        case ((year - (currentYear - age)) > 0): return `You were ${calcAge} in the year ${year}`;
    }
}

// console.log(howOld(42, 2200));

const tipCalculator = (quality, total) => {
    switch (quality) {
        case 'bad' : return total * 0.05;
        case 'ok' : return total * 0.15;
        case 'good' : return total * 0.20;
        case 'excellent' : return total * 0.30;
        default : return total * 0.18 
    }
}

// console.log(tipCalculator('ok', 100)); // Should return 20

const toEmoticon = str => {
    switch (str) {
        case 'shrug' : return '|_{"}_|'
        case 'smiley face' : return ':)'
        case 'frowny face' : return':('
        case 'winky face' : return ';)'
        case 'heart' : return '<3';
        default : return '|_(* ~ *)_|';
    }
}

console.log(toEmoticon('heart'));