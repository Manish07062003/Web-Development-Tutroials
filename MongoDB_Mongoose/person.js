const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("CONNECTED!!"))
    .catch(error => console.log(error));

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

// virtuals
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`;
})

// Middleware
personSchema.pre('save', async function () {
    this.first = 'Yo'
    this.last = 'Mama'
    console.log("About to save");
})

personSchema.post('save', async function () {
    console.log("Just saved");
})

const Person = mongoose.model('Person', personSchema);
