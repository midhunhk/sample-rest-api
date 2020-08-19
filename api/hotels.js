const express = require('express')
const router = express.Router()
const fs = require('fs');

const hotelsData = JSON.parse( fs.readFileSync('./api/hotelsData.json').toString() )

router.get('/', function (req, res) {
    res.json(hotelsData)
})

router.get('/:hotelId', (req, res) => {
    console.log(`Looking for hotel with id ${req.params.id}`)
    const hotel = hotelsData.filter( item => {
        return item.id === req.params.id
    })
    if(hotel != ''){
        res.send(hotel)
    } else {
        res.status(404).send(`Hotel with id ${id} not found`)
    }
})

router.get('/search/:query', (req, res) => {
    // TODO urldecode query
    const hotel = hotelsData.filter( item => {
        return item.title.toLowerCase().includes(req.params.query.toLowerCase())
    })

    if(hotel.length > 0){
        res.send(hotel)
    } else {
        res.status(400).send('No Results')
    }
})

router.get('/about', function (req, res) {
    res.send('About Hotels')
  })
  
  module.exports = router