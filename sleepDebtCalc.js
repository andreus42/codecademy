const getSleepHours = day => {
    switch (day) {
        case 'Monday': 
            return 8;
        case 'Tuesday': 
            return 8;
        case 'Wednesday': 
            return 8;
        case 'Thursday': 
            return 8;
        case 'Friday': 
            return 8;
        case 'Saturday': 
            return 8;
        case 'Sunday': 
            return 8;
        default:
            console.log('Not a day of the week. Choose Mon-Sun');
    }
}

// console.log(getSleepHours('monday'));

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + 
    getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') +
    getSleepHours('Saturday') +  getSleepHours('Sunday')


const getIdealSleepHours = (idealHours) => idealHours * 7;

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    const sleepDept = idealSleepHours - actualSleepHours;

    if (actualSleepHours == idealSleepHours) {
        console.log(`${actualSleepHours} hours is the perfect amount of sleep.`);
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`${actualSleepHours} hours is ${sleepDept} hours less than ideal sleep.`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`${actualSleepHours} hours is ${Math.abs(sleepDept)} hours more than ideal sleep.`);
    }
}

calculateSleepDebt();