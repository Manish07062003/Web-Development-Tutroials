const mongoose = require('mongoose');
const { Schema } = mongoose;


mongoose.connect('mongodb://localhost:27017/relationshipDemo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("CONNECTED!!"))
    .catch(error => console.log(error));

// ONE TO BAJILIONS 
const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
// const user = await new User({
//     username: 'chickenfan99',
//     age: 20
// })
//     const user = await User.findOne({ username: 'chickenfan99' })

//storing a user reference (object id) in each tweet
//     const tweet2 = await new Tweet({
//         text: 'lol, my chicken layed eggs',
//         likes: 50
//     })
//     tweet2.user = user;
// await user.save();
//     await tweet2.save();
// }

// makeTweets()
//     .then(() => {
//         mongoose.connection.close();
//     })

const findTweet = async () => {
    // user property inside tweet is no longer set to _id since we populated it, it is replaced with the mongoose document returned from the database by performing a different query before returning the result 
    // populates only username of the user ignores the age of the user
    const tweet = await Tweet.find({}).populate('user', 'username');
    console.log(tweet);
}
findTweet();
