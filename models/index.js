const dbConfig = require("../config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
const {Organization} = require("./organizations");
const {App} = require("./apps");
const {Apporg} = require("./apporgs");

const esClient = dbConfig.esClient;

module.exports = {
	Organization,
	App,
	Apporg,
	db,
	esClient
};
