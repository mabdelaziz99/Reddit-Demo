const express = require('express')
const app = express()
const path = require ('path')
const redditData = require ('./data.json')

//to be able to excute the index.js from anywhere
app.use(express.static(path.join(__dirname, '/public')))

//to use ejs views, and from anywhere
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))


app.get('/', (req, res) => {
    
    res.render('home.ejs')
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params
    const data = redditData [subreddit]
    if (data){
    res.render('subreddit', {...data})
    }else {
        res.render('notfound', {subreddit})
    }
})
// app.get(/(.*)/, (req, res) => {
//     const {subreddit} = req.params
//     res.render('notfound', 'subreddit')
// })

app.listen(3000, () => {
    console.log("LISTENING")
})