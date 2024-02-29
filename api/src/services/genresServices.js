require('dotenv').config();
const axios = require("axios");
const { Genre } = require('../db');
const { API_KEY } = process.env;

const getGenres = async () => {
    try {
        const allGenres = await Genre.findAll();
        if (!allGenres.length){

            const { data } = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
            await Promise.all(data.results.sort((a, b) => a.name.localeCompare (b.name)).map(async (g)=>{
                let id=g.id
                let name = g.name
                await Genre.findOrCreate({
                    where: {id},
                    defaults: {name}
                })
            }))
            const allGenres = await Genre.findAll()
            return allGenres
        }
        return allGenres
    } catch (error) {
        throw error
    }
}

module.exports = {
    getGenres
}