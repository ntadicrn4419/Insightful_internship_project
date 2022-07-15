const mongoose = require("mongoose");

const usage = new mongoose.Schema({
	productive: {
		type:Number, //time in milliseconds
		required: true
	},
	unproductive: {
		type:Number, //time in milliseconds
		required: true
	},
	neutral: {
		type:Number, //time in milliseconds
		required: true
	}
});

// eslint-disable-next-line no-unused-vars
const Usage = mongoose.model("Usage", usage);

const app = new mongoose.Schema({
	id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	usage: {
		//type: Usage,
		type:{
			productive: {
				type:Number, //time in milliseconds
				required: true
			},
			unproductive: {
				type:Number, //time in milliseconds
				required: true
			},
			neutral: {
				type:Number, //time in milliseconds
				required: true
			}
		},
		required: true
	}
});
  
const App = mongoose.model("App", app);
    
module.exports = {
	App,
};




  