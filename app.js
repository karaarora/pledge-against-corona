let express = require('express')
let app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is up and running..")
})

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/coronainvaders', (req, res) => {
    res.render('games/invader')
})