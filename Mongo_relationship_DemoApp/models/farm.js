const mongoose = require('mongoose');
const Product = require('../models/product');
const { Schema } = mongoose;

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email required']
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
    ]
})

// this runs before the query findByIdAndDelete() so it doesn't have the query
// farmSchema.pre('findOneAndDelete', async function (data) {
//     console.log("PRE MIDDLEWARE");
//     console.log(data);
// })

// this runs after the query so it has the query which we sent in findByIdAndDelete()
farmSchema.post('findOneAndDelete', async function (farm) {
    if (farm.products.length) {
        // deletes all the products which matches the farms.products array 
        const res = await Product.deleteMany({ _id: { $in: farm.products } });
        console.log(res);
    }
})


const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;