import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index';
import path from 'path'

const app =express();
// settings , en esta seccion se realiza para usar el puerto 4000 o el puerto que nos de el servidor donde alojemos la app
app.set('port',process.env.PORT|| 4000);

/*usamos morgan para ver las peticiones 
    middlewares*/
    app.use(morgan('dev'));
        //configuramos los archivos json
        app.use(express.json());
//routes
app.use('/api',indexRoutes)

//este folder para esta app será usada para almacenar archivos publicos
//el modulo path nos ayuda a devolver la carpeta que se esta buscando el navegador, sirve para obtener la carpeta don de obtendremos la imagen
app.use('/uploads',express.static(path.resolve('uploads')));




export default app;