module.exports = app => {
	const apporgs = require("../controllers/apporgs.js");
	const router = require("express").Router();

	// Create a new Apporg
	router.post("/", apporgs.create);
	// Retrieve all Apporgs
	router.get("/", apporgs.findAll);
	
	app.use("/api/apporgs", router);
};
