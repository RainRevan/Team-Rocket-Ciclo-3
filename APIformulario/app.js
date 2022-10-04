const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
// Uso del paquete Pg
const { Client } = require('pg');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hola mundo!");
});

app.get("/usuarios", (req, res) => {
    // conexio desde Heroku
    const connectionString = 'postgres://vgullytuuvytyz:8801e4f105c7e15e4b71c5fab86145f89e879f8e597aa661bd9b0f9e32d2353f@ec2-52-207-15-147.compute-1.amazonaws.com:5432/dboifi9jihrmdj'
    // Configuracion de conexion
    const connectionData = {
        connectionString: connectionString,
        ssl: { rejectUnauthorized: false }
    };

    const client = new Client(connectionData);
    client.connect();
    // Querys
    //Obtener información
    client.query('SELECT * FROM public."Usuario"')
        .then(response => {
            console.log(response.rows)
            client.end()
        })
        .catch(err => {
            console.log(err);
            client.end()
        });

});

app.listen(port, () =>
    console.log('Example app listening at http://localhost:${port}')
);