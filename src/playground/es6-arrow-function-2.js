
// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55, 1, 1001))

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesOldTrick: function () {
        var that = this;
        this.cities.forEach(function (city) {
            return that.name + 'has lived in ' + city
        })
    },
    printPlacesLivedOld: function () {
        this.cities.forEach((city) => {
            console.log(this.name + 'has lived in ' + city)
        })
    },
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}
console.log(user.printPlacesLived())

// Challenge area, map changes the values

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())
console.log('bound number are not changed permanetly of course')
console.log(multiplier.numbers)