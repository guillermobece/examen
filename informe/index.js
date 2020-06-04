//importaciones
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//Definimos el puerto
const port = process.env.PORT || 3000;

let pintoresRouter = require('./rutas/pintor');


// sitio web y hbs
const app= express();
app.set('view','hbs')
hbs.registerPartials(directory:__dirname + '/views partials');
app.use(express.static(__dirname + '/public'));

app.use('/, pintoresRoutesr')
//conexion con mongo
mongooser.promise = global.promise;
const cadena = "mongodb+srv://guille.beav@gmail.com:Rasengan@cluster0-gft74.mongodb.net/test?retryWrites=true&w=majority"
mongooser.connect(cadena,{useNewUrLParser: true,useUnifiedTopology: true })
.then(()=>{
    console.log('conexion establescida ')
}).caatch(err=> console.log(err));

app.listen(PUERTO,()=>{
    console.log('escuchando el puerto')
})