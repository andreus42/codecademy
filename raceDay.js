let raceNumber = Math.floor(Math.random() * 1000);

earlyRegistration = true;
runnerAge = 17;

if (runnerAge > 18 && earlyRegistration) {
    raceNumber += 1000;
}

if (runnerAge > 18 && earlyRegistration) {
    console.log(`Your racetime is at 9:30am and your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !(earlyRegistration)) {
    console.log(`Your racetime is at 11:00am and your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`Your racetime is at 12:30am and your race number is ${raceNumber}.`);
} else {
    console.log('Please see the registration desk.');
    
}