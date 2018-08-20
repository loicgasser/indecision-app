class Person {
    constructor(firstname = 'Anonymous', lastname = 'Anonymous', age = 0) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
    getGreeting() {
        return `Hello Sir ${this.firstname}!`
    }
    getDescription() {
        return `${this.firstname} ${this.lastname} is ${this.age} old.`
    }
}

const p1 = new Person('John', 'Marco', 33)
console.log(p1.getDescription())


class Student extends Person {
    constructor(firstname, lastname, age, major) {
        super(firstname, lastname, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description
    }
}

const p2 = new Student('Harry', 'Blunt', 11, 'Geometry')
console.log(p2.getDescription())


class Traveler extends Person {
    constructor(firstname, lastname, age, home) {
        super(firstname, lastname, age)
        this.home = home
    }
    hasHome() {
        return !!this.home
    }
    getGreeting() {
        let greeting = super.getGreeting()
        if (this.hasHome()) {
            greeting += ` I am from ${this.home}`
        }
        return greeting
    }
}

const p3 = new Traveler('Jack', 'Black', 42, 'Hell')
console.log(p3.getGreeting())