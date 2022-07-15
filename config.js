const { Client } = require("@elastic/elasticsearch");
const esClient = new Client({
	node: "http://localhost:9200"
});

module.exports = {
	url: "mongodb://localhost:27017/?readPreference=primary&directConnection=true&ssl=false",
	esClient
};

