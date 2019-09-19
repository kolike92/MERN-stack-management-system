var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    fname: String,
    lname: String,
    sex: String,
	age: Number,
    password: String
});

module.exports = mongoose.model('User', UserSchema);
