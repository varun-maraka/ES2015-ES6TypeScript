class Person1{
    constructor(name){
        console.log(name + "Person constructor");
    }
    getId(){
        return 20;
    }
}

class Employee extends Person1{
    constructor(name){
        super(name);
        console.log(name + "Employee constructor");
    }
    getId(){
        return super.getId() + 2;
    }
}
let e = new Employee("Chandler");
console.log(e.getId());