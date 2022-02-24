const express = require('express')
const path = require('path')

// include and initialize the rollbar library with your access token
const Rollbar = require("rollbar");
const rollbar = new Rollbar({
    accessToken: 'd064e6bbd2ce442e84e54adf3d408c61',
    captureUncaught: true,
    captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

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

try {
    nonExistentFunction();
} catch (error) {
    rollbar.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
}

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})