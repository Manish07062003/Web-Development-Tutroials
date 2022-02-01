const express = require("express");
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/r', (req, res) => {
    res.render('home.ejs')
})

app.get('/rand', (req, res) => {
    const rand = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', { num: rand })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    res.render('subreddit',{subreddit})
})

app.get('/cats', (req,res) => {
    const cats=[
        'blue','rocker','monty','stephanie','winston'
    ]
    res.render('cats',{cats})
})

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`)
})