abstract class Person {
    name : string;

    constructor(name : string) {
        this.name = name;
    }

    display() : void{
        console.log(this.name);
    }

    abstract find(name : string) : Person;
}

class Employee extends Person{
    
    empCode : number;

    constructor(name : string, code : number = 1){
        super(name);
        this.empCode = code;
    }
    
    find(name: string): Person {
        return new Employee(name);
    }
}

export {Person, Employee};