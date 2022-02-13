const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const appError = require('./appError');

const Product = require('./models/product.js');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MONGO CONNECTED!!"))
    .catch(error => {
        console.log("MONGO ERROR");
        console.log(error);
    });


// for handling mongoose errors
function wrapAsync(fn) {
    // since we should return a function
    return function (req, res, next) {
        // catching error inside callback function
        fn(req, res, next).catch(e => next(e));
    }
}



app.set('views', path.join(__dirname, 'views')); // Setting the views path 
app.set('view engine', 'ejs');  // requiring EJS
app.use(express.urlencoded({ extended: true })); // to parse the req.body in post requests
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products/new', (req, res) => {
    res.render('products/new');
})
app.get('/products', wrapAsync(async (req, res, next) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category: category });
        res.render('products/index.ejs', { products, category });
    } else {
        const products = await Product.find({});
        res.render('products/index.ejs', { products, category: 'All' });
    }
}))


app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        // we are throwing an error because we are catching it 
        throw next(new appError(404, 'Product Not Found')); // for async functions we pass errors to the next function and the error will run in by the error handler middleware at the last 
    }
    res.render('products/show.ejs', { product });
}))
app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        // we use return to stop the execution here
        return next(new appError(404, 'Product Not Found')); // for async functions we pass errors to the next function and the error will run in by the error handler middleware at the last 
    }
    res.render('products/edit.ejs', { product, categories });
}))

app.post('/products', wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct.id}`)
}))

app.put('/products/:id', wrapAsync(async (req, res, next) => { // since we are updating the whole product we use put request instead of patch, if we want to change a portion of a product we use patch request
    const { id } = req.params;
    await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/products/${id}`);
}))
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

const handleValidationError = err => {
    return new appError(400, `Validation Failed...${err.message}`);
}

// Error handling middlewares
app.use(function (err, req, res, next) {
    console.log(err.name);
    if (err.name === 'ValidationError') err = handleValidationError(err);
    next(err); // goes to next error handling middleware
})

app.use(function (err, req, res, next) { // this is considered as error handling middleware (only prints when an error is thrown by express)
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("Listening to the port 3000");
})