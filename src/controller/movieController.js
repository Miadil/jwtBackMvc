const { findAll } = require("../model/moviesModel");

const getAll = async (req, res) => {
  try {
    const movies = await findAll();
    res.send(movies);
  } catch {
    res.sendStatus(500);
  }
};

module.exports = { getAll };
