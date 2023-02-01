const db = require("../../db");

const singleArtist = async (req, res, next) => {
  try {
    const {id} = req.params;
    const artist = await db.oneOrNone("SELECT * FROM artist WHERE id = ${id}", {id});
    if (!artist) return next();
    res.json(artist);
  } catch(err) {
    console.error(err)
    return res.status(500).json({message: "something went wrong"})
  }
}

module.exports = singleArtist;
