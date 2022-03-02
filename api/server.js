const server = require('./src/Config/app.js');
const { fetchGenres , fetchPlatforms} = require('./src/routes/functionsRoutes/index');
const { conn , GenreDb , Platform } = require('./src/db')

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
    
  server.listen(3001, async () => {
    const genresFetch = await fetchGenres().then(result =>  result.data.results)
    const platformsFetch =  fetchPlatforms()
    
      const genresRows = genresFetch.map(genre => {
      GenreDb.findOrCreate({where: {name: genre.name} })
      })
      
      const platformsRows = platformsFetch.map(plat => {
        Platform.findOrCreate({where: {name: plat.name, idAPI: plat.id, img: plat.img} })
        })

    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});