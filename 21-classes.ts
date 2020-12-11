class Person {
    greet(){}
    constructor(name){
        this.name = name;
        console.log(this.name + "  Constructor");
    }
    static staticMethod(hello){
        console.log("This is static:"+ hello);
    }
    greetPerson(){
        console.log("Hello " + this.name + " from default method");
    }
}

let p1 = new Person("Baylor");
Person.staticMethod("skype");
p1.greetPerson();

let p = new Person();

function starship(){};
starship();
console.log(typeof p);
console.log(typeof Person);
console.log(typeof starship);

console.log( p.greet === Person.prototype.greet);

