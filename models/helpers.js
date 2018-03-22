
const mongoose = require('mongoose');

const Data = require('../models/model');


module.exports.checkUserExit = function (email, callback) {
    let query = { Email: email };
    Data.findOne(query, callback);
}

module.exports.addUser = function (newUser, callback) {
    newUser.save(callback);
}