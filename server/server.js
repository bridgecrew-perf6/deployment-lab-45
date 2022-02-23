const express = require('express')
const path = require('path')

const app = express()

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/css', function (req, res) {
    res.sendFile(path.join(__dirname, '../main.css'))
})

app.get('/js', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.js'))
})

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})