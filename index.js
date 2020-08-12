const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || '3000'

const booksRoute = require('./api/books')

// Use middleware
app.use( cors() )
app.use( bodyParser.urlencoded({extended: false}) )
app.use( bodyParser.json() )

// Handle http requests
app.get('/', (req, res) => { return res.send('Received a GET HTTP method') })

// Add additional routes
app.use('/books', booksRoute)

// Start the server
app.listen(PORT, () => console.log(`Running on port ${PORT}`) )

exports = module.exports = app