const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    showtimes: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: Array,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    cast: {
        type: Array,
        required: true
    },
    trailer: {
        type: String,
        required: true
    },
    nowPlaying: {
        type: Boolean,
        required: true
    },
    nowPlaying: {
        type: String,
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model('movies', movieSchema);