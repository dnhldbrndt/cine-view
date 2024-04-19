/*jshint esversion: 6 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movies = new Schema({
	id: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true
  },
  year: {
    type: Number,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  minutes: {
    type: String,
    required: true
  },
  poster: {
    type: String,
  } 
});

module.exports = mongoose.model('movies', movies);
