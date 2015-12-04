var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserModel = new Schema({
    username: String,
    password: String
});

UserModel.plugin(passportLocalMongoose);

module.exports = mongoose.model('UserModel', UserModel);
