const express = require("express");
const { getAttraction, addAttraction, editAttraction, deleteAttraction } = require("../controllers/attractions.controller");

const attRouter = express.Router();

attRouter.get("/", getAttraction)
attRouter.post("/", addAttraction)
attRouter.put("/", editAttraction)
attRouter.delete("/", deleteAttraction)

module.exports= attRouter