const mongoose = require('mongoose');

const attractionSchema = new mongoose.Schema(
  {
  city: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'City', 
    required: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  category: { 
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

const Attraction = mongoose.model('Attraction', attractionSchema);

module.exports = Attraction;
