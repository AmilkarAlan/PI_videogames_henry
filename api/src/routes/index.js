const { Router } = require('express');
const { getOneGame, getAllGames, postOneGame } = require('../controllers/gamesControllers');
const { getAllGenres } = require('../controllers/genresControllers');
const router = Router();

router
    .get("/", getAllGames)
    .get("/genres", getAllGenres)
    .get("/search", getOneGame)
    .get("/search/:id", getOneGame)
    .post("/", postOneGame)



module.exports = router;
