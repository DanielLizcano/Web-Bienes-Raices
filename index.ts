import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes';

// Crear la app
const app = express();

// Routing
app.use('/',usuarioRoutes)


const port = 3000;

// Definir un puerto y arrancar la app
app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`)
});