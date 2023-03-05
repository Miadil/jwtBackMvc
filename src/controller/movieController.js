const { findAll, findOne } = require("../model/moviesModel");

const getAll = async (req, res) => {
  try {
    const movies = await findAll();
    res.send(movies);
  } catch {
    res.sendStatus(500);
  }
};
const getOne = async (req, res) => {
  const movieId = req.params.id;
  try {
    const [movie] = await findOne(movieId);
    res.send(movie);
  } catch {
    res.sendStatus(500);
  }
};

module.exports = { getAll, getOne };
