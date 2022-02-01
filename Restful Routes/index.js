const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
//POST routing
app.use(express.urlencoded({ extended: true })) // form submitted data parsing
app.use(express.json())// json data parsing

// Override with post having ?_method=PATCH
app.use(methodOverride('_method'))

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'SkBerBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'Onlysaywoof',
        comment: 'woof woof woof woof'
    }
];
// to view all the comments
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

//Creating a new comment - we make two paths

// to render a form to create a new comment
app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})
// to create a new comment 
app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({ id: uuid(), username, comment })
    res.redirect('/comments')
})


//to show comments
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === (id))
    res.render('comments/show', { comment })
})


// to update a comment
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const Foundcomment = comments.find(c => c.id === (id))
    const NewCommentText = req.body.comment;
    Foundcomment.comment = NewCommentText;
    res.redirect('/comments')
})
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === (id))
    res.render('comments/edit', { comment })
})

//to delete a comment
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments= comments.filter(n => n.id !== id)
    res.redirect('/comments')
})

app.listen(3000, (req, res) => {
    console.log('Listening on the port 3000')
})

