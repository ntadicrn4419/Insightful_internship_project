module.exports = app => {
	const organizations = require("../controllers/organizations");
	const router = require("express").Router();
	const {catchAsyncErr} = require("./lib");

	// Create a new Organization
	router.post("/", catchAsyncErr(organizations.create));
	// Retrieve all Organizations
	router.get("/", catchAsyncErr(organizations.findAll));
	
	app.use("/api/organizations", router);
};

