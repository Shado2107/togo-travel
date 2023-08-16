const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000
const connectDB = require('./config/db')


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

//Connection a la bas e de données
connectDB();

//Lancer le server
app.listen(port, () => console.log('le serveur est en marche'))
