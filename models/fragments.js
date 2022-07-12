const mongoose = require('mongoose');

const fragment = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String, // enum {site, app}
        required: true
    },
    start: {
        type: String, // time in milliseconds
        required: true
    },
    end: {
        type: String, // time in milliseconds
        required: true
    },
 });
  
 const Fragment = mongoose.model('Fragment', fragment);

