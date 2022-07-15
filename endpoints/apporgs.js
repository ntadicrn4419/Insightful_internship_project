module.exports = app => {
	const apporgs = require("../controllers/apporgs");
	const router = require("express").Router();
	const {catchAsyncErr} = require("./lib");

	// Create a new Apporg
	router.post("/", catchAsyncErr(apporgs.create));
	// Retrieve all Apporgs
	router.get("/", catchAsyncErr(apporgs.findAll));
	
	app.use("/api/apporgs", router);
};
