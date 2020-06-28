
const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://3.22.233.244:27017';

const mainDao = require('../models/main-dao')

router.get('/', (req, res) => {
    const main = mainDao.findAll((result) => {
        res.json(result);
    });

});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const result = mainDao.delete(id, (result) => {
        res.json(result);
    });

});


router.post('/', (req, res) => {
    const main = req.body;
    const result = mainDao.create(main, (result => {
        res.json(result);
    }));

});

// router.put('/:id', (req, res) => {
//     const id = req.params.id;
//     const main = req.body.main;
//     const result = mainDao.update(id, main);
//     res.json(result);
// });



module.exports = router;