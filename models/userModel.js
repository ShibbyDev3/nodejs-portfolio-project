const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    points:{
        type: Number,
        default: 0,
        required: false
    }
}, {timestamps: true});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('users', userSchema);