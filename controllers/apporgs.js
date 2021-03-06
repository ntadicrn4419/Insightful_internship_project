const {Apporg} = require("../models/index");

exports.create = async (req, res) => {
	// Validate request
	if (!req.body.id) {
		res.status(400).send({ message: "Id can not be empty!" });
		return;
	}
	if (!req.body.name) {
		res.status(400).send({ message: "Name can not be empty!" });
		return;
	}
	if (!req.body.label) {
		res.status(400).send({ message: "Label can not be empty!" });
		return;
	}
	if (!req.body.type) {
		res.status(400).send({ message: "Type can not be empty!" });
		return;
	}
	if (!req.body.usage) {
		res.status(400).send({ message: "Usage can not be empty!" });
		return;
	}
	if (!req.body.appId) {
		res.status(400).send({ message: "AppId can not be empty!" });
		return;
	}
	if (!req.body.organizationId) {
		res.status(400).send({ message: "OrganizationId can not be empty!" });
		return;
	}
	// Create an Apporg
	const apporg = await new Apporg({
		id: req.body.id,
		name: req.body.name,
		label: req.body.label,
		type: req.body.type,
		usage: req.body.usage,
		appId: req.body.appId,
		organizationId: req.body.organizationId
    
	});
	apporg.save();
	return res.status(201).send({message:"success"});
	// Save Apporg in the database
	// apporg
	// 	.save()
	// 	.then(data => {
	// 		res.send(data);
	// 	})
	// 	.catch(err => {
	// 		res.status(500).send({
	// 			message:
	//         err.message || "Some error occurred while creating the Apporg."
	// 		});
	// 	});
};

// eslint-disable-next-line no-unused-vars
exports.findAll = (req, res) => {
	Apporg.find()
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
