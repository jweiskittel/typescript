var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log('Hello', this.firstName);
    };
    Person.prototype.sayHelloToFullName = function () {
        console.log('Hello', this.firstName, this.lastName);
    };
    return Person;
}());
var kenn = new Person();
kenn.firstName = 'Kenn';
kenn.sayHello();
var practice = new Person();
practice.firstName = 'Sheriff';
practice.lastName = 'Holler';
practice.sayHelloToFullName();
var Options = /** @class */ (function () {
    function Options() {
    }
    return Options;
}());
var justin = new Options();
justin.name = 'Justin Weiskittel';
justin.age = 27;
justin.isAwesome = true;
justin.friends = ['Hope', 'Caleb', 'Austin'];
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro');
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = 'Volvo';
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;
var Animals = /** @class */ (function () {
    function Animals() {
    }
    return Animals;
}());
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bear;
}(Animals));
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tiger;
}(Animals));
var bear = new Bear();
bear.isMammal = true;
bear.legCount = 4;
bear.type = 'Brown';
var tiger = new Tiger();
tiger.isCarnivore = true;
tiger.legCount = 4;
tiger.type = 'Snow';
// class Store {
//     constructor(name: string, city: string){
//         this.name = name;
//         this.city = city
//     }
//     name: string
//     city: string
// }
// let ikea: Store = new Store('Ikea', 'Fishers')
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
var salaryResult = newEmployee.getSalary();
console.log('The salary is:', salaryResult);
//# sourceMappingURL=4-classes.js.map