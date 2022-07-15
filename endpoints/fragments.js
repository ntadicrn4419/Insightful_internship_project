module.exports = app => {
	const fragments = require("../controllers/fragments");
	const router = require("express").Router();
	// Create a new Fragment and write it to Elastic 
	router.post("/", fragments.create);
	app.use("/api/fragments", router);
};