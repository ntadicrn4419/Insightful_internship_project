const mongoose = require('mongoose');

const organization = new Schema({
    id: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: false
    },
    size: {
        type: String,
        required: true
    }
 });
  
 const Organization = mongoose.model('Organization', organization);
    
 module.exports = {
    Organization,
 }

