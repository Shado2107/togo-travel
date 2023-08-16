const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000



//Lancer le server
app.listen(port, () => console.log('le serveur est en marche'))
