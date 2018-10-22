class Person {
    firstName: string;
    lastName: string;

    sayHello(){
        console.log('Hello', this.firstName)
    }

    sayHelloToFullName(){
        console.log('Hello', this.firstName, this.lastName)
    }
}

let kenn: Person = new Person()

kenn.firstName = 'Kenn'
kenn.sayHello()

let practice: Person = new Person()

practice.firstName = 'Sheriff'
practice.lastName = 'Holler'
practice.sayHelloToFullName()




class Options {
    name: string;
    age: number;
    isAwesome: boolean;
    friends: string[]
}

let justin: Options = new Options()

justin.name = 'Justin Weiskittel'
justin.age = 27
justin.isAwesome = true
justin.friends = ['Hope', 'Caleb', 'Austin']






class Game {
    constructor(name: string, maker: string){
        this.gameName = name;
        this.gameMaker = maker
    }
    gameName: string;
    gameMaker: string
}

let battleship: Game = new Game('Battleship', 'Hasbro')








class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number
}

class Automobile extends Vehicle {
    isSelfDriving: boolean
}

let myCar: Automobile = new Automobile()
myCar.isSelfDriving = false
myCar.topSpeed = 200
myCar.make = 'Volvo'

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean
}

let myMotorcycle: Motorcycle = new Motorcycle()
myMotorcycle.easyToDoWheelie = true
myMotorcycle.topSpeed = 180








class Animals {
    isMammal: boolean;
    legCount: number;
    isCarnivore: boolean
}

class Bear extends Animals {
    type: string
}

class Tiger extends Animals {
    type: string
}

let bear: Bear = new Bear()
bear.isMammal = true
bear.legCount = 4
bear.type = 'Brown'

let tiger: Tiger = new Tiger()
tiger.isCarnivore = true
tiger.legCount = 4
tiger.type = 'Snow'





// class Store {
//     constructor(name: string, city: string){
//         this.name = name;
//         this.city = city
//     }
//     name: string
//     city: string
// }

// let ikea: Store = new Store('Ikea', 'Fishers')

class Store {
    constructor(public name: string, public city: string){}
}

let ikea: Store = new Store('Ikea', 'Fishers')





class Employee extends Person {
    private _salary: number

    getSalary(): string {
        return this._salary.toString()
    }

    setSalary(newSalary: number) {
        this._salary = newSalary
    }
}

let newEmployee: Employee = new Employee()
newEmployee.setSalary(30000)
let salaryResult: string = newEmployee.getSalary()
console.log('The salary is:', salaryResult)