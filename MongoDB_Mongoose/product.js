const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("CONNECTED!!"))
    .catch(error => console.log(error));
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: true
    },
    categories: {
        type: [String],
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        offlne: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['small', 'medium', 'large']
    }
})


// Model Instance Methods

// adding our function to the method object which can be accessed by any instance of the model
productSchema.methods.greet = function () {
    console.log(`HII THIS IS FROM - ${this.name}`)
}
productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}
productSchema.methods.addCategories = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}


// Model Static Methods

//adding out function to the static object which can be used by model like findOne() method etc.
productSchema.statics.fireSale = function () {
    //instead of Product.updateMany({},{onSale:true});
    return this.updateMany({}, { onSale: true, price: 0 });
}

const Product = mongoose.model('Product', productSchema);

// const bike = new Product({ name: 'Sand Bike', price: 900, color: 'RED', categories: ['Cycling', 'Safety'], qty: { online: 100, offline: 20 } })
// bike.save()
//     .then(data => {
//         console.log("IT WORKED!!");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!!");
//         console.log(err);
//     });


Product.findOneAndUpdate({ name: 'Mountain Bike' }, { categories: [], price: 500, onSale: false }, { new: true, runValidators: true })
    .then(data => {
        console.log("UPDATED!");
        console.log(data);
    })
    .catch(err => {
        console.log("OH NO ERROR!!");
        console.log(err);
    })



const findProduct = async function () {
    const foundproduct = await Product.findOne({ name: 'Mountain Bike' });
    foundproduct.greet();
    console.log(foundproduct);
    await foundproduct.toggleOnSale();
    console.log(foundproduct);
    await foundproduct.addCategories('Outdoors');
    console.log(foundproduct);
}
findProduct();

Product.fireSale().then(res => console.log(res));