const { getAllVidGames, getGame, postGame } = require("../services/gamesServices")

const getAllGames = async (req, res) => {
    try {
        const allGames = await getAllVidGames();
        res.status(200).send({ status: "Ok", results: allGames })
    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).send({ status: error.response.status, error: error.response.statusText })
        }
        return res.status(500).send(error.message)
    }
}

const getOneGame = async (req, res) => {
    const { id } = req.params
    const { name } = req.query
    try {
        const game = await getGame(id || name);
        res.status(200).send({ status: "Ok", results: game })
    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).send({ status: error.response.status, error: error.response.statusText })
        }
        return res.status(500).send(error.message)
    }
}

const postOneGame = async (req, res) => {
    try {
        const game = req.body
        const gamePosted = await postGame(game);
        res.status(200).send({ status: "Ok", results: gamePosted })
    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).send({ status: error.response.status, error: error.response.statusText })
        }
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getAllGames,
    getOneGame,
    postOneGame
}