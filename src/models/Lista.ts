import Nodo from "./Abstract/Nodo";

export default class Lista{
    private inicio : Nodo | null;

    constructor(){
        this.inicio = null;
    }

    public insert(data : number) : void{
        if(this.inicio == null)
            this.inicio = new Nodo(data);
        else{
            let temp = this.inicio;
            while(temp.siguiente != null)
                temp = temp.siguiente;
            temp.siguiente = new Nodo(data);
        }
    }

    public print() : void{
        let inicio = this.inicio;
        while(inicio != null){
            inicio.print();
            inicio = inicio.siguiente;
        }
    }
}
