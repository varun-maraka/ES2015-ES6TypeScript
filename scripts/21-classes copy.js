var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        console.log(this.name + "  Constructor");
    }
    Person.prototype.greet = function () { };
    Person.staticMethod = function (hello) {
        console.log("This is static:" + hello);
    };
    Person.prototype.greetPerson = function () {
        console.log("Hello " + this.name + " from default method");
    };
    return Person;
}());
var p1 = new Person("Baylor");
Person.staticMethod("skype");
p1.greetPerson();
var p = new Person();
function starship() { }
;
starship();
console.log(typeof p);
console.log(typeof Person);
console.log(typeof starship);
console.log(p.greet === Person.prototype.greet);
//# sourceMappingURL=21-classes%20copy.js.map