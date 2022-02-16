var express = require('express');
var router = express.Router();

const { GenreDb } = require('../db')


router.get('/', async function(req, res, next) {
      
const genres = await GenreDb.findAll({ attributes: ['name','id']})
      res.json(genres)
});


module.exports = router;