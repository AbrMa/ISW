const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../DiabeticOS')));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`[Frontend corriendo en el puerto ${PORT}]`);
    console.log(`[Para acceder a la aplicación entra a la siguiente dirección http://localhost:3000/index.html]`);
});