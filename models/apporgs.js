const mongoose = require("mongoose");

const apporg = new mongoose.Schema({
	id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	label: {
		type: Number, // enum { 0: Unreviewed, 1: Productive, 2: Unproductive, 3: Neutral}
		required: true
	},
	type: {
		type: String, // enum {site, app}
		required: true
	},
	usage: {
		type: Number, // time in milliseconds
		required: true
	},
	appId: {
		type: String,
		required: true
	},
	organizationId: {
		type: String,
		required: true
	}
});
  
const Apporg = mongoose.model("Apporg", apporg);
    
module.exports = {
	Apporg,
};

