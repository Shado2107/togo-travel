const AttractionModel = require('../models/attractions.model')


module.exports.getAttraction = async(req, res) => {
    const attraction = await AttractionModel.find({}).populate('city', 'name');

    res.status(200).json({succes: true, attration: attraction })
}

module.exports.addAttraction = async(req, res) => {
    try{
        const {city, name, category, description, photos} = req.body;

        if(!city){
            return res.status(400).json({success: false, message: "veuiller ajouter la ville de l\'attraction"})
        }

        const newAttraction = await new AttractionModel({
            city,
            name,
            category,
            description,
            photos
        });

        const savedAttraction = await newAttraction.save();
        res.status(201).json({success: true, message: "attraction sauvegardé avec sucess", savedAttraction})

    } catch(err){
        res.status(500).json({succes: false, message:"Une erreur est survenue"})
    }
}

module.exports.editAttraction = async(req, res) => {
    
}

module.exports.deleteAttraction = async(req, res) => {
    try {
        const attractionId = req.params.description
        const attraction = await AttractionModel.findById(attractionId)

        if(!attraction){
            res.status(404).json({success: false, message: "Attraction non trouvée"})
        }

        await attraction.remove();
        res.status(200).json({success: true, message: "Attraction supprimé avec succes"})

    } catch(err){
        res.status(500).json({succes: false, message:"Une erreur est survenue"})
    }
};


module.exports.findAttraction = async(req, res) => {
    try{
        const attractionId = req.params.description
        const attraction = await AttractionModel.findById(attractionId).populate('city', 'name')

        if(!attraction){
            res.status(404).json({success: false, message: "Attraction non trouvée"})
        }

        
        res.status(200).json({succes: true, attration: attraction })

    } catch(err){
        res.status(500).json({succes: false, message:"Une erreur est survenue"})
    }
};