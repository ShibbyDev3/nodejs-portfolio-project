const express = require('express');
const cors = require('./cors');
const Movie = require('../models/movieModel');

const movieRouter = express.Router();

movieRouter.get('/', cors.cors, (req, res) => {
    Movie.find()
    .then(movieItems => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(movieItems);
    })
});
movieRouter.post('/', async (req, res) =>{
    const {id,name,path,poster,price,showtimes,description,genre,director,cast,trailer,nowPlaying,releaseDate} = req.body;
    try{
        const movieFun = await Movie.create({id,name,path,poster,price,showtimes,description,genre,director,cast,trailer,nowPlaying,releaseDate});
        res.status(200).json(movieFun);
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});
movieRouter.put('/', (req, res) =>{});
movieRouter.delete('/', (req, res) =>{});

module.exports = movieRouter;