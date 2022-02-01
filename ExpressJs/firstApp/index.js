const { response } = require('express');
const express = require('express');
const app = express();

// app.use((request,response) => {
//     console.log("We got a new request");
// console.dir(request)
// response.send("HELLO , WE GOT YOUR REQUEST!!")
// response.send({color: 'red'})
//     response.send('<h1>This is my web page</h1>')
// })

app.get('/cats', (req, res) => res.send('<h1>MEOWWWW!!!!</h1>'))
app.post('/cats', (req, res) => res.send('<h1>MEOWWWW!!!!</h1>'))
app.get('/dogs', (req, res) => res.send('<h1>Whoopsss</h1>'))
app.post('/dogs', (req, res) => res.send('<h1>Whoopsss</h1>'))
// app.get('*',(req,res) => res.send("I don't know that path")) for all other paths which we dint gave a response for is considered here
app.get('/r/:subpath', (req, res) => {
    const { subpath } = req.params
    res.send(`This is a ${subpath}`) // accepts anything in place of subpath because we used colon
})
app.get('/r/:subpath/:postId', (req, res) => {
    const { subpath, postId } = req.params
    res.send(`This is a ${subpath} with a id-${postId}`) // accepts anything in place of subpath because we used colon
})

//query strings
app.get('/search', (req, res) => {
    const { q } = req.query
    if(!q){
        res.send('Nothing found')
    }
        res.send(`Search result for: ${q}`)
})



app.listen(8080, () => {
    console.log("Listening on port 8080")
})