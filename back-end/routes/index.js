const express = require("express");
const { allSongs, createSong, singleSong, deleteSong, updateSong } = require("../controllers/songs");
const { allArtists, singleArtist, createArtist, updateArtist, deleteArtist } = require("../controllers/artists");
const welcome = require("../controllers/welcome");
const notFound = require("../controllers/notFound");

const songV = require("../validators/song");
const artistV = require("../validators/artist");

const router = express.Router()

router.get("/", welcome);
router.get("/songs", allSongs);
router.get("/songs/:id", singleSong);
router.post("/songs", songV, createSong);
router.put("/songs/:id", updateSong);
router.delete("/songs/:id", deleteSong);

router.get("/artists", allArtists);
router.get("/artists/:id", singleArtist);
router.post("/artists", artistV, createArtist);
router.put("/artists/:id", updateArtist);
router.delete("/artists/:id", deleteArtist);

router.use(notFound);

module.exports = router
