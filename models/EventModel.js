var mongoose = require('mongoose');

module.exports = mongoose.model('Event',{
	nom: String,
	description: String,
	description_admin: String,
	statut: Number,
  longitude: Number,
  latitude: Number,
  date: Date,
	ip: String
});
