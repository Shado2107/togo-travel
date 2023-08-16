const express = require("express");
const { getCity, addCity, editCity, deleteCity } = require("../controllers/city.controller");

const cityRouter = express.Router();

cityRouter.get("/",getCity)
cityRouter.post("/", addCity)
cityRouter.put("/", editCity)
cityRouter.delete("/",deleteCity)

module.exports = cityRouter