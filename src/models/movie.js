const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieId: Number,
  movieName: String,
  movieImageUrl: String,
  filmSection: String,
  discription: String,
  filmType: String,
  filmQuality: String,
  estimation: String,
  movieTiming: String,
  releaseDate: String,
  filmLanguage: String,
  filmCountry: String,
  directors: String,
  championship: String,
  filmTypeId: Number
});

module.exports = mongoose.model('Movie', movieSchema);