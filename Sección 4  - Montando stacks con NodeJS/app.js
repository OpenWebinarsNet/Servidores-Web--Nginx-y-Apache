// app.js
//Aplicacion en Node.js de prueba para servidores Apache2 y Nginx
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, esto es un ejemplo de App de Node.js funcionando en un servidor web');
});

app.listen(port, () => {
  console.log(`El ejemplo de la App esta escuchado por el puerto http://localhost:${port}`);
});
