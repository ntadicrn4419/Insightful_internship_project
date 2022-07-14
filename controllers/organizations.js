const db = require("../models/index.js");
const Organization = db.organizations;

exports.create = (req, res) => {
	// Validate request
	if (!req.body.id) {
		res.status(400).send({ message: "Id can not be empty!" });
		return;
	}
	if (!req.body.size) {
		res.status(400).send({ message: "Size can not be empty!" });
		return;
	}
	// Create a Organization
	const organization = new Organization({
		id: req.body.id,
		industry: req.body.industry,
		size: req.body.size
	});
	// Save Organization in the database
	organization
		.save()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
            err.message || "Some error occurred while creating the Organization."
			});
		});
};

exports.findAll = (req, res) => {
	Organization.find()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
            err.message || "Some error occurred while retrieving organizations."
			});
		});
};