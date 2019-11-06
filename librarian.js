class Media {
    constructor(title) {
      this._title = title
      this._isCheckedOut = false
      this._ratings = []
    }
    
    get title () {
        return this._title;
    }

    get isCheckedOut () {
        return this._isCheckedOut
    }

    set isCheckedOut (bool) {
        this._isCheckedOut = bool;
    }

    get rating () {
        return this._ratings;
    }

    toggleCheckOutStatus() {
      // Flip checked out status with not operator 
      this._isCheckedOut = !this._isCheckedOut;
    }
    
    addRating(rating) {
        if (rating > 0 && rating <= 5) {
            this._ratings.push(rating)
        } else {
            console.log('please enter a value between 1 and 5');
        }
    }

    getAverageRating() {
        return this._ratings.reduce((acc, currVal) => acc + currVal) / this._ratings.length;
    }

  }


class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;        
    }

    get author() {
        return this._author
    }

    get pages() {
        return this._pages
    }

}


class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
        this._movieCast = []
    }

    get director() {
        return this._director
    }

    get runTime() {
        return this._runTime
    }

}


class CD extends Media {
    constructor(title, artist, numTracks, songTitles) {
        super(title);
        this._numTracks = numTracks;
        this._songTitles = songTitles;
        this._artist = artist;
    }

    get songTitles() {
        return this._songTitles
    }

    shuffle() {
        let shuffledTracks = this._songTitles
        for (let i = shuffledTracks.length-1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffledTracks[i], shuffledTracks[j]] = [shuffledTracks[j], shuffledTracks[i]]
        }
        return shuffledTracks
    }

}

class Catalog {
    constructor(name, collection) {
        this._name = name;
        this._collection = []
        }

    get name() {
        return this._name;
    }

    addToCatalog(item) {
        this._collection.push(item)
    }

}

// make media
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 554);
const book1 = new Book('The Gunslinger', 'Steven King', 157);
const movie1 = new Movie('The Gunslinger the Movie', 122);
const speed = new Movie('Sppeed', 'Jan de Bont', 116);
const cd1 = new CD('The Gunslinger the Audiobook', 'Steven King', 26, ['Chap1', 'Chap2', 'Chap3', 'Chap4', 'Chap5']);

// use media (testing)

// //! cd testing
console.log(cd1.title)
console.log(cd1._isCheckedOut)
cd1.toggleCheckOutStatus()
console.log(cd1._isCheckedOut)
console.log(cd1._numTracks)
// console.log(cd1.songTitles);
console.log(`Shuffled Tracks: ${cd1.shuffle()}`);

const myCatalog = new Catalog('My Catalog')
myCatalog.addToCatalog(historyOfEverything)
myCatalog.addToCatalog(book1)
myCatalog.addToCatalog(movie1)
myCatalog.addToCatalog(cd1)

historyOfEverything.addRating(3)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
// console.log(myCatalog);
console.log(myCatalog._collection[0].title);
console.log(`Average rating for ${historyOfEverything.title} is ${historyOfEverything.getAverageRating()}`);






// book1.addRating(4.5)
// book1.addRating('allen')

// historyOfEverything.toggleCheckOutStatus()
// console.log(historyOfEverything.isCheckedOut)
// historyOfEverything.addRating(3)
// historyOfEverything.addRating(4)
// historyOfEverything.addRating(5)
// console.log(historyOfEverything.getAverageRating());

// speed.toggleCheckOutStatus();
// console.log(speed.isCheckedOut);
// speed.addRating(1)
// speed.addRating(1.4)
// speed.addRating(5)
// console.log(speed.getAverageRating());


// //! book testing
// console.log(book1.title)
// console.log(book1.author)
// console.log(book1.pages)
// console.log(book1._isCheckedOut)
// book1.toggleCheckOutStatus()
// console.log(book1.getAverageRating())


// console.log(book1._isCheckedOut)
// console.log(book1._pages)


// //! movie testing
// console.log(movie1.title)
// console.log(movie1._isCheckedOut)
// movie1.toggleCheckOutStatus()
// console.log(movie1._isCheckedOut)
// console.log(movie1._runTime)

