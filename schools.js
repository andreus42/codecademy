class School {
    constructor(name, level, numberOfSudents) {
        this._name = name;
        this._level = level
        this._numberOfSudents = numberOfSudents
        }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfSudents() {
        return this._numberOfSudents;
    }
    
    set numberOfSudents(num) {
        this._numberOfSudents = num;
    }

    quickfacts() {
        console.log(`${this.name} educates ${this.numberOfSudents} students at the ${this.level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeachers) {
        // generate random number as index of substitute teacher list
        return substituteTeachers[(Math.floor(Math.random()*substituteTeachers.length))]
    }
    
}

class PrimarySchool extends School {
    constructor(name, numberOfSudents, pickupPolicy) {
        super(name, 'primary', numberOfSudents)
        this._pickupPolicy = pickupPolicy
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
    
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfSudents)
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'High School', numberOfStudents)
        this._sportsTeams = sportsTeams
    }

    get sportsTeams() {
        return this._sportsTeams;
    }

}


// const symonds = new PrimarySchool('Symonds', 150, 'morning');
// const keeneHigh = new HighSchool('Keene High', 150, ['basketball', 'track']);
// // console.log(symonds.quickfacts());
// // console.log(School.pickSubstituteTeacher(['Andrew', 'Tracy', 'Diane']));
// console.log(symonds);
// console.log(keeneHigh.sportsTeams);

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 
'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickfacts()

const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(sub);
