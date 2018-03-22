let express = require('express');
let mongoose = require('mongoose');


let userSchema = mongoose.Schema({
    Fullname      : { type: String },
    Gender        : { type: String },
    Email         : { type: String, unique: true },
    Phone         : { type: String },
    Nationality   : { type: String }
});

let Data = module.exports = mongoose.model('GreenWayMember', userSchema);
