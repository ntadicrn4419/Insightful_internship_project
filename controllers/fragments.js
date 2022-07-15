// const db = require("../models/index.js");
// const esClient = db.esClient;

const {esClient} = require("../models/index");

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
	if (!req.body.type) {
		res.status(400).send({ message: "Type can not be empty!" });
		return;
	}
	if (!req.body.start) {
		res.status(400).send({ message: "Start can not be empty!" });
		return;
	}
	if (!req.body.end) {
		res.status(400).send({ message: "End can not be empty!" });
		return;
	}
	if (!req.body.organizationId) {
		res.status(400).send({ message: "OrganizationId can not be empty!" });
		return;
	}

	esClient.index({
		index: "fragments",
		body: {
			"id": req.body.id, //string
			"name": req.body.name, //string
			"type": req.body.type, //string
			"start": req.body.start, //number
			"end": req.body.end, //number
			"organizationId": req.body.organizationId //string
		}
	})
		// eslint-disable-next-line no-unused-vars
		.then(response => {
			return res.json({"message": "Indexing successful"});
		})
	// eslint-disable-next-line no-unused-vars
		.catch(err => {
			return res.status(500).json({"message": "Error"});
		});
};

