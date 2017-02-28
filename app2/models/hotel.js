'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HotelSchema = Schema({
    name: String,
    stars: Number,
    price: Object,
    paymentType: Array,
    gallery: Array,
    amenities: Array,
    mealPlan: String
})

module.exports = mongoose.model("Hotel", HotelSchema);