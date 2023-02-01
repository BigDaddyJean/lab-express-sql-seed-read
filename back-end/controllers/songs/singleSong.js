const db = require("../../db");

const singleSong = async (req, res, next) => {
  try {
    const {id} = req.params;
    const song = await db.oneOrNone("SELECT * FROM song WHERE id = ${id}", {id});
    if (!song) return next();
    res.json(song);
  } catch(err) {
    console.error(err)
    return res.status(500).json({message: "something went wrong"})
  }
}

module.exports = singleSong;
