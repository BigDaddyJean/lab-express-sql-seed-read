const { allArtists, singleArtist, createArtist, updateArtist, deleteArtist } = require("../queries/artists");

const artists = async (req, res) => {
    try {
     
      const results = await allArtists()
      res.json(results);
    } catch(err) {
      console.error(err)
      return res.status(500).json({message: "something went wrong"})
    }
  }

  const newArtist = async (req, res) => {
    try {
      
      await createArtist(req.body);
  
      return res.json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "something went wrong" });
    }
  };

  const removeArtist = async (req, res, next) => {
    try {
      const { id } = req.params;
      const artist = await deleteArtist(id)
      if (artist === 0) return next();
      res.json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "something went wrong" });
    }
  };

  const artist = async (req, res, next) => {
    try {
      const { id } = req.params;
      const artist = await singleArtist(id)
      if (!artist) return next();
      res.json(artist);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "something went wrong" });
    }
  };
  
  const editArtist = async (req, res, next) => {
    try {
      
      const artist = await updateArtist(req.body, req.params.id)
      if (artist === 0) return next();
      return res.json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "something went wrong" });
    }
  };
module.exports = {artists, removeArtist, newArtist, artist, editArtist};