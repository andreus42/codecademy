_ = {
    clamp(num, lowerBound, upperBound) {
        return Math.min(Math.max(num, lowerBound), upperBound);
    },

    inRange(num, startNum, endNum) {
        
        // if undefined endNum, use startNum = 0, use startNum as endNum
        if (typeof endNum === 'undefined') {
            endNum = startNum;
            startNum = 0;
        }
        
        // if startNum is greated then endNum, swap values
        if (startNum > endNum) {
            let temp = endNum;
            endNum = startNum;
            startNum = temp;
        }

        return (num >= startNum && num < endNum);
    },

    words(sentance) {
        return sentance.split(' ');
    },

    pad(word, len) {
        const diff = len - word.length;
        if (diff <= 0) {
            return word;
        } else {
            const padLow = Math.floor(diff/2);
            const padHigh = Math.ceil(diff/2);
            return ' '.repeat(padLow) + word + ' '.repeat(padHigh);
        }
    },

    has(obj, key) {
        return typeof obj[key] !== 'undefined';
    },

    invert(obj) {
        let newObj = {};
        keyArr = Object.keys(obj);
        valArr = Object.values(obj);
        keyArr.forEach((element, index) => {
            newObj[valArr[index]] = element;
        });
        return newObj;
    },

    findKey(object, predicate) {
        // if key is found in object return key-name, else undefined
        
        for (let key in object) {
            // Loop through each key in object, return key if key.value (object[key])
            // passes the predicate funtion
            if (predicate(object[key])) {
                return key;
            }
        }
        return undefined;
    },

    drop(array, num) {
        // if num not specified drop 1 element, other drop num numbers of elements
        if (num === undefined) {
            array.shift();
        } else {
            for (let i=0; i < num; i++) {
                array.shift();
            }
        }
        return array;
    },

    dropWhile(array, predicate) {
        const cb = (element, index) => {
            return !predicate(element, index, array);
        };
        let dropNumber = array.findIndex(cb);
        droppedArray = this.drop(dropNumber);
        return droppedArray;
    },

    chunk(array, size) {
        if (size === undefined) size=1;
        let chunkedArray = [];
        for (let i=0; i < array.length; i+=size) {
            let tempArray = []
            for (let j=0; j < size; j++) {
                if (i+j < array.length) {
                    tempArray.push(array[i+j]);
                }
            }
            chunkedArray.push(tempArray);
        }
        return chunkedArray;
    }
};

// console.log(`clamp: ${_.clamp(7, 9, 11)}`);
// console.log(`isRange: ${_.inRange(9, 13, 3)}`);
// console.log(`word:_${_.pad('Andrew', 13)}_`);
// console.log(`has: ${_.has(person, 'name')}`);
// console.log(_.invert(person));
// console.log(_.drop(myArray, 2));

const person = {name: 'name', age: 42};
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


console.log(_.chunk(myArray, 7));

module.exports = _;