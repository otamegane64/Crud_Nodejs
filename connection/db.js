const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'personal'
});

conexion.connect((error)=>{
    if(error){
        console.error('Error de conexion: '+ error);
        return
    }
    console.log('Se conecto a la base de datos');
});

module.exports = conexion;