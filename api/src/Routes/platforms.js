const express = require('express');
const router = express.Router();

const { Platform } = require('../Models/Platforms')


router.get('/', async function(req, res, next) {
    const platforms = await Platform.findAll({ attributes: ['name','id', 'img']})
    res.json(platforms)
});


module.exports = router;