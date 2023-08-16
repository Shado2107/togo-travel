const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const cityroutes = require('./routes/city.routes')
const attractionroutes = require('./routes/attractions.routes')


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))


//les routes de l'api
app.use('/api/city', cityroutes)
app.use('/api/attration', attractionroutes)


//Connection a la bas e de données
connectDB();

//Lancer le server
app.listen(port, () => console.log('le serveur est en marche'))
