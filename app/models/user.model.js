const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	user_fname : String,
	user_lname : String,
	user_email : String,
	user_mobile : Number,
	user_address: String,
	user_city: String,
	user_state: String,
	user_country: String,
	user_zipcode: Number

}, {
	 timestamps: true
});

module.exports = mongoose.model('User', UserSchema);