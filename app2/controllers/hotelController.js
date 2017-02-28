'use strict'

const Hotel = require('../models/hotel')

function getHotels (req, res) {

  Hotel.find({}, (err, hotels) => {
    if (err) return res.status(500).send({ message: `Petición errronea: ${err}` })
    if (!hotels) return res.status(404).send({ message: 'No exite ningun resultado' })

    res.status(200).send({ hotels })
  })
}

module.exports = {
	getHotels
}