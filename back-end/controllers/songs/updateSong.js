const db = require("../../db");

const updateSong = async (req, res, next) => {
  try {
    const { name, artist, album, time, is_favorite } = req.body;
    const {id} = req.params;

    let query = 'UPDATE song SET ';

    if (name) query += 'name = ${name}, '
    if (artist) query += 'artist = ${artist}, '
    if (album) query += 'album = ${album}, '
    if (time) query += 'time = ${time}, '
    if (typeof is_favorite !== "undefined") query += 'is_favorite = ${is_favorite}'

    query += ' WHERE id = ${id}';

    const song = await db.result(query, {id, name, artist, album, time, is_favorite}, a => a.rowCount);

    if (song === 0) return next();

    return res.json();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = updateSong;
