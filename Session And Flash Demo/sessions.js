const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'MySecret',
    resave: false,
    saveUninitialized: false
}))

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count} times`);
})

app.get('/register', (req, res) => {
    const { username = "Unknown" } = req.query;
    req.session.username = username;
    res.redirect('/greet');
})

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Welcome back, ${username}`);
})

app.listen(3000, () => {
    console.log("Listening to the port 3000");
})