// const express = require("express");
// const router = express.Router();
// router.use(express.json());
// router.use(express.urlencoded({ extended: true }));
// router.get("/organizations", (req, res) => {
        
// });

module.exports = app => {
	const organizations = require("../controllers/organizations.js");
	const router = require("express").Router();

	// Create a new Organization
	router.post("/", organizations.create);
	// Retrieve all Organizations
	router.get("/", organizations.findAll);
	
	app.use("/api/organizations", router);
};

