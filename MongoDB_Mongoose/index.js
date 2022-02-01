const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviesApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("CONNECTED!!"))
    .catch(error => console.log(error));

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});
const Movie = mongoose.model('Movie', movieSchema);
Movie.insertMany([
    { title: "Raazi", year: 2003, score: 9.0, rating: 'R' },
    { title: "Bahubali", year: 2018, score: 10, rating: 'PG' },
    { title: "RRR", year: 2022, score: 9.7, rating: 'PG-13' },
    { title: "Sooryavamshi", year: 2021, score: 8.2, rating: 'R' },
    { title: "Amadeus", year: 1986, score: 9.2, rating: 'R' }
])
    .then(data => {
        console.log("Inserted, IT WORKED!!!")
        console.log(data);
    })
    .catch(err => console.log("OH NO!! ERROR", err));
Movie.updateOne({ title: 'Amadeus' }, { year: 1984 })
.then(res => console.log(res));