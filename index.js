const server = require('./src/app.js');
const { fetchGenres, fetchPlatforms } = require('./src/Helpers/index');
const { conn, Genre, Platform } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    const genresFetch = await fetchGenres().then(
      ({ data: { results } }) => results
    );
    const platformsFetch = await fetchPlatforms().then(
      ({ data: { results } }) => results
    );

    const genres = genresFetch.map(({ name }) => {
      Genre.findOrCreate({ where: { name: name } });
    });

    const platforms = platformsFetch.map(({ name, image_background }) => {
      Platform.findOrCreate({ where: { name, img: image_background } });
    });

    console.log('DB listening at PORT : 3001'); // eslint-disable-line no-console
  });
});
