const db = require("../../db");

const deleteSong = async (req, res, next) => {
  try {
    const {id} = req.params;
    const song = await db.result("DELETE FROM song WHERE id = ${id}", {id}, a => a.rowCount);
    if (song === 0) return next();
    res.json();
  } catch(err) {
    console.error(err)
    return res.status(500).json({message: "something went wrong"})
  }
}

module.exports = deleteSong;
