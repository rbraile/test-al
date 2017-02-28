'use strict'

const express = require('express')
const hotelController = require('../controllers/hotelController')
const api = express.Router()

api.get('/hotel', hotelController.getHotels)

module.exports = api