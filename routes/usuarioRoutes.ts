import express from 'express';

const router = express.Router();

router.get('/',function(req, res){
    res.send('Hola a la pagina principal desde el archivo de ruta de usuario')
})

router.get('/ruta',function(req, res){
    res.send('Hola a la nueva ruta agregada desde el archivo de ruta de usuario')
})

export default router