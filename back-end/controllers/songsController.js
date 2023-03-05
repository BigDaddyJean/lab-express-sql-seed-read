const {
  allSongs,
  createSong,
  singleSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

const songs = async (req, res) => {
  try {
    const results = await allSongs(req.query);

    res.json(results);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

const song = async (req, res, next) => {
  try {
    const { id } = req.params;
    const song = await singleSong(id);
    if (!song) return res.status(404).json({ error: "Song Not Found" });
    res.json(song);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

const newSong = async (req, res) => {
  try {
    const result = await createSong(req.body);
    return res.json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

const removeSong = async (req, res, next) => {
  try {
    const { id } = req.params;
    const song = await deleteSong(id);
    if (!song) return res.status(404).json({ error: "Song Not Found" });
    res.json(song);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

const editSong = async (req, res, next) => {
  try {
    const song = await updateSong(req.body, req.params.id);

    if (!song) return next();

    return res.json(song);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};
 
module.exports = { songs, song, newSong, removeSong, editSong };
