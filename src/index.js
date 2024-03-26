const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');

const app = express();
const port = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);

//route
app.get('/', (req, res) =>{
    res.send("Bienvenido a mi API")
})

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a mongoDB"))
    .catch((error) => console.error('Ha ocurrido un error con la BD'))


app.listen(port, () => console.log("servidor listo en puerto", port))


