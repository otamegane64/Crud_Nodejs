const conexion = require('../connection/db');

//Guardar registros
exports.save = (req,res)=>{
    const nombre = req.body.nombre;
    const puesto = req.body.puesto;
    
    conexion.query('Insert into empleados set ?', {Nombre:nombre, Puesto:puesto},
        (error,result)=>{
            if(error)
                console.log(error);
            else
            res.redirect('/');

    }
    );

};
//Editar registro
exports.edit = (req,res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const puesto = req.body.puesto;
    conexion.query('update empleados set ? where ID =?',[{Nombre:nombre, Puesto:puesto},id],
        (error, result)=>{
            if(error)
                console.log(error);
            else
            res.redirect('/');
        });
};