const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tut.html'))
})

app.listen(port, () => {
    console.log('Listening on 127.0.0.1:3000');
})