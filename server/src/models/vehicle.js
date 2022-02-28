const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    manufacturedYear: {
        type: Number,
        required: true,
        trim: true,
    },
    color: {
        type: String,
        required: true,
        trim: true,
    }
})

const Vehicle = mongoose.models('Vehicle', vehicleSchema)

module.exports = Vehicle