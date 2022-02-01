const jokes = require("give-me-a-joke");
const colors = require("colors");
const cowsay=require('cowsay')
// console.log(jokes.getRandomDadJoke(function (joke) {
//     console.log(joke);
// }))
// console.log(colors.green('hello')); // outputs green text
// console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
// console.log(colors.inverse('inverse the color')); // inverses the color
// console.log(colors.rainbow('OMG Rainbows!')); // rainbow
// console.log(colors.trap('Run the trap')); // Drops the bass)
let j;
jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow)
    console.log(joke.inverse)
})