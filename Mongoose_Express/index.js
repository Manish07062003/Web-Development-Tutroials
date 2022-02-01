const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Product = require('./models/product.js');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MONGO CONNECTED!!"))
    .catch(error => {
        console.log("MONGO ERROR");
        console.log(error);
    });


app.set('views', path.join(__dirname, 'views')); // Setting the views path 
app.set('view engine', 'ejs');  // requiring EJS
app.use(express.urlencoded({ extended: true })); // to parse the req.body in post requests
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products/new', (req, res) => {
    res.render('products/new');
})
app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category: category });
        res.render('products/index.ejs', { products , category });
    } else {
        const products = await Product.find({});
        res.render('products/index.ejs', { products , category: 'All' });
    }
})
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show.ejs', { product });
})
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit.ejs', { product, categories });
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct.id}`)
})

app.put('/products/:id', async (req, res) => { // since we are updating the whole product we use put request instead of patch, if we want to change a portion of a product we use patch request
    const { id } = req.params;
    await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/products/${id}`);
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(3000, () => {
    console.log("Listening to the port 3000");
})