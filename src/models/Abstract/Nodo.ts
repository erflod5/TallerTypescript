export default class Nodo {
    dato : number;
    siguiente : Nodo | null;

    constructor(dato : number = -1, siguiente : Nodo | null = null) {
        this.dato = dato;
        this.siguiente = siguiente;
    }

    public print() : void{
        console.log(this.dato);
    }
}