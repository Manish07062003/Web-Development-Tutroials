const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


//for parsing cookies to a object
app.use(cookieParser('this is my secret'));

app.get('/greet', (req, res) => {
    // using cookies after parser for each and every request
    const { name = "No Name" } = req.cookies;
    res.send(`HEY THERE, ${name}`);
})

app.get('/setname', (req, res) => {
    // sending a cookie
    res.cookie('name', 'Manish Diddi')
    res.cookie('animal', 'Lion')
    res.send('ok! Sent you a cookie')
})
app.get('/getsignedcookie', (req, res) => {
    // we cannot reassign the signed cookie like the normal cookies
    res.cookie('fruit', 'grape', { signed: true })
    res.send('OK,signed your cookie')
})
app.get('/verifyfruit', (req, res) => {
    const { fruit } = req.signedCookies;
    res.send(`verified your ${fruit} cookie`)
})

app.listen(3000, () => {
    console.log("Listening to the port 3000");
})