const cityModel = require("../models/city.model")

module.exports.getCity = async(req, res) => {
    const city = await cityModel.find({});
    res.status(200).json({"success": true, city});
}

module.exports.addCity = async(req, res) => {
    

}

module.exports.editCity = async(req, res) => {
    
}

module.exports.deleteCity = async(req, res) => {
    
}