import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import socket from 'socket.io';

//Importar Rutas
import IndexRoutes from './routes/indexRoutes';

//Importar Clases
import Persona from './models/persona';
import Lista from './models/Lista';
import {Person, Employee} from './models/Abstract/abstract';

//Inicializaciones
const app = express();

//Configuraciones
app.set('port',3000 || process.env.PORT);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Rutas
app.use(IndexRoutes);

//Static
app.use(express.static(path.join(__dirname, 'public')));

//Server
var server = app.listen(app.get('port'),()=>{
    console.log('Servidor NodeJs en puerto ' + app.get('port'));
});

var io = socket(server);
io.on('connection',(socket)=>{
    console.log('made socket connection',socket.id);

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    });
});


//Funciones
function suma(a : number, b : number) : number{
    return a + b;
}

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
