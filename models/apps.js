const mongoose = require('mongoose');

const app = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    usage: {
        type: Object,
        required: true
    }
 });
  
 const App = mongoose.model('App', app);

//   - usage:
//     - productive: number [required] // time in milliseconds
//     - unproductive: number [required] // time in milliseconds
//     - neutral: number [required] // time in milliseconds