module.exports = app => {
	const apps = require("../controllers/apps.js");
	const router = require("express").Router();

	// Create a new App
	router.post("/", apps.create);
	// Retrieve all Apps
	router.get("/", apps.findAll);
	
	app.use("/api/apps", router);
};
