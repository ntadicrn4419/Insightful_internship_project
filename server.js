const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
	origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
	res.json({ message: "Welcome to Autolabeling backend API." });
});
// set port, listen for requests
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8080;

require("./endpoints/organizations.js")(app);
require("./endpoints/apps.js")(app);
require("./endpoints/apporgs.js")(app);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});


const mongoose = require("mongoose");
const config = require("./config.js");

mongoose.Promise = global.Promise;
mongoose.connect(config.url, {}).then(() => {
	console.log("successfully connected to the database");
}).catch(err => {
	console.log(err.message);
	console.log("error connecting to the database");
	// eslint-disable-next-line no-undef
	process.exit();
});


"use strict";

const { Client } = require("@elastic/elasticsearch");
// eslint-disable-next-line no-unused-vars
const client = new Client({
	node: "http://localhost:9200"
});