const express = require('express');
const router = express.Router();
const conexion = require('./connection/db');
const crud = require('./controllers/crud');
//Mostrar los registros
router.get('/',(req,res)=>{  
conexion.query('select * from empleados',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('ini',{results:results});
        }
    });
});
//Crear Registros
router.get('/create',(req,res)=>{
    res.render('create');

});
//Editar registros
router.get('/edit/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('select * from empleados where id=?',[id],(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit',{empleado:results[0]});
        }

    });
});

router.get('/delete/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('delete from empleados where id = ?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    });
});

//Guardar registros
router.post('/save', crud.save);
//Actualizar registro
router.post('/update',crud.edit);

module.exports = router;