'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')
var path = require('path')

mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`Error al conectar con la base de datos: ${err}`)
    }
    console.log('Conexión a la base de datos wiiii!!')

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    app.listen(config.port, () => {
        console.log(`API HOTELES corriendo en un http://localhost:${config.port}`)
    })
})


// descomentar en caso de no tener base de datos mongo
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

// app.listen(config.port, () => {
//     console.log(`API HOTELES corriendo en un http://localhost:${config.port}`)
// })

