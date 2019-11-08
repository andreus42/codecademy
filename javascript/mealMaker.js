const menu = {
    _courses : {
        appetizers : [], 
        mains : [], 
        desserts : []
    },
    get appetizers() {
        return this._courses.appetizers;
    }, 
    set appetizers(appetizers) {
        this._courses.appetizers =  appetizers;
    },
    get mains() {
        return this._courses.mains;
        }, 
    set mains(mains) {
            return this._courses.mains = mains;
        },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(desserts) {
        return this._courses.desserts = desserts;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            dish : dishName,
            price : dishPrice
        }
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randIndex = Math.floor(Math.random() * (dishes.length));
        return this._courses[courseName][randIndex]; //[randIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert= this.getRandomDishFromCourse('desserts');
        totalPrice = appetizer.price + main.price + dessert.price
        return `Your meal is ${appetizer.dish} for an app, ${main.dish} for your main dish, and ${dessert.dish} for dessert. The price is ${totalPrice}.`
    }
}

// menu.addDishToCourse('mains', 'chicken', '$75')
// console.log(menu._courses.appetizers);
menu.addDishToCourse('appetizers', 'bruchetta', 12)
menu.addDishToCourse('appetizers', 'street tacos', 14)
menu.addDishToCourse('appetizers', 'chicken noodle soup', 8)
menu.addDishToCourse('mains', 'roast duck', 35)
menu.addDishToCourse('mains', 'chicken alfredo', 17)
menu.addDishToCourse('mains', 'pot roast', 23)
menu.addDishToCourse('desserts', 'chocolate mousse', 8)
menu.addDishToCourse('desserts', 'creme buele', 9)
menu.addDishToCourse('desserts', 'layered chocolate cake', 8)
meal = menu.generateRandomMeal();
console.log(meal);