const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/grid', (req, res) => {
    res.render('grid')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})