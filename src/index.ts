import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import socket from 'socket.io';

//Importar Rutas
import IndexRoutes from './routes/indexRoutes';

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
    console.log('Esto funcion');
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