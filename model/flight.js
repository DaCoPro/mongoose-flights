const mongoose = require("mongoose");


const destinationSchema = new mongoose.Schema ({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DIA', 'LAX', 'SAN'],
    },
    arrival: {
        type: Date,
        default: function() {
            return (new Date(new Date().setFullYear(new Date().getFullYear() + 1)))
        }
    }
})

const flightSchema = new mongoose.Schema ({
    airline: {
        type: String,
        enum: ['Alaska', 'Delta', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DIA', 'LAX', 'SAN'],
        default: 'DIA'
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
    },
    destinations: [destinationSchema],
})

module.exports = mongoose.model('Flight', flightSchema);