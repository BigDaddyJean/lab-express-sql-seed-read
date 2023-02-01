const db = require("../../db");

const deleteArtist = async (req, res, next) => {
  try {
    const {id} = req.params;
    const artist = await db.result("DELETE FROM artist WHERE id = ${id}", {id}, a => a.rowCount);
    if (artist === 0) return next();
    res.json();
  } catch(err) {
    console.error(err)
    return res.status(500).json({message: "something went wrong"})
  }
}

module.exports = deleteArtist;
