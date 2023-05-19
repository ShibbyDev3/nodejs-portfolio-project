const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({

}, {timestamps: true});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('users', userSchema);