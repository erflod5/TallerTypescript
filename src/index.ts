//Importar Clases
import Persona from './models/persona';
import Lista from './models/Lista';
import {Person, Employee} from './models/Abstract/abstract';

//Funciones
function suma(a : number, b : number) : number{
    return a + b;
}

let x : number | string = 10;
x = "hola";

//Callback
let result = function operar2(a : number, b : number, f : (c : number, d : number) => number) : number{
    return f(a,b);
}

console.log(result(2,2,suma));

//Arreglos
let months : Array<string> = ["Jan","Feb","March"];
months.push("April");
console.log(months);

//Interfaces
interface Dimension{
    width : number,
    height : number,
    getWidth() : number,
    area() : number;
}

let cuadrado : Dimension = {width : 10, height : 100, getWidth : function(){return this.width;}, area : function(){ return this.width * this.height; } };

class Shapes implements Dimension{
    width : number;
    height : number;

    constructor(width : number, height : number){
        this.width = width;
        this.height = height;
    }

    getWidth(){
        return this.width;
    }

    area(){
        return this.width * this.height;
    }
}

let shape = new Shapes(10,10);
console.log(shape.area());

//Uso de Typescript
let p = new Persona("Erik");
let p1 = new Persona("Gerardo",22);
p.metodoPublico();
p1.metodoPublico();

//EDD
let lista = new Lista();
lista.insert(1);
lista.insert(2);
lista.insert(3);
lista.print();

//Abstract class
let emp : Person = new Employee("Erik",100);
emp.display();
let emp2 : Person = emp.find('Gerardo')
emp2.display();