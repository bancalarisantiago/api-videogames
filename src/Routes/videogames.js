const express = require("express");
const router = express.Router();

const { Videogame } = require("../db");
const { fetchGames, findByName, findGameById } = require("../Helpers/index");

router.get("", async function (req, res, next) {
  const { name } = req.query;
  if (name) {
    try {
      const gamesByName = await findByName(name);

      gamesByName.data.results.length > 15
        ? res.status(200).json(gamesByName.data.results.slice(0, 15))
        : res.status(200).json(gamesByName.data.results);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const games = await fetchGames();
      res.status(200).json(games);
    } catch (error) {
      next(error);
    }
  }
});

router.get("/mygames", async function (req, res, next) {
  try {
    const videogames = await Videogame.findAll({
      attributes: [
        "id",
        "name",
        "description_raw",
        "rating",
        "release",
        "background_image",
        "genres",
        "platforms",
      ],
    });
    res.json(videogames);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async function (req, res, next) {
  var { id } = req.params;

  if (id.length < 8) {
    const gameById = await findGameById(id);
    if (typeof gameById === "string")
      return res.status(400).json({ msg: gameById });

    const {
      name,
      description_raw,
      rating,
      developers,
      release,
      genres,
      background_image,
      platforms,
    } = gameById.data;

    const obj = {
      id: gameById.data.id,
      name,
      description_raw,
      developers,
      release,
      background_image,
      genres,
      platforms,
      rating,
    };
    res.status(200).json(obj);
  } else {
    let game = await Videogame.findByPk(id);
    return res.status(200).json(game);
  }
});

router.post("/", async function (req, res, next) {
  const {
    name,
    description_raw,
    release,
    rating,
    platforms,
    background_image,
    genres,
  } = req.body;

  let genresIds = function (gen) {
    let array = [];
    for (const id of gen) {
      array.push(id.id);
    }
    return array;
  };
  try {
    const game = await Videogame.create({
      name,
      description_raw,
      release,
      rating,
      platforms,
      background_image,
      genres,
    });

    let array = genresIds(genres);

    await game.addGenreDb(array);

    if (game) res.send("The videogame has been succesfully created.");

    return game;
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: error });
  }
});

module.exports = router;
