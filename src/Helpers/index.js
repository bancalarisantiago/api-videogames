// - GET https://api.rawg.io/api/games
// - GET https://api.rawg.io/api/games?search=akjsbdjasbdjlsabjdksabjkdbaskd&key=7ff8bbd44f5f4f11813f7c78bf6f7f3d
// - GET https://api.rawg.io/api/genres
// - GET https://api.rawg.io/api/games/11935&key=7ff8bbd44f5f4f11813f7c78bf6f7f3d
//https://api.rawg.io/api/platforms?key=7ff8bbd44f5f4f11813f7c78bf6f7f3d

//https://api.rawg.io/api/genres?key=b657ab292d234da18bd8fa41abd98110
const axios = require('axios');

const { API_KEY, API_URL } = require('../config');

module.exports = {
  fetchGames: async function () {
    try {
      const promisesArray = [];
      for (let page = 1; page <= 5; page++) {
        let allGames = axios.get(
          `${API_URL}/games?page=${page}&key=${API_KEY}`
        );
        promisesArray.push(allGames);
      }

      const videoGames = await Promise.all(promisesArray).then((value) => {
        const arrayGames = value.map((prom) => prom.data.results).flat();
        const arrayObj = arrayGames.map((e) => {
          const obj = {
            id: e.id || null,
            name: e.name || null,
            description: e.description || null,
            releaseDate: e.released || null,
            background_image: e.background_image || null,
            screenshots: e.short_screenshots || null,
            genres: e.genres || null,
            platforms: e.platforms || null,
            rating: e.rating || null,
          };
          return obj;
        });
        return arrayObj;
      });
      return videoGames;
    } catch (error) {
      console.log(error);
      return 'Error fetching all games';
    }
  },

  findByName: async function (name) {
    try {
      const gamesByName = await axios.get(
        `${API_URL}/games?search=${name}&key=${API_KEY}`
      );
      return gamesByName;
    } catch (error) {
      console.log(error);
      return 'Error fetching game by name';
    }
  },

  findGameById: async function (id) {
    try {
      const gameById = await axios.get(`${API_URL}/games/${id}?key=${API_KEY}`);
      return gameById;
    } catch (error) {
      console.log(error);
      return 'Error fetching game by id';
    }
  },

  fetchGenres: async function () {
    try {
      const allGenres = await axios.get(`${API_URL}/genres?key=${API_KEY}`);

      return allGenres;
    } catch (error) {
      console.log(error);
      return 'Error fetching genres';
    }
  },
  fetchPlatforms: async function () {
    try {
      const allPlatforms = await axios.get(
        `${API_URL}/platforms?key=${API_KEY}`
      );
      return allPlatforms;
    } catch (error) {
      console.log(error);
      return 'Error fetching platforms';
    }
  },
};
