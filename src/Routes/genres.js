var express = require('express');
var router = express.Router();

const { Genre } = require('../db');

router.get('/', async function (req, res, next) {
  const genres = await Genre.findAll({ attributes: ['name', 'id'] });
  res.json(genres);
});

module.exports = router;
