# Taller NodeJs y Typescript Grupo2

# Requisitos

### Node && NPM

````
https://nodejs.org/en/download/package-manager/

````

### Visual Studio Code
### Type Script

````
npm i typescript -g
````
### Nodemon

Es una herramienta que ayuda a desarrollar aplicaciones basadas en node.js al reiniciar automáticamente la aplicación de nodo cuando se detectan cambios en el directorio.

````
npm i nodemon -d
````
### Concurrently

Ejecuta multiples comandos al mismo tiempo

````
npm i concurrently -d
````

### Express

Infraestructura web rápida, minimalista y flexible para Node.js

````
npm i express -d
````
### Types

Paquetes para utilizar los paquetes de nodejs en typescript.

# Sintaxis Básica 

## Declaración de Variables

````
Se puede definir con la palabra reservada 'var' o 'let', la diferencia es que let define un scope.

````
* Ejemplo:
````ts
var x = 100; //X es de tipo number
let x : number | string = 10; //X puede ser un numero o una cadena
````

## Clases 

````ts
class MiClase {
  atributo1:string; //Atributo publico
  private attributo2 : number; //Atributo privado

  constructor(nombre:string, atributo2:number){
    this.nombre = nombre;
    this.atributo2 = atributo2;
  }

  //Metodo privado
  private func(){
      console.log("Privado");
  }

  //Metodo privado que retorna un numero
  public func2() : number{ 
      return 10;
  }
}

let instancia : MiClase = new MiClase("Erik",10);

````
## Interfaces 

```` ts
interface Dimension{
    width : number,
    height : number,
    getWidth() : number,
    area() : number;
}

let cuadrado : Dimension = {
    width : 10, 
    height : 100, 
    getWidth : function(){return this.width;}, 
    area : function(){ return this.width * this.height; } 
};

````

## Herencia

````ts
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

let emp : Person = new Employee("Erik",100);
emp.display();

let emp2 : Person = emp.find('Gerardo')
emp2.display();

````
# Socket.io

Socket.IO es una biblioteca de JavaScript para aplicaciones web en tiempo real. Permite la comunicación bidireccional en tiempo real entre clientes y servidores web.

````
npm i @types/socket.io socket.io -d
````
