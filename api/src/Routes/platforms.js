var express = require('express');
var router = express.Router();

const { Platform } = require('../db')


router.get('/', async function(req, res, next) {
    const platforms = await Platform.findAll({ attributes: ['name','id', 'img']})
    res.json(platforms)
});


module.exports = router;