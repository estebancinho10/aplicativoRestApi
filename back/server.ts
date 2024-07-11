import express from 'express';
import controlRoutes from './routes';
import mariadb from 'mariadb';

const connection = mariadb.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'trabajo backend',
  database: 'trabajo_final',

});


const app = express(),
bodyParser  = require("body-parser"),
methodOverride = require("method-override"),
cors = require("cors")

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors()),

app.use('/app', controlRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
