require('dotenv').config();
const axios = require("axios");
const gameStructure = require('./gameStructure');
const { Videogame, Genre } = require("../db");
const gamePostStructure = require('./gamePostStructure');
const { API_KEY } = process.env;

const getAllVidGames = async () => {
  try {
    const apiVideogames = [];
    const dbVideogames = [];
    let page = 1;
    let next = `https://api.rawg.io/api/games?key=${API_KEY}`;
    while (page <= 5) {
      const { data } = await axios.get(next);
      const game_structure = gameStructure(data.results)
      apiVideogames.push(...game_structure);
      next = data.next;
      page++;
    }
    const db = await Videogame.findAll({ include: Genre });
    if (db.length) {
      db.map((v) => {
        dbVideogames.push(v.dataValues)
      })
    }
    return { apiData: apiVideogames, dbData: dbVideogames }
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      throw error;
    }
    throw error;
  }
};

const getGame = async (game) => {
  const searchGames = [];
  let page = 1;
  let next;

  if (isNaN(game)) {
    try {
      next = `https://api.rawg.io/api/games?search=${game}&key=${API_KEY}`;

      while (page <= 5) {
        const { data } = await axios.get(next);
        const game_structure = gameStructure(data.results)
        searchGames.push(...game_structure);
        next = data.next;
        page++;
      }
      return searchGames
    } catch (error) {
      throw error
    }
  }
  try {
    const { data } = await axios.get(`https://api.rawg.io/api/games/${game}?key=${API_KEY}`)
    return gameStructure(data);
  } catch (error) {
    throw error
  }


}

const postGame = async (game) => {
  try {

    const gameToDb = gamePostStructure(game);
    const [ gameDb, created ] = await Videogame.findOrCreate({
      where: { search_name: gameToDb.search_name },
      defaults: gameToDb,
      include: [
        {
          model: Genre,
          through: {
            attributes: []
          }
        }
      ]
    })
    if (game.genres.length) {
      for (const g of game.genres) {
        const genre = await Genre.findOne(
          {
            where: {
              name: g.name
            }
          })
          console.log(game.genres)
        await gameDb.addGenre(genre)
      }
    }
    if (created) return "in-db"
    return "created"
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllVidGames,
  getGame,
  postGame
}