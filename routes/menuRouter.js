const express = require('express');
const cors = require('./cors');
const Menu = require('../models/menuModel');

const menuRouter = express.Router();

menuRouter.get('/', cors.cors, (req, res) => {
    Menu.find()
    .then(menuItems => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(menuItems);
    })
});
menuRouter.post('/', async (req, res) =>{
    const {id,name,price,description,category} = req.body;
    try{
        const menuFun = await Menu.create({id,name,price,description,category});
        res.status(200).json(menuFun);
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});
menuRouter.put('/', (req, res) =>{});
menuRouter.delete('/', (req, res) =>{});

module.exports = menuRouter;