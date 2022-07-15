const {App} = require("../models/index.js");

exports.create = (req, res) => {
	// Validate request
	if (!req.body.id) {
		res.status(400).send({ message: "Id can not be empty!" });
		return;
	}
	if (!req.body.name) {
		res.status(400).send({ message: "Name can not be empty!" });
		return;
	}
	if (!req.body.usage) {
		res.status(400).send({ message: "Usage can not be empty!" });
		return;
	}
	// Create an App
	const app = new App({
		id: req.body.id,
		name: req.body.name,
		usage: req.body.usage
	});
	// Save App in the database
	app
		.save()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
            err.message || "Some error occurred while creating the App."
			});
		});
};

exports.findAll = (req, res) => {
	App.find()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
            err.message || "Some error occurred while retrieving apps."
			});
		});
};