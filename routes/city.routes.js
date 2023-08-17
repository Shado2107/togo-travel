const express = require("express");
const { getCity, addCity, editCity, deleteCity, findCity } = require("../controllers/city.controller");

const cityRouter = express.Router();

cityRouter.get("/",getCity)
cityRouter.post("/", addCity)
cityRouter.put("/:id", editCity)
cityRouter.delete("/:id",deleteCity)
cityRouter.get("/:id",findCity)

module.exports = cityRouter