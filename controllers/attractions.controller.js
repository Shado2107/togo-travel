const AttractionModel = require('../models/attractions.model')


module.exports.getAttraction = async(req, res) => {
    const attraction = await AttractionModel.find({}).populate('city', 'name');

    res.status(200).json({succes: true, attration: attraction })
}

module.exports.addAttraction = async(req, res) => {
    try{
        const {city, name, category, description} = req.body;

        if(!city){
            return res.status(400).json({success: false, message: "veuiller ajouter la ville de l\'attraction"})
        }

        const newAttraction = await new AttractionModel({
            city,
            name,
            category,
            description
        });

        const savedAttraction = await newAttraction.save();
        res.status(201).json({success: true, message: "attraction sauvegardé avec sucess", savedAttraction})

    } catch(err){
        res.staus(500).json({succes: false, message:"Une erreur est surevenue"})
    }
}

module.exports.editAttraction = async(req, res) => {
    
}

module.exports.deleteAttraction = async(req, res) => {
    
}