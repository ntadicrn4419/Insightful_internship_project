module.exports = app => {
	const apps = require("../controllers/apps");
	const router = require("express").Router();
	const {catchAsyncErr} = require("./lib");

	// Create a new App
	router.post("/", catchAsyncErr(apps.create));
	// Retrieve all Apps
	router.get("/", catchAsyncErr(apps.findAll));
	
	app.use("/api/apps", router);
};
