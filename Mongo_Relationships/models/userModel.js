const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("CONNECTED!!"))
    .catch(error => console.log(error));

// ONE TO FEW RELATIONSHIP

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    // mongo creates another unique id for addresses as mongo treats addresses as another schema
    // we can off generating unique id for addresses by _id: {id: false}
    addresses: [
        {
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema);
const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    // we can push as many addresses we want
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save();
    console.log(res);
}

// to push different addresses to the same user
const addAddresses = async (id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street: '100 9th St.',
        city: 'Los Angeles',
        state: 'LA',
        country: 'USA'
    })
    const res = await user.save();
    console.log(res);
}

// makeUser();
addAddresses('62075070e1ac728abf768d12').then(() => {
    mongoose.connection.close();
})