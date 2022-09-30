const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    createdBy: {
        type: String
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

const Vehicle = mongoose.model('Vehicle', vehicleSchema)

module.exports = Vehicle
