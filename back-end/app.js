const config = require("./config");
const express = require("express");
const cors = require("cors");
const {songs, song, editSong, removeSong, newSong} = require("./controllers/songsController.js");
const {artist, editArtist, removeArtist, artists, newArtist} = require("./controllers/artistsController");
const welcome = require("./controllers/welcome");
const { application } = require("express");

const app = express();

app.use(express.json());
app.use(cors());



app.get("/welcome", welcome);
app.get("/songs", songs);
app.get("/songs/:id", song);
app.post("/songs", newSong);
app.put("/songs/:id", editSong);

app.delete("/songs/:id", removeSong);

app.get("/artists", artists);
app.get("/artists/:id", artist);
app.post("/artists", newArtist);
app.put("/artists/:id", editArtist);
app.delete("/artists/:id", removeArtist);

app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
