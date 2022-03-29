const server = require('./app.js');
const { fetchGenres , fetchPlatforms} = require('../src/Helpers/index');
const { conn , Genre , Platform } = require('./db.js')

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
    
  server.listen(3001, async () => {
    const genresFetch = await fetchGenres().then(result =>  result.data.results)

    
    const platformsFetch =  fetchPlatforms()
    
      const genresRows = genresFetch.map(genre => {
      Genre.findOrCreate({where: {name: genre.name} })
      })
      
      const platformsRows = platformsFetch.map(plat => {
        Platform.findOrCreate({where: {name: plat.name, idAPI: plat.id, img: plat.img} })
        })

    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});