const express = require('express');
const app = express();
const morgan = require('morgan');
const appError = require('./appError');

// app.use(morgan('dev'))

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path); // prints https request method and request path
    next();
})
app.use('/dogs', (req, res, next) => { // we can also give paths in app.use()
    console.log("I LOVE DOGS");
    next();
})
const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'Manish') {
        next();
    }
    // res.send("SORRY YOU NEED A PASSWORD")
    throw new appError(401, 'Password Required');
};

// app.use((req, res, next) => { //app.use don't care about the path it recieves each an every requests from the browser
//     console.log("this is my first middleware");
//     next();
// })
// app.use((req, res, next) => {
//     console.log("this is my second middleware");
//     next();
// })

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE');
})
app.get('/error', (req, res) => {
    ChannelMergerNo.fly
})
app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOOF WOOF');
})
app.get('/secrets', verifyPassword, (req, res) => {  // we can pass multiple callback function to app.get() so we have initialised a funtion to verify the password
    res.send("MY SECRET IS: sometimes i wear headphones in public so i dont need to talk to anyone");
})
app.get('/admin', (req, res) => {
    throw new appError(403, 'You are not an admin');
})

app.use((req, res) => { // this runs when nothing is sent to the response
    res.status(404).send("NOT FOUND!!");
})

// app.use(function (err, req, res, next) { // this is considered as error handling middleware (only prints when an error is thrown by express)
//     console.log("*********************************");
//     console.log("************ERROR****************");
//     console.log("*********************************");
//     next(err);
// })

app.use(function (err, req, res, next) { // this is considered as error handling middleware (only prints when an error is thrown by express)
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
})


app.listen(3000, () => {
    console.log("Listening to the port 3000");
})