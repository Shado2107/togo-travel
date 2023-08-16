const mongoose = require("mongoose");


const citySchema = new mongoose.Schema(
  {
  name: { 
    type: String, 
    required: true
   },
  country: { 
    type: String 
  },
  description: { 
    type: String 
  },
  photos: [{ type: String }], // Array of photo URLs
}, 
{
  timestamps: true
}
);

const City = mongoose.model('City', citySchema);

module.exports = City;
