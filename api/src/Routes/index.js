const { Router } = require('express');
var express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//Routers
const videogamesRouter  = require('./videogames')
const genresRouter  = require('./genres')
const platformsRouter = require('./platforms')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use(express.json())
router.use('/videogames',videogamesRouter)
router.use('/genres',genresRouter)
router.use('/platforms',platformsRouter)


module.exports = router;
