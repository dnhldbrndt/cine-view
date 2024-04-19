/*jshint esversion: 6 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviews = new Schema({
	id: {
    type: Number,
    required: true,
	},
	name: {
    type: String,
    required: true
  },
  movie: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true
  },
  review_date: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('reviews', reviews);
