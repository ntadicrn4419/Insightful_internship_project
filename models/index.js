const dbConfig = require("../config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.organizations = require("./organizations.js")(mongoose);
db.apps = require("./apps.js")(mongoose);
db.apporgs = require("./apporgs.js")(mongoose);
module.exports = db;
