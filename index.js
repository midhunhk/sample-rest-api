const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || '3000'

const booksRoute = require('./api/books')
const hotelsRoute = require('./api/hotels')

// Use middleware
app.use( cors() )
app.use( bodyParser.urlencoded({extended: false}) )
app.use( bodyParser.json() )

// Handle http requests
app.get('/', (req, res) => { return res.send('The API is up and running!') })

// Add additional routes
app.use('/books', booksRoute)
app.use('/hotels', hotelsRoute)

// Start the server
app.listen(PORT, () => console.log(`Running on port ${PORT}`) )

exports = module.exports = app
