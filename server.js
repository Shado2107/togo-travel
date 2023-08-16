const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const cityroutes = require('./routes/city.routes')
const attractionroutes = require('./routes/attractions.routes')
const cors = require('cors')
const helmet = require('helmet');


const app = express();

//Les middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(helmet.hidePoweredBy());
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200 ,
    methods: "GET,POST, PUT"
}))


//les routes de l'api
app.use('/api/v1/city', cityroutes)
app.use('/api/v1/attraction', attractionroutes)


//Connection a la bas e de données
connectDB();

//Lancer le server
app.listen(port, () => console.log('le serveur est en marche'))
