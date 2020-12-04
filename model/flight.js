const mongoose = require("mongoose");


const destinationSchema = new mongoose.Schema ({
    airport: {
        type: String
    },
    arrival: {
        type: Date
    }
})

const flightSchema = new mongoose.Schema ({
    airline: {
        type: String,
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
          return (new Date(new Date().setFullYear(new Date().getFullYear() + 1)))
    }
})

module.exports = mongoose.model('Flight', flightSchema);