// - GET https://api.rawg.io/api/games
// - GET https://api.rawg.io/api/games?search=akjsbdjasbdjlsabjdksabjkdbaskd&key=7ff8bbd44f5f4f11813f7c78bf6f7f3d
// - GET https://api.rawg.io/api/genres
// - GET https://api.rawg.io/api/games/11935&key=7ff8bbd44f5f4f11813f7c78bf6f7f3d
//https://api.rawg.io/api/platforms?key=7ff8bbd44f5f4f11813f7c78bf6f7f3d


//https://api.rawg.io/api/genres?key=b657ab292d234da18bd8fa41abd98110
const axios = require('axios')

const API_KEY = process.env.API_KEY

module.exports = {  
   
    fetchGames: async function () {
                
        try {
                var promisesArray = [];
                    for(let page = 1; page <= 5; page++) {
                    let allGames = axios.get(`https://api.rawg.io/api/games?page=${page}&key=${API_KEY}`)
                    promisesArray.push(allGames)    
                    }
    
                 let videoGames = await Promise.all(promisesArray).then(value => {
                 let arrayGames = value.map( prom => prom.data.results).flat()
                 let arrayObj = arrayGames.map(e => {
                     
                    let obj = {
                        id: e.id || null,
                        name: e.name || null,
                        description: e.description || null,
                        releaseDate: e.released || null,
                        background_image: e.background_image || null,
                        screenshots: e.short_screenshots || null,
                        genres: e.genres || null,
                        platforms: e.platforms ||null,
                        rating: e.rating || null
                    } 
                    return obj
                     })
                 return arrayObj
            })
             return videoGames
                    
        } catch(error) {
           return 'error fetch games'
        }
    },

        fetchGamesByName : async function (name) {
            

                try {
                    const gamesByName = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)     
                    return gamesByName

                } catch(error) {
                    return 'error game by name'
                }
            },

       
        fetchGameById : async function (id) {
    
                try {
                        const gameById = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)     
                        return gameById

                    } catch(error) {
                        return 'error game by id'
                    }
                },

        fetchGenres: async function () {
            console.log("api", process.env.API_KEY)
            try {
                
                const allGenres = await axios.get(`https://api.rawg.io/api/genres?key=${process.env.API_KEY}`)

                
                return allGenres
            } catch(error) {
                
                return 'error fetch genres'
            }
        },
        fetchPlatforms : function () {

          const platforms = [
            {
            "name": "PC",
            "id": 1,
            "img": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
            },
            {
            "name": "PlayStation 5",
            "id": 2,
            "img": "https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg"
            },
            {
            "name": "Xbox One",
            "id": 3,
            "img": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
            },
            {
            "name": "Xbox Series S/X",
            "id": 4,
            "img": "https://media.rawg.io/media/screenshots/a7b/a7b00877d6290eedbf051cde0f814c0d.jpg"
            },
            {
            "name": "PlayStation 4",
            "id": 5,
            "img": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
            },
            {
            "name": "Nintendo Switch",
            "id": 6,
            "img": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            },
            {
            "name": "iOS",
            "id": 7,
            "img": "https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg"
            },
            {
            "name": "Android",
            "id": 8,
            "img": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
            },
            {
            "name": "Nintendo 3DS",
            "id": 9,
            "img": "https://media.rawg.io/media/games/956/95640d5ea0288c187dbce849a4254a41.jpg"
            },
            {
            "name": "Nintendo DS",
            "id": 10,
            "img": "https://media.rawg.io/media/games/ef9/ef96c016bdc6f6d708085536df3d07ae.jpg"
            },
            {
            "name": "Nintendo DSi",
            "id": 11,
            "img": "https://media.rawg.io/media/screenshots/214/214244246ec66dc4ec5af091c6e10cc7.jpg"
            },
            {
            "name": "macOS",
            "id": 12,
            "img": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
            },
            {
            "name": "Linux",
            "id": 13,
            "img": "https://media.rawg.io/media/games/174/174fabfca02d5730531bab2153a7dfcb.jpg"
            },
            {
            "name": "Xbox 360",
            "id": 14,
            "img": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
            },
            {
            "name": "Xbox",
            "id": 15,
            "img": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
            },
            {
            "name": "PlayStation 3",
            "id": 16,
            "img": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
            },
            {
            "name": "PlayStation 2",
            "id": 17,
            "img": "https://media.rawg.io/media/games/2f5/2f5eb72fe45540e93ac2726877551a20.jpg"
            },
            {
            "name": "PlayStation",
            "id": 18,
            "img": "https://media.rawg.io/media/games/8fc/8fcc2ff5c7bcdb58199b1a4326817ceb.jpg"
            },
            {
            "name": "PS Vita",
            "id": 19,
            "img": "https://media.rawg.io/media/games/2ae/2aedae90b1377a0f3e5ce54d24f8e41a.jpg"
            },
            {
            "name": "PSP",
            "id": 20,
            "img": "https://media.rawg.io/media/games/4d3/4d36d90fd20f0c0e7e66a99fd624b03a.jpg"
            },
            {
            "name": "Wii U",
            "id": 21,
            "img": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg"
            },
            {
            "name": "Wii",
            "id": 22,
            "img": "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg"
            },
            {
            "name": "GameCube",
            "id": 23,
            "img": "https://media.rawg.io/media/games/510/51039d0ec5dc8c3e08ae4374dfceecec.jpg"
            },
            {
            "name": "Nintendo 64",
            "id": 24,
            "img": "https://media.rawg.io/media/screenshots/062/0622bec29ae3ef0e8762a9c9f3e7b0f4.jpg"
            },
            {
            "name": "Game Boy Advance",
            "id": 25,
            "img": "https://media.rawg.io/media/screenshots/a35/a357dd9b955fd12f9363c6d45fcd4f86.jpg"
            },
            {
            "name": "Game Boy Color",
            "id": 26,
            "img": "https://media.rawg.io/media/screenshots/a51/a519f93600f1427375260522f47e2e7b.jpg"
            },
            {
            "name": "Game Boy",
            "id": 27,
            "img": "https://media.rawg.io/media/screenshots/61f/61f183e3d12c7846ed6bd3c027a9fa47.jpg"
            },
            {
            "name": "SNES",
            "id": 28,
            "img": "https://media.rawg.io/media/screenshots/f7a/f7a70f1b271de9b92a9714db33e4c8ba.jpg"
            },
            {
            "name": "NES",
            "id": 29,
            "img": "https://media.rawg.io/media/games/98e/98e3ce9d1be0f578d120168fb6c1e0a0.jpg"
            },
            {
            "name": "Apple II",
            "id": 30,
            "img": "https://media.rawg.io/media/screenshots/ba4/ba456796ee5e190af9cfb2e78feac2ec.jpg"
            },
            {
            "name": "Classic Macintosh",
            "id": 31,
            "img": "https://media.rawg.io/media/games/8fc/8fcc2ff5c7bcdb58199b1a4326817ceb.jpg"
            },
            {
            "name": "Commodore / Amiga",
            "id": 32,
            "img": "https://media.rawg.io/media/games/8fc/8fcc2ff5c7bcdb58199b1a4326817ceb.jpg"
            },
            {
            "name": "Atari 7800",
            "id": 33,
            "img": "https://media.rawg.io/media/screenshots/51a/51aae596dbc0e07ceaf3a4ff328d8478.jpg"
            },
            {
            "name": "Atari 5200",
            "id": 34,
            "img": "https://media.rawg.io/media/games/b21/b21555abc69d04d9b5d7663d478ca81e.jpg"
            },
            {
            "name": "Atari 2600",
            "id": 35,
            "img": "https://media.rawg.io/media/screenshots/8fd/8fd95782254418ea2b1eb910572fa217.jpg"
            },
            {
            "name": "Atari Flashback",
            "id": 36,
            "img": "https://media.rawg.io/media/screenshots/6ff/6ff0d1acf667e782d709d6fb96cddd0a.jpg"
            },
            {
            "name": "Atari 8-bit",
            "id": 37,
            "img": "https://media.rawg.io/media/games/6da/6da8ab4f77ecf00143be5a7e394b4437.jpg"
            },
            {
            "name": "Atari ST",
            "id": 38,
            "img": "https://media.rawg.io/media/screenshots/347/347e1979dcf9b62dc48202b73317a186.jpg"
            },
            {
            "name": "Atari Lynx",
            "id": 39,
            "img": "https://media.rawg.io/media/screenshots/915/9155ccd74e34624294df7de32d8bd4cd.jpg"
            },
            {
            "name": "Atari XEGS",
            "id": 40,
            "img": "https://media.rawg.io/media/screenshots/769/7691726d70c23c029903df08858df001.jpg"
            },
            {
            "name": "Genesis",
            "id": 41,
            "img": "https://media.rawg.io/media/games/da7/da77171112e11fbc2ad2114186bcd2bf.jpg"
            },
            {
            "name": "SEGA CD",
            "id": 42,
            "img": "https://media.rawg.io/media/screenshots/72c/72c8ed772cb73bad06a313551749e8ad.jpg"
            },
            {
            "name": "SEGA Saturn",
            "id": 43,
            "img": "https://media.rawg.io/media/screenshots/70c/70c481150dad10deb3e9afadf9fe7381.jpeg"
            },
            {
            "name": "SEGA 32X",
            "id": 44,
            "img": "https://media.rawg.io/media/screenshots/f12/f1290d54a99f637def413baa6642fa0c.jpg"
            },
            {
            "name": "SEGA Master System",
            "id": 45,
            "img": "https://media.rawg.io/media/screenshots/901/901054a0ec26e08fee47ab7bffdb1ce8.jpg"
            },
            {
            "name": "Dreamcast",
            "id": 46,
            "img": "https://media.rawg.io/media/screenshots/c21/c2123c3dea40946f705a54772ed6238b.jpg"
            },
            {
            "name": "3DO",
            "id": 47,
            "img": "https://media.rawg.io/media/screenshots/e11/e1152adc84db3182ab4c8bca6505fbd2.jpg"
            },
            {
            "name": "Jaguar",
            "id": 48,
            "img": "https://media.rawg.io/media/games/8fc/8fcc2ff5c7bcdb58199b1a4326817ceb.jpg"
            },
            {
            "name": "Game Gear",
            "id": 49,
            "img": "https://media.rawg.io/media/games/983/9833303155b5f348a459500666f6edfc.jpg"
            },
            {
            "name": "Neo Geo",
            "id": 50,
            "img": "https://media.rawg.io/media/screenshots/615/615351a9565d1c4ae1f39d053b1614d4.jpg"
            }
            ]
                return platforms
            
        }
        
}
  



 // fetchPlatforms : async function () {

        //     try {
        //         const allPlatforms = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
        //         return allPlatforms
        //     } catch(error) {
        //         return 'error fetching platforms'
        //     }
        // }