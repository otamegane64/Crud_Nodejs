const express = require('express');
const app = express();

//Plantillas
app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/',require('./router'));

app.listen(5000,()=> {
    console.log('Servidor corriendo en http://localhost:5000');
});