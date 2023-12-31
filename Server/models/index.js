const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url
db.AllUsers = require('./user.model.js')(mongoose)
db.items = require('./itemModel.js')(mongoose)
db.featuredItems = require('./featuredItems.model.js')(mongoose)
db.cart= require('./cart.model.js')(mongoose)

module.exports = db;