const express = require('express');
const Test = require('../models/testModel');

const testRouter = express.Router();

testRouter.get('/', (req, res) => {
    res.json({mssg: 'test page connected'});
});
testRouter.post('/', async (req, res) =>{
    const {test} = req.body;
    try{
        const testFun = await Test.create({test});
        res.status(200).json(testFun);
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});
testRouter.put('/', (req, res) =>{});
testRouter.delete('/', (req, res) =>{});

module.exports = testRouter;