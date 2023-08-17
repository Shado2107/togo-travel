const cityModel = require("../models/city.model")

module.exports.getCity = async(req, res) => {
    const city = await cityModel.find({});
    res.status(200).json({success: true, city: city});
}

module.exports.addCity = async(req, res) => {
    try {
        const {name, country, description } = req.body

         // Vérification si le nom de la ville existe déjà
        const existingCity = await cityModel.findOne({ name });

        if (existingCity) {
            return res.status(400).json({success:false, message: 'Le nom de la ville existe déjà.' });
        }

        if(!name || !country || !description) {
            return res.status(400).json({sucess: false, message: "Veuillez remplir toutes les informations"});
        }
            const newCity = await new cityModel({
                name,
                country,
                description
            });

            const savedCity = await newCity.save();

            res.status(201).json({success: true, message: 'Ville ajoutée avec succes', city: savedCity});

    } catch(err){
        res.status(500).json({success: false, message: "Une erreur est survenue lors de l\'ajout de la ville", err})
    }

};



module.exports.editCity = async(req, res) => {
    try {
        const cityID = req.params.id
        const city = await cityModel.findById(cityID)

        if(!city){
            res.status(404).json({success: false, message: "cette ville n\'existe pas "});
        }

        const updateCity = await cityModel.findByIdAndUpdate(
            cityID,
            req.body,
            {new: true}
        );
        res.status(200).json({success: true, message: "Ville modifier avec succes", city: updateCity})


    } catch(err){
        res.status(500).json({success: false, message: "Une erreur est surevenue lors de la modification"})
    }

    
};


module.exports.deleteCity = async(req, res) => {

    try{
        const cityID = req.params.id
        const city = await cityModel.findById(cityID)
    
        if(!city){
            res.status(404).json({success: false, message: "cette ville n\'existe pas "});
        }
    
        await city.remove();
        res.status(200).json({success: true, message: "Ville supprimé avec succes"})

    } catch(err){
        res.status(500).json({success: false, message:"Une erreur est survenue ", err})
    }
    
};


module.exports.findCity = async(req, res) => {
    try  {
        const city = await cityModel.findById(req.params.id);

        if(!city) {
            res.status(404).json({success: false, message: "Ville non trouvée"})
        }

        res.status(200).json({success: true, city: city})

    } catch(err){
        res.status(500).json({success: false, message: "Une erreur est survenue ", err})
    }
};