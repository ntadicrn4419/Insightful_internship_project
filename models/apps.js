module.exports = mongoose => {
	// const Usage = mongoose.model(
	// 	"usage",
	// 	mongoose.Schema(
	// 		{
	// 			productive: {
	// 				type:Number, //time in milliseconds
	// 				required: true
	// 			},
	// 			unproductive: {
	// 				type:Number, //time in milliseconds
	// 				required: true
	// 			},
	// 			neutral: {
	// 				type:Number, //time in milliseconds
	// 				required: true
	// 			}
	// 		}
	// 	)
	// );
	const App = mongoose.model(
		"app",
		mongoose.Schema(
			{
				id: {
					type: String,
					required: true
				},
				name: {
					type: String,
					required: true
				},
				usage: {
					required: true,
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
					}
				}
			}
		)
	);
	return App;
};




  