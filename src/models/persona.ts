class Persona{
    private name : string;
    private age : number;

    constructor(name : string, age : number = 10){
        this.name = name;
        this.age = age;
    }

    public setName(name : string){
        this.name = name;
    }

    public setAge(age : number){
        this.age = age;
    }

    public getAge(){
        return this.age;
    }

    public getName(){
        return this.name;
    }

    private metodoPrivado(){
        console.log("Metodo privado");
        console.log(`Nombre: ${this.name} Edad: ${this.age}`)
    }

    public metodoPublico(){
        console.log("Metodo publico");
        this.metodoPrivado();
    }
}

export default Persona;