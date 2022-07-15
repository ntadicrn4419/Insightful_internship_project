module.exports = app => {
	const organizations = require("../controllers/organizations");
	const router = require("express").Router();

	// Create a new Organization
	router.post("/", organizations.create);
	// Retrieve all Organizations
	router.get("/", organizations.findAll);
	
	app.use("/api/organizations", router);
};

