const db = require("../../db");

const updateArtist = async (req, res, next) => {
  try {
    const { name, nationality, age, genre, gender } = req.body;
    const {id} = req.params;

    let query = 'UPDATE artist SET ';

    if (name) query += 'name = ${name}, '
    if (nationality) query += 'nationality = ${nationality}, '
    if (age) query += 'age = ${age}, '
    if (gender) query += 'gender = ${gender} '

    query += ' WHERE id = ${id}';

    const artist = await db.result(query, {id, name, nationality, age, genre, gender}, a => a.rowCount);
    if (artist === 0) return next();
    return res.json();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = updateArtist;
