const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
const redditData=require('./data.json')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home.ejs')
})
app.get('/r/:reddit', (req, res) => {
    const { reddit } = req.params;
    const data = redditData[reddit];
    if (data) {
        res.render('reddit', { ...data });
    }
    res.render('notfound', { subreddit })
})
app.get('/rand', (req, res) => {
    const rand = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', { num: rand })
})

app.get('/cats', (req, res) => {
    const cats = [
        'blue', 'rocker', 'monty', 'stephanie', 'winston'
    ]
    res.render('cats', { cats })
})

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`)
})