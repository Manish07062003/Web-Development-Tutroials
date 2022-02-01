// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res => {
//    console.log(res.data.ticker.price) 
// })
// .catch(e => {
//     console.log("ERORR!!!!",e)
// })

//Async Function
const BitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log(e)
    }
}

// setting headers using axios
const jokes = document.querySelector('#newJoke')
const jokebtn = document.querySelector('button')

const addNewJoke =async () => {
    const jokeText =await getDadJoke()
    const newLI = document.createElement('li')
    newLI.append(jokeText)
    jokes.append(newLI)
}
jokebtn.addEventListener('click',addNewJoke)
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke
    } catch (e) {
        return "No Jokes Available :("
    }
}