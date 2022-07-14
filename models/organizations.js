module.exports = mongoose => {
	const Organization = mongoose.model(
		"organization",
		mongoose.Schema(
			{
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
			}
		)
	);
	return Organization;
};
//-------------------------------------------------------------------

// const mongoose = require("mongoose");

// const organization = new mongoose.Schema({
// 	id: {
// 		type: String,
// 		required: true
// 	},
// 	industry: {
// 		type: String,
// 		required: false
// 	},
// 	size: {
// 		type: String,
// 		required: true
// 	}
// });
  
// const Organization = mongoose.model("Organization", organization);
    
// module.exports = {
// 	Organization,
// };


