const server = require('./app.js');
const { fetchGenres , fetchPlatforms} = require('../src/Helpers/index');
const { conn , Genre , Platform } = require('./db.js')

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
    
  server.listen(3001, async () => {
    const genresFetch = await fetchGenres().then(result =>  result.data.results)
    


   const genres =  genresFetch.map(({name}) => {
      Genre.findOrCreate({where: {name : name} })
      })
    
    const platformsFetch = fetchPlatforms()
    
    platformsFetch.map(({name , img}) => {
      Platform.findOrCreate({where: {name,  img} })
      })
      
      

    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});