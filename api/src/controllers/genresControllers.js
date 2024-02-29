const { getGenres } = require("../services/genresServices");

const getAllGenres = async (req, res) => {
    try {
        const allGenres = await getGenres();
        res.status(200).send({ status: "Ok", data: allGenres })
    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).send({ status: error.response.status, error: error.response.statusText })
        }
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllGenres
}